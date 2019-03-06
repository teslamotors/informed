import ObjectMap from './ObjectMap';
import { EventEmitter } from 'events';
import Debug from 'debug';
const debug = Debug('informed:Controller'+'\t');

class FormController extends EventEmitter {


  constructor(options = {}) {

    // Dont forget to call super! :)
    super();

    this.options = options;

    // Map will store all fields
    // Key => fieldName - example: "foo.bar[3].baz"
    // Val => { field, fieldApi }
    // Why? so the form can control the fields!
    this.fields = new Map();

    // Initialize the controller state
    this.state = {
      values: {},
      touched: {},
      errors: {},
      pristine: true,
      dirty: false,
      initial: false,
      invalid: false,
      submits: 0
    };

    // Bind functions that will be called externally
    //this.update = this.update.bind(this);
    this.deregister = this.deregister.bind(this);
    this.register = this.register.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setTouched = this.setTouched.bind(this);
    this.setError = this.setError.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.reset = this.reset.bind(this);
    this.update = this.update.bind(this);

    // Updater will be used by fields to update and register
    this.updater = {
      register: this.register,
      deregister: this.deregister,
      setValue: this.setValue, 
      setTouched: this.setTouched, 
      setError: this.setError,
      update: this.update
    };
  }

  // Generate the external form state that will be exposed to the users
  getFormState() {
    return {
      ...this.state, 
      pristine: this.pristine(),
      dirty: this.dirty(),
      initial: this.initial(),
      invalid: this.invalid()
    };
  }

  // Generate the external form api that will be exposed to the users
  getFormApi() {
    const setValue = (field, value) =>
      this.fields.get(field).fieldApi.setValue(value);

    const setTouched = (field, value) =>
      this.fields.get(field).fieldApi.setTouched(value);

    const setError = (field, value) =>
      this.fields.get(field).fieldApi.setError(value);

    const setValues = values => this.setValues(values);

    const getValue = (field) => this.getValue(field);

    const getTouched = (field) => this.getTouched(field);
    
    const getError = (field) => this.getError(field);

    const reset = () => this.reset();

    const submitForm = e => this.submitForm(e);

    const getState = () => this.getFormState();

    const getValues = () => this.getFormState().values;

    const getFullField = field => this.getFullField(field);

    const fieldExists = field => this.fields.get(field) != null;

    const getInitialValue = field => this.getInitialValue(field);

    return {
      setValue,
      setTouched,
      setError,
      setValues,
      getValue,
      getTouched,
      getError,
      reset,
      submitForm,
      getState,
      getValues,
      getFullField,
      fieldExists,
      getInitialValue
    };
  }

  /* ------------------- Internal Methods ------------------- */

  setValue(field, value, notify = true) {
    debug(`Setting ${field} to ${value}`);
    // Set the new value
    ObjectMap.set(this.state.values, field, value);
    // The forms values have changed so we want to clear form level error
    delete this.state.error;
    // Emit change events
    this.emit('change');
    this.emit('value');
    // Notify other fields 
    if( notify ) this.notify(field);
  }

  setTouched(field, value) {
    ObjectMap.set(this.state.touched, field, value);
    this.emit('change');
  }

  setError(field, value) {
    ObjectMap.set(this.state.errors, field, value);
    this.emit('change');
  }

  setFormError(value){
    this.state.error = value;
    this.emit('change');
  }

  // Notify other fields 
  notify( field ) {
    // Get the notifier
    const notifier =  this.fields.get(field);
    // If we have a list we must notify each one
    if( notifier.notify ){
      notifier.notify.forEach( fieldName =>{
        // Get the field toNotify
        const toNotify =  this.fields.get(fieldName);
        if( toNotify ){
          debug('Notifying', toNotify.field);
          const value = this.getValue(toNotify.field);
          toNotify.fieldApi.validate(value);
        }
      });
    }
  }

  getValue(field) {
    return ObjectMap.get(this.state.values, field);
  }

  getTouched(field) {
    return ObjectMap.get(this.state.touched, field);
  }

  getError(field) {
    return ObjectMap.get(this.state.errors, field);
  }

  getFullField(field) { 
    return field;
  }

  valid(){
    return !!(ObjectMap.empty(this.state.errors) && !this.state.error);
  }

  invalid() {
    return !!(!ObjectMap.empty(this.state.errors) || this.state.error);
  }

  pristine() {
    return ObjectMap.empty(this.state.touched) && ObjectMap.empty(this.state.values);
  }

