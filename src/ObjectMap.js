import { Debug } from './debug';
const debug = Debug('informed:ObjMap' + '\t');

/**
 *
 * A data structure to read and write to a JS object via
 * JSPAN ( Java Script Property Access Notation )
 */

/* -------------------- toPath -------------------- */

const ldtoPath = (path = '') => {
  return String.prototype.replace
    .call(path, /\['(.+?)'\]/g, '.$1')
    .split(/[,[\].]+?/)
    .filter(Boolean);
};

/* --------------------- get --------------------- */

const ldget = (obj, path = '', defaultValue) => {
  const result = String.prototype.replace
    .call(path, /\['(.+?)'\]/g, '.$1')
    .split(/[,[\].]+?/)
    .filter(Boolean)
    .reduce(
      (res, key) => (res !== null && res !== undefined ? res[key] : res),
      obj
    );
  return result === undefined || result === obj ? defaultValue : result;
};

/* --------------------- swap --------------------- */
const ldSwap = (arr, a, b) => {
  if (arr[a] && arr[b]) {
    const oldA = arr[a];
    const oldB = arr[b];
    arr[a] = oldB;
    arr[b] = oldA;
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      `Attempted to swap ${a} with ${b} but one of them does not exist :(`
    );
  }
};

/* --------------------- has --------------------- */

