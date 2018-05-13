import ObjectMap from '../ObjectMap';
const EventEmitter = require("events").EventEmitter;

class FormController extends EventEmitter {

  constructor({ hooks } = { hooks: {} }){
    super();
    this.hooks = hooks;
    this.state = {
      values: {},
      touched: {},
      errors: {}
    };
    this.api = {
      setValue: this.setValue,
      getValue: this.getValue,
      setTouched: this.setTouched,
      getTouched: this.getTouched,
      setError: this.setError,
      getError: this.getError,
      getFullField: this.getFullField,
      submitForm: this.submitForm
    }
    this.fields = new Map();
  }

  setValue = ( field, value ) => {
    // Set value
    ObjectMap.set( this.state.values, field, value );
    // Get the field controller to trigger any lifecycle methods
    const fieldController = this.fields.get( field );
    // Validate if on change validation prop was set
    if( fieldController.config.validateOnChange ){
      ObjectMap.set( this.state.errors, field, fieldController.validate());
    }
    // Emit changes
    this.emit('change', this.state);
    this.emit('field', field);
  }

  setTouched = ( field, value = true ) => {
    // Set touched
    ObjectMap.set( this.state.touched, field, value );
    // Get the field controller to trigger any lifecycle methods
    const fieldController = this.fields.get( field );
    // Validate if on blur validation prop was set
    if( fieldController.config.validateOnBlur ){
      ObjectMap.set( this.state.errors, field, fieldController.validate() );
    }
    // Emit changes
    this.emit('change', this.state);
    this.emit('field', field);
  }

  setError = ( field, error ) => {
    ObjectMap.set( this.state.errors, field, error );
    this.emit('change', this.state);
    this.emit('field', field);
  }

  getValue = ( field ) => {
    return ObjectMap.get( this.state.values, field );
  }

  getTouched = ( field ) => {
    return ObjectMap.get( this.state.touched, field );
  }

  getError = ( field ) => {
    return ObjectMap.get( this.state.errors, field );
  }

  getFullField = ( field ) => field;

  register = ( field, fieldController ) => {
    this.fields.set( field, fieldController );
  }

  submitForm = (e) => {
    e.preventDefault(e);
    this.fields.forEach(( fieldController ) => {
      // Get the fields name
      const field = fieldController.field;
      // Set touched
      ObjectMap.set( this.state.touched, field, true );
      // Validate
      ObjectMap.set( this.state.errors, field, fieldController.validate() );
    });
    this.emit('change', this.state);
    this.emit('update', this.state);
    if( this.hooks.onSubmit ){
      this.hooks.onSubmit( this.state.values );
    }
  }

}

export default FormController;
