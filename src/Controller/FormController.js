import ObjectMap from '../ObjectMap';
const EventEmitter = require("events").EventEmitter;

class FormController extends EventEmitter {

  constructor({ hooks } = { hooks: {} }){
    super();
    this.hooks = hooks;
    this.values = new ObjectMap();
    this.touched = new ObjectMap();
    this.errors = new ObjectMap();
    this.state = {
      values: this.values.object,
      touched: this.touched.object,
      errors: this.errors.object
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
    this.values.set(field, value)
    // Get the field controller to trigger any lifecycle methods
    const fieldController = this.fields.get( field );
    // Validate if on change validation prop was set
    if( fieldController.config.validateOnChange ){
      this.errors.set( field, fieldController.validate());
    }
    // Emit changes
    this.emit('change', this.state);
    this.emit('field', field);
  }

  setTouched = ( field, value = true ) => {
    // Set touched
    this.touched.set( field, value );
    // Get the field controller to trigger any lifecycle methods
    const fieldController = this.fields.get( field );
    // Validate if on blur validation prop was set
    if( fieldController.config.validateOnBlur ){
      this.errors.set( field, fieldController.validate() );
    }
    // Emit changes
    this.emit('change', this.state);
    this.emit('field', field);
  }

  setError = ( field, error ) => {
    this.errors.set( field, error );
    this.emit('change', this.state);
    this.emit('field', field);
  }

  getValue = ( field ) => {
    return this.values.get( field );
  }

  getTouched = ( field ) => {
    return this.touched.get( field );
  }

  getError = ( field ) => {
    return this.errors.get( field );
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
      this.touched.set( field, true );
      // Validate
      this.errors.set( field, fieldController.validate() );
    });
    this.emit('change', this.state);
    this.emit('update', this.state);
    if( this.hooks.onSubmit ){
      this.hooks.onSubmit( this.state.values );
    }
  }

}

export default FormController;