// foo -->
// foo.bar --> foo
// foo.bar[3] --> foo.bar
// foo.bar.baz[2].raz.taz[5].laz --> foo.bar.baz[2].raz.taz[5]
const parentPath = path => {
  return `.${path}`.replace(/(.*)[.[].*/, '$1').replace(/\./, '');
};

// foo --> foo
// foo.bar --> bar
// foo.bar[3] --> [3]
// foo.bar.baz[2].raz.taz[5].laz --> laz
const pathKey = path => {
  return path.replace(parentPath(path), '').replace(/\./, '');
};

const ldhas = (obj, path) => {
  const pPath = parentPath(path);
  const key = pathKey(path);
  // If we have parent path then get the object at that location
  // .. otherwise its the root object
  const parentObj = pPath ? ldget(obj, pPath) : obj;
  // If its [3] turn key into 3
  return !!(
    parentObj &&
    Object.hasOwnProperty.call(parentObj, key.replace(/\[(.*)\]/, '$1'))
  );
};

/* --------------------- set --------------------- */

const ldset = (obj, path = '', val) => {
  String.prototype.replace
    .call(path, /\['(.+?)'\]/g, '.$1')
    .split(/[,[\].]+?/)
    .filter(Boolean)
    .reduce((res, key, i, arr) => {
      //console.log('RES', res, 'Key', key, 'I', i, 'Arr', arr, 'OBJ', obj);
      // At the leaf set the value
      if (i === arr.length - 1) {
        res[key] = val;
        return res[key];
      }
      // Initialize to new array or object if needed
      // OLD CODE: if (res[key] === undefined) {
      // Note I left comment above because it used to be undefined check
      // I had to change it to object in case someone tried to set
      // a value on an existing non object type
      // Example ldSet({ foo: 'HelloWorld' }, 'foo.bar', 'Hello World')
      // ==> { foo: { bar: 'HelloWorld' } }
      if (typeof res[key] !== 'object') {
        if (Number.isInteger(+arr[i + 1])) {
          res[key] = [];
        } else {
          res[key] = {};
        }
        return res[key];
      }
      // Exception for if the value is changeing to an array
      if (Number.isInteger(+arr[i + 1]) && !Array.isArray(res[key])) {
        res[key] = [];
      }
      //TODO exception for if object ??

      // Otherwise keep whats there
      return res[key];
    }, obj);
};

/* --------------------- unset --------------------- */

const ldunset = (obj, path = '') => {
  let found = false;
  String.prototype.replace
    .call(path, /\['(.+?)'\]/g, '.$1')
    .split(/[,[\].]+?/)
    .filter(Boolean)
    .reduce((res, key, i, arr) => {
      // Base case res is undefined
      if (res === undefined) {
        return res;
      }
      // At the leaf delete the value
      if (i === arr.length - 1) {
        delete res[key];
        found = true;
        return res[key];
      }
      // Otherwise keep going
      return res[key];
    }, obj);
  return found;
};

/* --------------------- pullAt --------------------- */

const ldpullAt = (obj, path = '') => {
  let pulled;
  String.prototype.replace
    .call(path, /\['(.+?)'\]/g, '.$1')
    .split(/[,[\].]+?/)
    .filter(Boolean)
    .reduce((res, key, i, arr) => {
      // Base case res is undefined
      if (res === undefined) {
        return res;
      }
      // At the leaf delete the value
      if (i === arr.length - 1 && Array.isArray(res)) {
        // Pull out one value at index ( key )
        pulled = res.splice(key, 1);
        return res[key];
      }
      // Otherwise keep going
      return res[key];
    }, obj);
  return pulled;
};

/* --------------------- values --------------------- */

// eslint-disable-next-line no-unused-vars
const ldvalues = (obj = {}) => {
  const props = Object.keys(obj);
  return props.map(key => obj[key]);
};

const pathToArrayElem = path => {
  const pathArray = ldtoPath(path);
  return Number.isInteger(+pathArray[pathArray.length - 1]);
};

export class ObjectMap {
  static empty(object) {
    // return ldvalues(object).length === 0;
    for (let i in object) return false;
    return true;
  }

  static get(object, path) {
    const val = ldget(object, path);
    //debug('GOT', path, val);
    return val;
  }

  static has(object, path) {
    return ldhas(object, path);
  }

  static set(object, path, value) {
    if (value !== undefined) {
      debug('Setting', path, value);
      ldset(object, path, value);
    } else {
      // Setting things to undefined in informed is special!
      // so in this else statement we deal with that

      // If the path is to an array leaf then we want to set to undefined
      // Example:
      // path = 'foo.bar[2]'
      // foo.bar = [ 'baz', 'raz', 'taz' ]
      // setting taz to undefined   ^^^
      if (pathToArrayElem(path) && ObjectMap.get(object, path) !== undefined) {
        debug('Special case SETTING', path, 'to undefined');
        ldset(object, path, undefined);
        let pathArray = ldtoPath(path);
        pathArray = pathArray.slice(0, pathArray.length - 1);
        cleanup(object, pathArray, false);
      }
      // Only delete the field if it needs to be deleted and its not a path to an array ( array leaf )
      // Example:
      // path = 'foo.bar'
      // foo.bar = 'baz'
      // removing foo.bar from the object completley
      else if (
        !pathToArrayElem(path) &&
        ObjectMap.get(object, path) !== undefined
      ) {
        debug('Special case REMOVING', path, 'from object completley');
        ObjectMap.delete(object, path);
      }
    }
  }

  static delete(object, path) {
    debug('DELETE', path);

    // Special case for arrays
    if (pathToArrayElem(path)) {
      debug('ARRAY PATH', path);
      //ldunset(object, path);
      this.pullOut(object, path);
    } else {
      ldunset(object, path);
    }

    let pathArray = ldtoPath(path);
    pathArray = pathArray.slice(0, pathArray.length - 1);
    cleanup(object, pathArray);
    debug('DELETED', path);
  }

  // Very important ;)
  static pullOut(object, path) {
    // Get the path to the array
    let pathArray = ldtoPath(path);
    // debug('PathArray1', pathArray);
    const index = pathArray[pathArray.length - 1];
    pathArray = pathArray.slice(0, pathArray.length - 1);
    debug('Pulling out:', pathArray, 'index', index);
    // Get the array
    const arr = ldget(object, pathArray);
    debug('Array Before', arr);
    // Pull out of array
    if (Array.isArray(arr)) {
      ldpullAt(arr, index);
    }
    debug('Array After', arr);
    cleanup(object, pathArray);
  }

  static purge(obj) {
    let newObj = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach(key => {
      // Its an object recur
      if (typeof obj[key] === 'object') {
        newObj[key] = ObjectMap.purge(obj[key]);
        // If its empty after purge delete
        if (Object.keys(newObj[key]).length === 0) {
          delete newObj[key];
        }
      } else if (obj[key] !== undefined) {
        newObj[key] = obj[key];
      }
    });
    return newObj;
  }

  // Very important ;)
  static swap(object, path, i, j) {
    // Get the path to the array
    console.log('Swaping out out:', path, i, j);
    // Get the array
    const arr = ldget(object, path);
    console.log('Array', arr);
    // Pull out of array
    if (Array.isArray(arr)) {
      ldSwap(arr, i, j);
    }
  }
}

function cleanup(obj, path) {
  // uncomment this to add third param back
  //,pull = true) {

  // Base case no path left
  if (path.length === 0) {
    return;
  }

  const object = ldget(obj, path);

  // Clean up undefined from array
  // if (Array.isArray(object) && pull) {
  //   ldpull(object, undefined);
  // }

  // Delete object if its empty
  if (
    Array.isArray(object)
      ? object.every(e => e == null)
      : JSON.stringify(object) === '{}'
  ) {
    ldunset(obj, path);
  }
  // Recur
  cleanup(obj, path.slice(0, path.length - 1));
}
