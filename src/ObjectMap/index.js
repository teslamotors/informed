/**
 * Takes in a path string and turns it into a path array
 *
 * @param path path into an object
 *        Example: "foo.bar.baz[0].taz.bar[10][3].bar.0.5"
 *
 * Given the following input the following output will be generated
 * Input : "foo.bar.baz[0].taz.bar[10][3].bar.0.5"
 * Output: [ 'foo', 'bar', 'baz', 0, 'taz', 'bar', 10, 3, 'bar', '0', '5' ]
 */
const makePathArray = ( path ) => {
  const pathArray = path.
    replace(/\[(\d+)]/g, '.__int__$1')
    .split('.')
    .map(e => e.indexOf('__int__') === 0 ? parseInt(e.substring(7),10) : e );
  return pathArray;
}

function isArray (a) {
  return Array.isArray(a)
}

function isObject (a) {
  return !Array.isArray(a) && typeof a === 'object' && a !== null
}

class ObjectMap {

  static get ( obj, path ) {
    const pathArray = makePathArray( path );

    let cursor = obj;
    let key = pathArray[0]

    for( let i = 0; i < pathArray.length - 1; i++ ){
      if( cursor == undefined ){
        return undefined;
      }
      cursor = cursor[ key ];
      key = pathArray[i+1];
    }

    return cursor == undefined ? undefined : cursor[ key ];
  }

  static set ( obj, path, value ) {

    // Sanity check for undefined
    if( !isObject( obj ) ){
      throw new Error('Cannot call set with undefined map!');
    }

    const pathArray = makePathArray( path );

    let cursor = obj;
    let key = pathArray[0];
    let nextKey = pathArray[1];

    for( let i = 0; i < pathArray.length - 1; i++ ){
      // If the next key is a number and the cursor is not an array yet we
      // need to initialize it
      if (typeof nextKey === 'number' && !isArray(cursor[key])) {
        cursor[key] = [];
      }
      // If the next key is not a number and the cursor is not an object yet
      // we need to initialize it
      if (typeof nextKey !== 'number' && !isObject(cursor[key])) {
        cursor[key] = {};
      }
      cursor = cursor[ key ];
      key = pathArray[i+1];
      nextKey = pathArray[i+2];
    }
    cursor[ key ] = value;
  }

}

export default ObjectMap;
