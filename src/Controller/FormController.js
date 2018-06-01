import ObjectMap from '../ObjectMap';
const EventEmitter = require("events").EventEmitter;

class FormController extends EventEmitter {

  constructor(hooks = {}, config= {}){
    super();
    this.hooks = hooks;
    this.config = config;
    this.values = new ObjectMap(config.initialValues);
    this.touched = new ObjectMap();
    this.errors = new ObjectMap();
    this.api = {
      setValue: this.setValue,
      getValue: this.getValue,
      setTouched: this.setTouched,
      getTouched: this.getTouched,
      setError: this.setError,
      getError: this.getError,
      getFullField: this.getFullField,
      submitForm: this.submitForm,
      getState: this.getFormState,
      setState: this.setFormState,
      setValues: this.setValues,
      reset: this.reset
    }
    this.fields = new Map();
    // Call initial hooks
    if( hooks.getApi ){
      hooks.getApi(this.api);
    }
  }

  get state(){
    return {
      values: this.values.object,
      touched: this.touched.object,
      errors: this.errors.object,
      pristine: this.pristine,
      dirty: this.dirty,
    }
  }

  get pristine(){
    return this.touched.empty() && this.values.empty()
  }

  get dirty(){
    return !this.pristine;
  }

  getFormState = () => {
    return this.state;
  }

  setFormState = (state) => {
    this.values.rebuild(state.values);
    this.touched.rebuild(state.touched);
    this.errors.rebuild(state.errors);
    this.emit('change', this.state);
    this.emit('values', this.state.values);
    this.emit('update', this.state);
  }

  setValues = (values) => {
    this.values.rebuild(values);
    this.emit('change', this.state);
    this.emit('values', this.state.values);
    this.emit('update', this.state);
  }

  setValue = ( field, value ) => {
    // Set value
    this.values.set(field, value)
    // Get the field controller to trigger any lifecycle methods
    const fieldController = this.fields.get( field );
    // Validate if on change validation prop was set
    if( fieldController.config.validateOnChange ){
      this.errors.set( field, fieldController.validate( this.state.values ));
    }
    // Emit changes
    this.emit('change', this.state);
    this.emit('values', this.state.values);
    this.emit('field', field);
  }

  setTouched = ( field, value = true ) => {
    // Set touched
    this.touched.set( field, value );
    // Get the field controller to trigger any lifecycle methods
    const fieldController = this.fields.get( field );
    // Validate if on blur validation prop was set
    if( fieldController.config.validateOnBlur ){
      this.errors.set( field, fieldController.validate( this.state.values ) );
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
    if( fieldController.config.initialValue ){
      this.values.set(field, fieldController.config.initialValue)
    }
  }

  remove = ( field ) => {
    this.fields.delete( field );
    this.values.delete( field );
    this.touched.delete( field );
    this.errors.delete( field );
    this.emit('change', this.state);
  }

  deregister = ( field ) => {
    this.remove(field);
  }

  valid = () => {
    return this.errors.empty();
  }

  reset = () => {
    this.values.rebuild(this.config.initialValues);
    this.touched.rebuild();
    this.errors.rebuild();
    // We need to iterate over all the fields and
    // reset them
    this.fields.forEach(( fieldController ) => {
      if( fieldController.config.initialValue ){
        this.values.set(fieldController.field, fieldController.config.initialValue);
      }
    });
    this.emit('change', this.state);
    this.emit('update', this.state);
  }

  submitForm = (e) => {
    if( !this.config.dontPreventDefault ){
      e.preventDefault(e);
    }
    this.fields.forEach(( fieldController ) => {
      // Get the fields name
      const field = fieldController.field;
      // Set touched
      this.touched.set( field, true );
      // Validate
      this.errors.set( field, fieldController.validate( this.state.values ) );
    });


    // // Only call form level validation if field level validations are valid
    // // and the user gave us a validate function
    // if( this.valid() && this.hooks.validate ){
    //   this.errors.rebuild(this.hooks.validate( this.state.values ));
    // }


    this.emit('change', this.state);
    this.emit('update', this.state);
    // Make sure we are valid
    if( this.valid() ){
      if( this.hooks.preSubmit ){
        this.values.rebuild(this.hooks.preSubmit(this.state.values));
        this.emit('change', this.state);
        this.emit('update', this.state);
      }
      if( this.hooks.onSubmit ){
        this.hooks.onSubmit( this.state.values );
      }
    } else {
      if( this.hooks.onSubmitFailure ){
        this.hooks.onSubmitFailure( this.state.errors );
      }
    }
  }

}

export default FormController;
