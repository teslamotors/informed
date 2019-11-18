import ldset from 'lodash/setWith';
import ldunset from 'lodash/unset';
import ldtoPath from 'lodash/toPath';
import ldget from 'lodash/get';
import ldhas from 'lodash/has';
import ldvalues from 'lodash/values';
import ldpullAt from 'lodash/pullAt';
import ldpull from 'lodash/pull';
import Debug from './debug';
const debug = Debug('informed:ObjMap' + '\t');

const pathToArrayElem = (path) => {
  const pathArray = ldtoPath(path);
  return Number.isInteger(+pathArray[pathArray.length - 1]);
};

class ObjectMap {
  static empty(object) {
    return ldvalues(object).length === 0;
  }

  static get(object, path) {
    const val = ldget(object, path);
    debug('GOT', path, val);
    return val;
  }

  static has(object, path) {
    return ldhas(object, path);
  }

  static set(object, path, value) {
    if (value !== undefined) {
      debug('SETTING', path, value);
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
      else if (!pathToArrayElem(path) && ObjectMap.get(object, path) !== undefined) {
        debug('Special case REMOVING', path, 'from object completley');
        ObjectMap.delete(object, path);
      }
    }
  }

  static delete(object, path) {
    debug('DELETE', path);
    ldunset(object, path);
    let pathArray = ldtoPath(path);
    pathArray = pathArray.slice(0, pathArray.length - 1);
    cleanup(object, pathArray);
  }

  // May need to do this some day ;)
  // static pullOut(object, path, index) {
  //   // Get the path to the array
  //   let pathArray = ldtoPath(path);
  //   pathArray = pathArray.slice(0, pathArray.length - 1).join();
  //   debug('PathArray', pathArray);
  //   // Get the array
  //   const arr = ldget(object, pathArray);
  //   debug('Array', arr);
  //   // Pull out of array
  //   ldpullAt(arr, index);
  // }
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
