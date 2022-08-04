import { ObjectMap } from './ObjectMap';

const OWN_KEYS_SYMBOL = Symbol('own keys');
const ORIG_SYMBOL = Symbol('original object');

const PROXY = 'p';
const AFFECTED = 'a';
const CACHE = 'c';

const getProto = Object.getPrototypeOf;
const objectsToTrack = new WeakMap();

function shouldTrack(obj) {
  if (objectsToTrack.has(obj)) {
    return objectsToTrack.get(obj);
  }

  return (
    obj &&
    (getProto(obj) === Object.prototype || getProto(obj) === Array.prototype)
  );
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function isOwnKeysChanged(origObj, nextObj) {
  const origKeys = Reflect.ownKeys(origObj);
  const nextKeys = Reflect.ownKeys(nextObj);

  return (
    origKeys.length !== nextKeys.length ||
    origKeys.some((k, i) => k !== nextKeys[i])
  );
}

export function createProxyHandler(origObj) {
  function recordUsage(h, key) {
    let used = h[AFFECTED].get(origObj);

    if (!used) {
      used = new Set();
      h[AFFECTED].set(origObj, used);
    }

    used.add(key);
  }

  return {
    get(target, key) {
      if (key === ORIG_SYMBOL) {
        return origObj;
      }

      if (key === 'toJSON') {
        return function toJSON() {
          return target;
        };
      }

      let usedKey = key;
      let value = target[String(key)];

      // special access for path keys
      if (
        typeof key === 'string' &&
        key.indexOf('.') !== -1 &&
        !(key in target)
      ) {
        value = ObjectMap.get(target, key) ?? value;
        usedKey = `$key:${key}`;
      }

      recordUsage(this, usedKey);

      return createDeepProxy(value, this[AFFECTED], this[CACHE]);
    },
    has(target, key) {
      recordUsage(this, key);

      return key in target;
    },
    ownKeys(target) {
      recordUsage(this, OWN_KEYS_SYMBOL);

      return Reflect.ownKeys(target);
    }
  };
}

export function createDeepProxy(target, affected, cache) {
  if (!shouldTrack(target)) return target;

  let proxyHandler = cache.get(target);
  if (!proxyHandler) {
    proxyHandler = createProxyHandler(target);
    proxyHandler[PROXY] = new Proxy(target, proxyHandler);
    cache.set(target, proxyHandler);
  }

  proxyHandler[AFFECTED] = affected;
  proxyHandler[CACHE] = cache;

  return proxyHandler[PROXY];
}

function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    let length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; ) if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
  }

  return a !== a && b !== b;
}

export function isDeepChanged(origObj, nextObj, affected) {
  if (Object.is(origObj, nextObj) && !isObject(origObj)) {
    return false;
  }

  if (!isObject(origObj) || !isObject(nextObj)) {
    return true;
  }

  const used = affected.get(origObj);

  if (!used) {
    return true;
  }

  for (const key of used) {
    let isChanged =
      key === OWN_KEYS_SYMBOL
        ? isOwnKeysChanged(origObj, nextObj)
        : isDeepChanged(origObj[key], nextObj[key], affected);

    if (typeof key === 'string' && /^\$key:/.test(key)) {
      const parsedKey = key.replace(/^\$key:/, '');
      const origValue = ObjectMap.get(origObj, parsedKey);
      const nextValue = ObjectMap.get(nextObj, parsedKey);

      isChanged = !equal(origValue, nextValue);
    }

    if (isChanged) {
      return isChanged;
    }
  }

  return false;
}

export function unwrap(obj) {
  if (!shouldTrack(obj)) return obj;

  return ORIG_SYMBOL in obj ? obj[ORIG_SYMBOL] : obj;
}
