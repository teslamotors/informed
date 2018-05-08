import ObjectMap from '../ObjectMap';
const EventEmitter = require("events").EventEmitter;

class Controller extends EventEmitter {

  constructor(){
    super();
    this.state = {
      values: {}
    };

    this.api = {
      setValue: this.setValue,
      getValue: this.getValue
    }
  }

  setValue = ( field, value ) => {
    ObjectMap.set( this.state.values, field, value );
    this.emit('change');
  }

  getValue = ( field, value ) => {
    return ObjectMap.get( this.state.values, field );
  }

}

export default Controller;
