import ObjectMap from './ObjectMap';
import { EventEmitter } from 'events';

class FormController extends EventEmitter {
  constructor() {
    super();

    this.fields = new Map();

    this.state = {
      values: {},
      touched: {},
      errors: {},
      pristine: true,
      dirty: false,
      invalid: false,
    };

    this.update = this.update.bind(this);
    this.deregister = this.deregister.bind(this);
    this.register = this.register.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.reset = this.reset.bind(this);

    this.updater = {
      register: this.register,
      deregister: this.deregister,
      update: this.update
    };
  }

  get api() {
    const setValue = (field, value) =>
      this.fields.get(field).fieldApi.setValue(value);

    const setTouched = (field, value) =>
      this.fields.get(field).fieldApi.setTouched(value);

    const setError = (field, value) =>
      this.fields.get(field).fieldApi.setError(value);

    const reset = () => this.reset();

    const submitForm = e => this.submitForm(e);

    const getState = () => this.getState();
    const getValue = (field) => this.getValue(field);
    const getTouched = (field) => this.getTouched(field);
    const getError = (field) => this.getError(field);

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

  setValue(field, value) {
    ObjectMap.set(this.state.values, field, value);
    this.emit('change');
  }

  getValue(field) {
    return ObjectMap.get(this.state.values, field);
  }

  setTouched(field, value) {
    ObjectMap.set(this.state.touched, field, value);
    this.emit('change');
  }

  getTouched(field) {
    return ObjectMap.get(this.state.touched, field);
  }

  setError(field, value) {
    ObjectMap.set(this.state.errors, field, value);
    this.emit('change');
  }

  getError(field) {
    return ObjectMap.get(this.state.errors, field);
  }

  getState() {
    return {
      ...this.state, 
      pristine: this.pristine(),
      dirty: this.dirty(),
      invalid: this.invalid()
    };
  }

  valid(){
    console.log('ERRORS', this.state.errors);
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
    //TODO figure out what to do with all fields
    console.log('Resetting');
    this.state = {
      values: {},
      touched: {},
      errors: {},
      invalid: false
    };
    this.emit('change');
  }

  submitForm(e) {
    e.preventDefault(e);
    if( this.valid() ){
      console.log('Submit', this.state);
      this.emit('submit');
    }
  }

  update(field, fieldState) {
    console.log('UPDATING', field, fieldState);
    this.setValue(field, fieldState.value);
    this.setTouched(field, fieldState.touched);
    this.setError(field, fieldState.error);
  }

  register(field, fieldState, fieldProps) {
    // Register the field
    this.fields.set(field, { field, ...fieldProps });
    // Initialize state
    this.setValue(field, fieldState.value);
    this.setTouched(field, fieldState.touched);
    this.setError(field, fieldState.error);
  }

  deregister(field) {
    console.log('Deregister', field);
    this.fields.delete(field);
    ObjectMap.delete(this.state.values, field);
    ObjectMap.delete(this.state.errors, field);
    ObjectMap.delete(this.state.touched, field);
    this.emit('change');
  }
}

export default FormController;