  dirty() {
    return !this.pristine();
  }

  getInitialValue( field ){
    return ObjectMap.get(this.options.initialValues, field);
  }
  
  initial() {
    return ObjectMap.equal(this.options.initialValues || {}, this.state.values);
  }

  reset() {
    debug('Resetting');
    // So we because all fields controll themselves and, "inform", this controller
    // of their changes, we need to literally itterate through all registered fields
    // and reset them. Not a big deal but very important to remember that you cant simply
    // reset this controllers state!
    this.fields.forEach(( field )=>{
      field.fieldApi.reset();
      // Initialize the values if it needs to be
      const initialValue = ObjectMap.get(this.options.initialValues, field.field);
      if( initialValue !== undefined ){
        this.getFormApi().setValue( field.field, initialValue );
      } 
    });

    this.emit('change');
  }

  setValues(values){
    debug('Setting values');
    // So we because all fields controll themselves and, "inform", this controller
    // of their changes, we need to literally itterate through all registered fields
    // and set them. Not a big deal but very important to remember that you cant simply
    // set this controllers state!
    this.fields.forEach(( field )=>{
      // Initialize the values if it needs to be
      const value = ObjectMap.get(values, field.field);
      if( value ){
        this.getFormApi().setValue( field.field, value );
      } 
    });

    this.emit('change');
  }

  submitForm(e) {

    // Incriment number of submit attempts
    this.state.submits = this.state.submits + 1;

    if( !this.options.dontPreventDefault && e ){
      // Prevent default browser form submission
      e.preventDefault(e);
    }

    // Itterate through and call validate on every field
    this.fields.forEach(( field, key )=>{
      const value = this.getValue(key);
      field.fieldApi.validate(value);
      field.fieldApi.setTouched(true);
    });

    // Call the form level validation if its present
    if( this.options.validate ){
      const res = this.options.validate( this.state.values );
      this.setFormError(res);
    }

    // Call the forms field level validation
    if( this.options.validateFields ){
      const errors = this.options.validateFields( this.state.values );
      // So we because all fields controll themselves and, "inform", this controller
      // of their changes, we need to literally itterate through all registered fields
      // and set them. Not a big deal but very important to remember that you cant simply
      // set this controllers state!
      this.fields.forEach(( field )=>{
        // Check to see if there is an error to set 
        // Note: we use has becuause value may be there but undefined
        if( ObjectMap.has(errors, field.field ) ){
          const error = ObjectMap.get(errors, field.field);
          // If there is an error then set it
          this.getFormApi().setError( field.field, error );
        } 
      });

    }

    // Emit a change 
    this.emit('change');

    // Check validity and perform submission if valid
    if( this.valid() ){
      debug('Submit', this.state);
      this.emit('submit');
    } else {
      debug('Submit', this.state);
      this.emit('failure');
    }
  }

  /* ---------------- Updater Functions (used by fields) ---------------- */

  register(field, fieldState, fieldStuff) {
    debug('Register', field, fieldState);
    // Always register the field
    this.fields.set(field, fieldStuff);
    // Initialize state
    // When a user had keep state load existing values
    if( fieldStuff.keepState ){
      const value = ObjectMap.get(this.state.values, field);
      this.getFormApi().setValue( field, value || fieldState.value );
      const touched = ObjectMap.get(this.state.touched, field);
      this.getFormApi().setTouched( field, touched );
      // Error will get set by validator implicitly so we dont need to remember that
    } else {
      // Initialize the values if it needs to be
      const initialValue = ObjectMap.get(this.options.initialValues, field);
      if( initialValue !== undefined ){
        this.getFormApi().setValue( field, initialValue );
      } else { 
        // Otherwise set the value to whatever the field is set to
        this.setValue(field, fieldState.value, false);
      }
      this.setTouched(field, fieldState.touched);
    }
    this.setError(field, fieldState.error);

  }

  deregister(field) {
    debug('Deregister', field);
    const field2remove = this.fields.get(field);
    if(!field2remove.keepState){
      // Remove the data!
      ObjectMap.delete(this.state.values, field);
      ObjectMap.delete(this.state.touched, field);
      ObjectMap.delete(this.state.errors, field);
    }
    // Always need to delete the field
    this.fields.delete(field);
    this.emit('change');
  }

  update(field, fieldStuff) {
    debug('Update', field);
    this.fields.set(field, fieldStuff);
  }
}

export default FormController;
