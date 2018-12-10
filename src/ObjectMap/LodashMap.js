import ldset from 'lodash/setWith';
import ldunset from 'lodash/unset';
import ldtoPath from 'lodash/toPath';
import ldget from 'lodash/get';
import ldvalues from 'lodash/values';

class ObjectMap {
  constructor(object = {}, opts ={}) {
    this.name = opts.name;
    this.object = JSON.parse(JSON.stringify(object));
  }

  empty() {
    return ldvalues(this.object).length === 0;
  }

  rebuild(object = {}) {
    this.object = JSON.parse(JSON.stringify(object));
  }

  get(path) {
    return ldget(this.object, path);
  }

  set(path, value) {
    //console.log(`${this.name} obj: ${JSON.stringify(this.object)}`);
    //console.log(`${this.name} setting ${path} to ${value}`);
    if( value == null ){
      this.delete(path);
    } else {
      ldset(this.object, path, value);
    }
    //console.log(`${this.name} obj: ${JSON.stringify(this.object)}`);
  }

  delete(path) {
    ldunset(this.object, path);
    let pathArray = ldtoPath(path);
    pathArray = pathArray.slice(0, pathArray.length - 1);
    cleanup(this.object, pathArray);
  }
}

function cleanup( obj, path ) {
  // Base case no path left
  if( path.length === 0 ){
    return;
  }
  // Delete object if its empty 
  const object = ldget(obj, path);
  if(  Array.isArray(object) ? object.every(e=> e == null) : JSON.stringify( object ) === '{}' ){
    ldunset(obj, path);
  }
  // Recur
  cleanup( obj, path.slice(0, path.length - 1) );
}

export default ObjectMap;
