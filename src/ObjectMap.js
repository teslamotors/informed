import ldset from 'lodash/setWith';
import ldunset from 'lodash/unset';
import ldtoPath from 'lodash/toPath';
import ldget from 'lodash/get';
import ldvalues from 'lodash/values';
import ldpullAt from 'lodash/pullAt';
import ldpull from 'lodash/pull';
import Debug from 'debug';
const debug = Debug('informed:ObjMap' + '\t');

const pathToArrayElem = (path) => {
  const pathArray = ldtoPath(path);
  return Number.isInteger(+pathArray[pathArray.length-1]);
};

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
      // If the path is to an array leaf then we want to set to undefined
      if( pathToArrayElem(path) && ObjectMap.get(object, path) !== undefined ) {
        ldset(object, path, undefined);
        let pathArray = ldtoPath(path);
        pathArray = pathArray.slice(0, pathArray.length - 1);
        cleanup(object, pathArray, false);
      }
      // Only delete the field if it needs to be deleted and its not a path to an array ( array leaf )
      else if( !pathToArrayElem(path) && ObjectMap.get(object, path) !== undefined ) ObjectMap.delete(object, path);
    }
  }

  static delete(object, path) {
    debug('DELETE', path);
    ldunset(object, path);
    let pathArray = ldtoPath(path);
    pathArray = pathArray.slice(0, pathArray.length - 1);
    cleanup(object, pathArray);
  }

  static pullOut(object, path, index) {
    // Get the path to the array
    let pathArray = ldtoPath(path);
    pathArray = pathArray.slice(0, pathArray.length - 1).join();
    debug('PathArray', pathArray);
    // Get the array
    const arr = ldget(object, pathArray);
    debug('Array', arr);
    // Pull out of array
    ldpullAt(arr, index);
  }
}

function cleanup(obj, path, pull = true) {
  // Base case no path left
  if (path.length === 0) {
    return;
  }

  const object = ldget(obj, path);

  // Clean up undefined from array
  if (Array.isArray(object) && pull) {
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
