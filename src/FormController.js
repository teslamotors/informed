import ObjectMap from './ObjectMap';
import { EventEmitter } from 'events';
import Debug from './debug';
const debug = Debug('informed:Controller' + '\t');

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

    // Map to store if the field was once registered
    this.registered = {};

    // Map to store fields being removed
    this.expectedRemovals = {};

    // Map of saved values 
    this.savedValues = {};

    // Initialize the controller state
    this.state = {
      pristine: true,
      dirty: false,
      invalid: false,
      submits: 0
    };

    // Bind functions that will be called externally
    this.deregister = this.deregister.bind(this);
    this.register = this.register.bind(this);
    this.getValue = this.getValue.bind(this);
    this.getTouched = this.getTouched.bind(this);
    this.getError = this.getError.bind(this);
    this.getErrors = this.getErrors.bind(this);
    this.setValue = this.setValue.bind(this);
    this.getValues = this.getValues.bind(this);
    this.setTouched = this.setTouched.bind(this);
    this.setError = this.setError.bind(this);
    this.setFormError = this.setFormError.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.reset = this.reset.bind(this);
    this.update = this.update.bind(this);
    this.validate = this.validate.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.getField = this.getField.bind(this);
    this.getInitialValue = this.getInitialValue.bind(this);
    this.setInitialValue = this.setInitialValue.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.getFormState = this.getFormState.bind(this);
    this.expectRemoval = this.expectRemoval.bind(this);
    this.getSavedValue = this.getSavedValue.bind(this);
    this.getDerrivedValue = this.getDerrivedValue.bind(this);
    this.setValues = this.setValues.bind(this);
    this.resetField = this.resetField.bind(this);
    this.fieldExists = this.fieldExists.bind(this);
    this.validateField = this.validateField.bind(this);
    this.notify = this.notify.bind(this);

    // Updater will be used by fields to update and register
    this.updater = {
      register: this.register,
      deregister: this.deregister,
      getField: this.getField,
      update: this.update,
      setValue: (field, value) => {
        this.emit('change');
        this.emit('value', field, value);
      },
      setTouched: () => this.emit('change'),
      setError: () => this.emit('change'),
      expectRemoval: this.expectRemoval
    };

    // Define the formApi
    this.formApi = {
      setValue: this.setValue,
      setTouched: this.setTouched,
      setError: this.setError,
      setFormError: this.setFormError,
      setValues: this.setValues,
      setInitialValue: this.setInitialValue,
      getValue: this.getValue,
      getTouched: this.getTouched,
      getError: this.getError,
      reset: this.reset,
      submitForm: this.submitForm,
      getState: this.getFormState,
      getValues: this.getValues,
      getFullField: this.getFullField,
      fieldExists: this.fieldExists,
      getInitialValue: this.getInitialValue,
      validate: this.validate,
      validateField: this.validateField,
      resetField: this.resetField,
      getOptions: this.getOptions,
      emitter: this,
      getSavedValue: this.getSavedValue,
      getDerrivedValue: this.getDerrivedValue
    };

    this.on('value', (field) => {
      // The forms values have changed so we want to clear form level error
      delete this.state.error;
      this.notify(field);
    });
  }

  // Sets the form options
  setOptions(options) {
    this.options = options;
  }

  // Generate the external form state that will be exposed to the users
  getFormState() {
    return {
      ...this.state,
      values: this.getValues(),
      errors: this.getErrors(),
      touched: this.getAllTouched(),
      pristine: this.pristine(),
      dirty: this.dirty(),
      invalid: this.invalid()
    };
  }

  getFormApi() {
    return this.formApi;
  }

  getDerrivedValue(name) {
    const values = this.getValues();
    return ObjectMap.get(values, name);
  }

  /* ------------------- Internal Methods ------------------- */

  setValue(name, value, options) {
    this.fields.get(name).fieldApi.setValue(value, null, {
      allowEmptyString: this.options.allowEmptyStrings,
      ...options
    });
  }

  setTouched(name, value) {
    this.fields.get(name).fieldApi.setTouched(value);
  }

  setError(name, value) {
    this.fields.get(name).fieldApi.setError(value);
  }

  setFormError(value) {
    this.state.error = value;
    this.emit('change');
  }

  setInitialValue(field, value) {
    ObjectMap.set(this.options.initialValues, field, value);
  }

  // Notify other fields 
  notify(field) {
    // Get the notifier
    const notifier = this.fields.get(field);
    // If we have a list we must notify each one
    if (notifier && notifier.notify) {
      notifier.notify.forEach(fieldName => {
        // Get the field toNotify
        const toNotify = this.fields.get(fieldName);
        if (toNotify) {
          debug('Notifying', toNotify.field);
          const value = this.getValue(toNotify.field);
          toNotify.fieldApi.validate(value);
        }
      });
    }
  }

  getValue(name) {
    const value = this.getField(name).fieldApi.getValue();
    debug('Getting value for', name, value);
    return value;
  }

  getTouched(field) {
    const touched = this.getField(field).fieldApi.getTouched();
    debug('Getting touched for', field, touched);
    return touched;
  }

  getError(field) {
    const error = this.getField(field).fieldApi.getError();
    debug('Getting error for', field, error);
    return error;
  }

  getValues() {
    debug('Gettings values');
    // So we because all fields controll themselves and, "inform", this controller
    // of their changes, we need to literally itterate through all registered fields
    // and build the values object.
    const values = {};
    this.fields.forEach((field) => {
      if (!field.shadow) {
        ObjectMap.set(values, field.field, field.fieldApi.getValue());
      }
    });
    return values;
  }

  getAllTouched() {
    debug('Gettings touched');
    // So we because all fields controll themselves and, "inform", this controller
    // of their changes, we need to literally itterate through all registered fields
    // and build the touched object.
    const touched = {};
    this.fields.forEach((field) => {
      ObjectMap.set(touched, field.field, field.fieldApi.getTouched());
    });
    return touched;
  }

  getErrors() {
    debug('Gettings errors');
    // So we because all fields controll themselves and, "inform", this controller
    // of their changes, we need to literally itterate through all registered fields
    // and build the errors object.
    const errors = {};
    this.fields.forEach((field) => {
      ObjectMap.set(errors, field.field, field.fieldApi.getError());

    });
    return errors;
  }

  getOptions() {
    return this.options;
  }

  getSavedValue(name) {
    return ObjectMap.get(this.savedValues, name);
  }

  validateField(field) {
    this.fields.get(field).fieldApi.validate();
  }

  resetField(field) {
    this.fields.get(field).fieldApi.reset();
  }

  getFullField(field) {
    return field;
  }

  fieldExists(field) {
    return this.fields.get(field) != null;
  }

  valid() {
    const errors = this.getErrors();
    return !!(ObjectMap.empty(errors) && !this.state.error);
  }

  invalid() {
    const errors = this.getErrors();
    return !!(!ObjectMap.empty(errors) || this.state.error);
  }

  pristine() {
    const touched = this.getAllTouched();
    const values = this.getValues();
    return ObjectMap.empty(touched) && ObjectMap.empty(values);
  }

  dirty() {
    return !this.pristine();
  }

  getInitialValue(field) {
    return ObjectMap.get(this.options.initialValues, field);
  }

  reset() {
    debug('Resetting');
    // So because all fields controll themselves and, "inform", this controller
    // of their changes, we need to literally itterate through all registered fields
    // and reset them. Not a big deal but very important to remember that you cant simply
    // reset this controllers state!
    this.fields.forEach((field) => {
      field.fieldApi.reset();
      // Initialize the values if it needs to be
      const initialValue = ObjectMap.get(this.options.initialValues, field.field);
      if (initialValue !== undefined) {
        this.setValue(field.field, initialValue, { initial: true });
      }
    });

    this.emit('change');
  }

  setValues(values) {
    debug('Setting values');
    // So we because all fields controll themselves and, "inform", this controller
    // of their changes, we need to literally itterate through all registered fields
    // and set them. Not a big deal but very important to remember that you cant simply
    // set this controllers state!
    this.fields.forEach((field) => {
      // Initialize the values if it needs to be
      const value = ObjectMap.get(values, field.field);
      if (value !== undefined) {
        field.fieldApi.setValue(value);
      }
    });

    this.emit('change');
  }

  validate() {
    debug('Validating all fields');

    const values = this.getValues();

    // Itterate through and call validate on every field
    this.fields.forEach((field) => {
      field.fieldApi.validate(values);
      field.fieldApi.setTouched(true);
    });

    // Call the form level validation if its present
    if (this.options.validate) {
      const res = this.options.validate(values);
      this.setFormError(res);
    }

    // Call the forms field level validation
    if (this.options.validateFields) {
      const errors = this.options.validateFields(values);
      // So we because all fields controll themselves and, "inform", this controller
      // of their changes, we need to literally itterate through all registered fields
      // and set them. Not a big deal but very important to remember that you cant simply
      // set this controllers state!
      this.fields.forEach((field) => {
        // Check to see if there is an error to set 
        // Note: we use has becuause value may be there but undefined
        if (ObjectMap.has(errors, field.field)) {
          const error = ObjectMap.get(errors, field.field);
          // If there is an error then set it
          this.setError(field.field, error);
        }
      });

    }
  }

  keyDown(e) {
    // If preventEnter then return
    if (e.keyCode == 13 && this.options.preventEnter) {
      e.preventDefault(e);
      return false;
    }
  }

  submitForm(e) {

    // Incriment number of submit attempts
    this.state.submits = this.state.submits + 1;

    if (!this.options.dontPreventDefault && e) {
      // Prevent default browser form submission
      e.preventDefault(e);
    }

    // Validate the form
    this.validate();

    // Emit a change 
    this.emit('change');

    // Check validity and perform submission if valid
    if (this.valid()) {
      debug('Submit', this.state);
      this.emit('submit');
    } else {
      debug('Submit', this.state);
      this.emit('failure');
    }
  }

  /* ---------------- Updater Functions (used by fields) ---------------- */

  register(name, field) {
    debug('Register', name, field.state);

    // Determine if the field has been registered before
    const registered = this.registered[name];
    // Set registered flag
    this.registered[name] = true;
    // Always register the field
    this.fields.set(name, field);

    // Example foo.bar.baz[3].baz >>>> foo.bar.baz
    const magicValue = name.slice(0, name.lastIndexOf('[') != -1 ? name.lastIndexOf('[') : name.length);

    // Always clear out expected removals when a reregistering array field comes in
    delete this.expectedRemovals[magicValue];

    // The field is a shadow field ooo spooky so dont set anything
    if (field.shadow) {
      return;
    }

    //Initialize the values if it needs to be
    const initialValue = ObjectMap.get(this.options.initialValues, name);
    if (initialValue !== undefined && !registered) {
      field.fieldApi.setValue(initialValue);
    }

    // Check to see if we need to load in saved state
    const savedState = ObjectMap.get(this.savedValues, name);
    if (field.keepState && savedState) {
      console.log(`Setting field ${name}'s kept state`, savedState);
      field.fieldApi.setValue(savedState.value);
      field.fieldApi.setTouched(savedState.touched);
      // Remove the saved state
      ObjectMap.delete(this.savedValues, name);
    }

    this.emit('change');
  }

  deregister(name) {
    debug('Deregister', name);

    const field = this.fields.get(name);

    // Example foo.bar.baz[3].baz >>>> foo.bar.baz
    const magicValue = name.slice(0, name.lastIndexOf('[') != -1 ? name.lastIndexOf('[') : name.length);

    // If the fields state is to be kept then save the value
    // Exception where its expected to be removed! 
    if (field.keepState && !this.expectedRemovals[magicValue]) {
      console.log(`Saving field ${name}'s value`, field.fieldApi.getFieldState());
      ObjectMap.set(this.savedValues, name, field.fieldApi.getFieldState());
    }

    // Remove if its an expected removal OR we dont have keep state 
    if (this.expectedRemovals[magicValue] || !field.keepState) {
      // Remove the field completley
      debug('Removing field', name);
      this.fields.delete(name);
    }

    this.emit('change');
    this.emit('value', name);
  }

  expectRemoval(field) {
    debug('Expecting removal of', field);
    this.expectedRemovals[field] = true;
  }

  update(name, field) {
    debug('Update', name);
    this.fields.set(name, field);
  }

  getField(field) {
    debug('Getting Field', field);
    return this.fields.get(field);
  }
}

export default FormController;
