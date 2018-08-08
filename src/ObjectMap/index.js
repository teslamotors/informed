import makePathArray from '../utils/makePathArray';

function isArray(a) {
  return Array.isArray(a);
}

function isObject(a) {
  return !Array.isArray(a) && typeof a === 'object' && a !== null;
}

const buildMap = cursor => {
  if (isObject(cursor)) {
    // Cursor is an object so we need a new map
    const map = new Map();
    // Iterate over each field and set to result
    Object.keys(cursor).forEach(key => {
      const result = buildMap(cursor[key]);
      if (result != null) map.set(key, result);
    });
    // Return our new map
    return map;
  } else if (isArray(cursor)) {
    // Cursor is an array so we need a new map
    const map = new Map();
    // Iterate over each element and set to result
    cursor.forEach((value, i) => {
      const result = buildMap(value);
      if (result != null) map.set(i, result);
    });
    // Return our new map
    return map;
  }
  // Base case, cursor is not object or array
  else {
    return cursor;
  }
};

class ObjectMap {
  constructor(object = {}) {
    this.object = JSON.parse(JSON.stringify(object));
    this.map = buildMap(this.object);
    this.paths = new Map();
  }

  empty() {
    return this.map.size === 0;
  }

  rebuild(object = {}) {
    this.object = JSON.parse(JSON.stringify(object));
    this.map = buildMap(this.object);
  }

  get(path) {
    // Get the path array from our registered paths
    let pathArray = this.paths.get(path);

    // Check to see if path exists and if not build and add it to our paths
    if (!pathArray) {
      pathArray = makePathArray(path);
      this.paths.set(path, pathArray);
    }

    const get = (cursor, key, nextKey, i) => {
      // Base case1: cursor is undefined so just return
      if (cursor == null) {
        return;
      }
      // Base case2: next key is undefined
      if (nextKey == null) {
        return cursor[key];
      }
      // Recur
      return get(cursor[key], pathArray[i + 1], pathArray[i + 2], i + 1);
    };
    // Start recuring
    return get(this.object, pathArray[0], pathArray[1], 0);
  }

  set(path, value, del) {
    // Get the path array from our registered paths
    let pathArray = this.paths.get(path);

    // Check to see if path exists and if not build and add it to our paths
    if (!pathArray) {
      pathArray = makePathArray(path);
      this.paths.set(path, pathArray);
    }

    const set = (cursor, map, key, nextKey, i) => {
      // Base case 1: cursor is undefined
      if (cursor == null) {
        return;
      }

      // Base case 2: next key is undefined
      if (nextKey == null) {
        if (value == null) {
          if (isArray(cursor) && del) {
            cursor.splice(key, 1);
          } else {
            delete cursor[key];
          }
          map.delete(key);
        } else {
          cursor[key] = value;
          map.set(key, value);
        }
        return;
      }

      // We only initialize if the value is not null or undefined
      if (value != null) {
        // If the next key is a number and the cursor is not an array yet we
        // need to initialize it.
        if (typeof nextKey === 'number' && !isArray(cursor[key])) {
          cursor[key] = [];
          map.set(key, new Map());
        }
        // If the next key is not a number and the cursor is not an object yet
        // we need to initialize it
        if (typeof nextKey !== 'number' && !isObject(cursor[key])) {
          cursor[key] = {};
          map.set(key, new Map());
        }
      }

      // If the next cursor is an array or object then we pass down a new map
      const nextMap =
        isObject(cursor[key]) || isArray(cursor[key]) ? map.get(key) : map;

      // Recur
      set(cursor[key], nextMap, pathArray[i + 1], pathArray[i + 2], i + 1);

      // Check map
      if (nextMap.size === 0) {
        delete cursor[key];
        map.delete(key);
      }
    };

    // Start recuring
    set(this.object, this.map, pathArray[0], pathArray[1], 0);
  }

  delete(path) {
    this.set(path, null, true);
    this.paths.delete(path);
  }
}

export default ObjectMap;
