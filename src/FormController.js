import ObjectMap from './ObjectMap';
import { EventEmitter } from 'events';
import Debug from 'debug';
const debug = Debug('informed:Controller'+'\t');

class FormController extends EventEmitter {


  constructor() {

    // Dont forget to call super! :)
    super();

    // Map will store all fields
    // Key => fieldName - example: "foo.bar[3].baz"
    // Val => { field, fieldApi ...fieldProps }
    // Why? so the form can control the fields!
    this.fields = new Map();

    // Initialize the controller state
    this.state = {
      values: {},
      touched: {},
      errors: {},
      pristine: true,
      dirty: false,
      invalid: false,
    };

    // Bind functions that will be called externally
    this.update = this.update.bind(this);
    this.deregister = this.deregister.bind(this);
    this.register = this.register.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.reset = this.reset.bind(this);

    // Updater will be used by fields to update and register
    this.updater = {
      register: this.register,
      deregister: this.deregister,
      update: this.update
    };
  }

  // Generate the external form state that will be exposed to the users
  getFormState() {
    return {
      ...this.state, 
      pristine: this.pristine(),
      dirty: this.dirty(),
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

    const getValue = (field) => this.getValue(field);

    const getTouched = (field) => this.getTouched(field);
    
    const getError = (field) => this.getError(field);

    const reset = () => this.reset();

    const submitForm = e => this.submitForm(e);

    const getState = () => this.getFormState();

    return {
      setValue,
      setTouched,
      setError,
      getValue,
      getTouched,
      getError,
      reset,
      submitForm,
      getState
    };
  }

  /* ------------------- Internal Methods ------------------- */

  setValue(field, value) {
    ObjectMap.set(this.state.values, field, value);
    this.emit('change');
  }

  setTouched(field, value) {
    ObjectMap.set(this.state.touched, field, value);
    this.emit('change');
  }

  setError(field, value) {
    ObjectMap.set(this.state.errors, field, value);
    this.emit('change');
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

  valid(){
    return ObjectMap.empty(this.state.errors);
  }

  invalid() {
    return !ObjectMap.empty(this.state.errors);
  }

  pristine() {
    return ObjectMap.empty(this.state.touched) && ObjectMap.empty(this.state.values);
  }

  dirty() {
    return !this.pristine();
  }

  reset() {
    debug('Resetting');
    // So we because all fields controll themselves and, "inform", this controller
    // of their changes, we need to literally itterate through all registered fields
    // and reset them. Not a big deal but very important to remember that you cant simply
    // reset this controllers state!
    this.fields.forEach(( field )=>{
      field.fieldApi.reset();
    });
    this.emit('change');
  }

  submitForm(e) {

    // Prevent default browser form submission
    e.preventDefault(e);

    // Itterate through and call validate on every field
    

    // Check validity and perform submission if valid
    if( this.valid() ){
      debug('Submit', this.state);
      this.emit('submit');
    }
  }

  /* ---------------- Updater Functions (used by fields) ---------------- */

  update(field, fieldState) {
    debug('UPDATING', field, fieldState);
    this.setValue(field, fieldState.value);
    this.setTouched(field, fieldState.touched);
    this.setError(field, fieldState.error);
  }

  register(field, fieldState, fieldProps) {
    debug('Register', field);
    // Register the field
    this.fields.set(field, { field, ...fieldProps });
    // Initialize state
    this.setValue(field, fieldState.value);
    this.setTouched(field, fieldState.touched);
    this.setError(field, fieldState.error);
  }

  deregister(field) {
    debug('Deregister', field);
    this.fields.delete(field);
    ObjectMap.delete(this.state.values, field);
    ObjectMap.delete(this.state.errors, field);
    ObjectMap.delete(this.state.touched, field);
    this.emit('change');
  }
}

export default FormController;
