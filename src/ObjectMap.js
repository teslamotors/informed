import ldset from 'lodash/setWith';
import ldunset from 'lodash/unset';
import ldtoPath from 'lodash/toPath';
import ldget from 'lodash/get';
import ldvalues from 'lodash/values';
import ldpullAt from 'lodash/pullAt';
import ldpull from 'lodash/pull';

class ObjectMap {
  static empty(object) {
    return ldvalues(object).length === 0;
  }

  static get(object, path) {
    return ldget(object, path);
  }

  static set(object, path, value) {
    if( value !== undefined ){
      ldset(object, path, value);
    } else {
      ObjectMap.delete(object, path);
    }
  }

  static delete(object, path) {
    console.log('DELETE', path);
    ldunset(object, path);
    let pathArray = ldtoPath(path);
    pathArray = pathArray.slice(0, pathArray.length - 1);
    cleanup(object, pathArray);
  }

  static pullOut(object, path, index) {
    // Get the path to the array
    let pathArray = ldtoPath(path);
    pathArray = pathArray.slice(0, pathArray.length - 1).join();
    console.log('PathArray', pathArray);
    // Get the array
    const arr = ldget(object, pathArray);
    console.log('Array', arr);
    // Pull out of array
    ldpullAt(arr, index);
  }
}

function cleanup(obj, path) {
  // Base case no path left
  if (path.length === 0) {
    return;
  }

  const object = ldget(obj, path);

  // Clean up undefined from array
  if (Array.isArray(object)) {
    ldpull(object, undefined);
  }

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

export default ObjectMap;
