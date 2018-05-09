import ObjectMap from '../ObjectMap';
const EventEmitter = require("events").EventEmitter;

class Controller extends EventEmitter {

  constructor({ hooks } = { hooks: {} }){
    super();
    this.hooks = hooks;
    this.state = {
      values: {}
    };
    this.api = {
      setValue: this.setValue,
      getValue: this.getValue,
      submitForm: this.submitForm
    }
  }

  setValue = ( field, value ) => {
    ObjectMap.set( this.state.values, field, value );
    this.emit('change', this.state);
  }

  getValue = ( field, value ) => {
    return ObjectMap.get( this.state.values, field );
  }

  submitForm = (e) => {
    e.preventDefault(e);
    if( this.hooks.onSubmit ){
      this.hooks.onSubmit( this.state.values );
    }
  }

}

export default Controller;
