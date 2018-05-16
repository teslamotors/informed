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

const makeDotArray = ( path ) => {
  return path.replace(/\[(\d+)]/g, '.[$1]').split('.');
}

function isArray (a) {
  return Array.isArray(a)
}

function isObject (a) {
  return !Array.isArray(a) && typeof a === 'object' && a !== null
}

const buildMap = ( cursor ) => {
  if( isObject(cursor) ){
    // Cursor is an object so we need a new map
    const map = new Map();
    // Iterate over each field and set to result
    Object.keys(cursor).forEach((key)=>{
      map.set( key, buildMap( cursor[key] ) );
    })
    // Return our new map
    return map;
  } else if( isArray(cursor) ) {
    // Cursor is an array so we need a new map
    const map = new Map();
    // Iterate over each element and set to result
    cursor.forEach((value, i)=>{
      map.set( i, buildMap( value ) );
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

  constructor( object = {} ){
    this.object = object;
    this.map = buildMap( object );
  }

  get( path ){

    const pathArray = makePathArray( path );

    const get = ( cursor, key, nextKey, i ) => {
      // Base case1: cursor is undefined so just return
      if( cursor == null ){
        return;
      }
      // Base case2: next key is undefined
      if( nextKey == null ){
        return cursor[ key ];
      }
      // Recur
      return get( cursor[ key ], pathArray[i+1], pathArray[i+2], i+1);
    }
    // Start recuring
    return get( this.object, pathArray[0], pathArray[1], 0 )
  }

  set( path, value ){

    const pathArray = makePathArray( path );

    const set = ( cursor, map, key, nextKey, i ) => {

      // Base case: next key is undefined
      if( nextKey == null ){
        // Only modify if there is a cursor
        if( cursor ){
          if( value == null ){
            delete cursor[key];
            map.delete(key);
          } else {
            cursor[key] = value;
            map.set(key, value)
          }
        }
        return;
      }

      // If the next key is a number and the cursor is not an array yet we
      // need to initialize it
      if (typeof nextKey === 'number' && !isArray(cursor[key]) && value != null) {
        cursor[key] = [];
        map.set(key, new Map());
      }
      // If the next key is not a number and the cursor is not an object yet
      // we need to initialize it
      if (typeof nextKey !== 'number' && !isObject(cursor[key]) && value != null) {
        cursor[key] = {};
        map.set(key, new Map());
      }

      // If the next cursor is an array or object then we pass down a new map
      const nextMap = isObject(cursor[key]) || isArray(cursor[key]) ? map.get(key) : map;

      // Recur
      set( cursor[ key ], nextMap, pathArray[i+1], pathArray[i+2], i+1);

      // Check map
      if( nextMap.size === 0 ){
        delete cursor[key];
        map.delete(key);
      }
    }

    // Start recuring
    set( this.object, this.map, pathArray[0], pathArray[1], 0 );
  }

}

export default ObjectMap;
