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

const buildMap = ( map, cursor, path ) => {
  if( isArray(cursor) ) {
    map.set(path, cursor)
    cursor.forEach((value, i)=>{
      buildMap( map, value, `${path}[${i}]`)
    })
  }
  else if( isObject(cursor) ){
    if( path !== '' ){
      map.set(path, cursor);
    }
    Object.keys(cursor).forEach((key)=>{
      buildMap( map, cursor[key], path !== '' ? `${path}.${key}` : key )
    })
  } else {
    map.set(path, cursor);
  }
};

class ObjectMap {

  constructor( object = {} ){
    this.object = object;
    this.map = new Map();
    buildMap( this.map, object, '' )
  }

  get ( path ) {
    return this.map.get(path);
  }

  set( path, value ){

    const pathArray = makePathArray( path );

    const set = ( cursor, key, nextKey, i, mapKey ) => {

      // Base case: next key is undefined
      if( nextKey == null ){
        if( value == null ){
          delete cursor[key];
          this.map.delete( mapKey );
          console.log("HERE!!", this.map.size);
        } else {
          cursor[ key ] = value;
          this.map.set( mapKey, value );
        }
        return;
      }

      // If the next key is a number and the cursor is not an array yet we
      // need to initialize it
      if (typeof nextKey === 'number' && !isArray(cursor[key]) && value != null) {
        cursor[key] = [];
        this.map.set( mapKey, cursor[key] );
      }
      // If the next key is not a number and the cursor is not an object yet
      // we need to initialize it
      if (typeof nextKey !== 'number' && !isObject(cursor[key]) && value != null) {
        cursor[key] = {};
        this.map.set( mapKey, cursor[key] );
      }

      // Recur
      set(
        cursor[ key ],
        pathArray[i+1],
        pathArray[i+2],
        i+1,
        typeof nextKey === 'number' ? `${mapKey}[${nextKey}]` : `${mapKey}.${nextKey}`);
    }

    set( this.object, pathArray[0], pathArray[1], 0, pathArray[0] )
  }

}

export default ObjectMap;
