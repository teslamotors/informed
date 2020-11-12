import ObjectMap from './ObjectMap';
import { EventEmitter } from 'events';
import Debug from './debug';
import defaultFieldMap from './fieldMap';
import { validateYupSchema, validateAjvSchema } from './utils';
const debug = Debug('informed:Controller' + '\t');

const noop = () => {};
class FormController extends EventEmitter {
  constructor(options = {}) {
    // Dont forget to call super! :)
    super();

    this.options = options;

    const { ajv, schema, fieldMap } = options;

    // Create new ajv instance if passed
    this.ajv = ajv ? new ajv({ allErrors: true }) : null;
    this.ajvValidate = ajv ? this.ajv.compile(schema) : null;

    // Add field map ( defaults to our field map )
    this.fieldMap = fieldMap || defaultFieldMap;

    // Map will store all fields by id
    // Key => uuid
    // Val => fieldObj
    // Why? so the form can control the fields!
    this.fieldsById = new Map();

    // Map will store all fields by name
    // Key => fieldName - example: "foo.bar[3].baz"
    // Val => fieldObj
    // Why? so the form can control the fields!
    this.fieldsByName = new Map();

    // Map to store whos on the screen
    this.onScreen = {};

    // Map to store fields being removed
    this.expectedRemovals = {};
    this.pulledOut = {};

    // Map of saved values
    this.savedValues = {};

    // Initialize the controller state
    this.state = {
      pristine: true,
      dirty: false,
      invalid: false,
      submits: 0,
      step: 0,
      validating: 0,
      submitting: false,
      values: {},
      errors: {},
      touched: {}
    };

    // Initialize a dummy field ( see getField for example use )
    this.dummyField = {
      fieldApi: {
        setValue: noop,
        setTouched: noop,
        setError: noop,
        reset: noop,
        validate: noop,
        getValue: noop,
        getTouched: noop,
        getError: noop,
        getFieldState: noop,
        checkRelevant: noop
      }
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
    this.getStep = this.getStep.bind(this);
    this.setStep = this.setStep.bind(this);
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.setCurrent = this.setCurrent.bind(this);
    this.setTouched = this.setTouched.bind(this);
    this.setError = this.setError.bind(this);
    this.setFormError = this.setFormError.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.reset = this.reset.bind(this);
    this.update = this.update.bind(this);
    this.validate = this.validate.bind(this);
    this.screenValid = this.screenValid.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.getField = this.getField.bind(this);
    this.getInitialValue = this.getInitialValue.bind(this);
    this.setInitialValue = this.setInitialValue.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.getFormState = this.getFormState.bind(this);
    this.expectRemoval = this.expectRemoval.bind(this);
    this.getSavedValue = this.getSavedValue.bind(this);
    this.removeSavedState = this.removeSavedState.bind(this);
    this.getDerrivedValue = this.getDerrivedValue.bind(this);
    this.setValues = this.setValues.bind(this);
    this.resetField = this.resetField.bind(this);
    this.fieldExists = this.fieldExists.bind(this);
    this.validateField = this.validateField.bind(this);
    this.notify = this.notify.bind(this);
    this.validating = this.validating.bind(this);
    this.validated = this.validated.bind(this);

    // Updater will be used by fields to update and register
    this.updater = {
      register: this.register,
      deregister: this.deregister,
      getField: this.getField,
      update: this.update,
      fieldMap: this.fieldMap,
      setValue: (fieldId, value, emit = true) => {
        const field = this.fieldsById.get(fieldId);

        if (!field.shadow) {
          ObjectMap.set(
            this.state.values,
            field.field,
            field.fieldApi.getValue()
          );
        }

        if (!field.fieldApi.relevant(this.state.values)) {
          ObjectMap.delete(this.state.values, field.field);
        }

        // Cleanup phase to get rid of irrelevant fields
        this.fieldsById.forEach(f => {
          // If a fields within an irrelivant step then remove it
          // Otherwise, check to see if its relevant and only remove if keep state is false
          if (
            !f.fieldApi.multistepRelevant(this.state.values) ||
            (!f.fieldApi.relevant(this.state.values) && !f.keepState)
          ) {
            ObjectMap.delete(this.state.values, f.field);
            ObjectMap.delete(this.state.touched, f.field);
            ObjectMap.delete(this.state.errors, f.field);
          }
        });

        if (emit) {
          this.emit('change');
          this.emit('value', field.field, value);
        }
      },
      setTouched: (fieldId, touch, emit = true) => {
        const field = this.fieldsById.get(fieldId);

        if (!field.shadow && field.fieldApi.relevant(this.state.values)) {
          ObjectMap.set(
            this.state.touched,
            field.field,
            field.fieldApi.getTouched()
          );
        }

        // Shadow values override unless undefined
        if (
          field.shadow &&
          field.fieldApi.getError() != undefined &&
          field.fieldApi.relevant(this.state.values)
        ) {
          ObjectMap.set(
            this.state.touched,
            field.field,
            field.fieldApi.getTouched()
          );
        }
        if (emit) {
          this.emit('change');
          //this.emit('touch', field.field, touch);
        }
      },
      setError: (fieldId, error, emit = true) => {
        const field = this.fieldsById.get(fieldId);

        if (!field.shadow && field.fieldApi.relevant(this.state.values)) {
          ObjectMap.set(
            this.state.errors,
            field.field,
            field.fieldApi.getError()
          );
        }

        // Shadow values override unless undefined
        const currentError = ObjectMap.get(this.state.errors, field.field);
        if (
          field.shadow &&
          field.fieldApi.getError() != undefined &&
          field.fieldApi.relevant(this.state.values)
        ) {
          ObjectMap.set(
            this.state.errors,
            field.field,
            field.fieldApi.getError()
          );
        }

        // Special case for attempting to set shadow to undefiend
        else if (
          field.shadow &&
          field.fieldApi.getError() === undefined &&
          field.fieldApi.relevant(this.state.values) &&
          // TODO maybe check if object or array
          typeof currentError === 'string'
        ) {
          ObjectMap.set(
            this.state.errors,
            field.field,
            field.fieldApi.getError()
          );
        }

        if (emit) {
          this.emit('change');
          //this.emit('error', field.field, error);
        }
      },
      expectRemoval: this.expectRemoval,
      getInitialValue: this.getInitialValue
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
      screenValid: this.screenValid,
      resetField: this.resetField,
      getOptions: this.getOptions,
      emitter: this,
      getSavedValue: this.getSavedValue,
      removeSavedState: this.removeSavedState,
      getDerrivedValue: this.getDerrivedValue,
      getStep: this.getStep,
      setStep: this.setStep,
      next: this.next,
      back: this.back,
      setCurrent: this.setCurrent,
      validated: this.validated,
      validating: this.validating
    };

    this.on('value', field => {
      // The forms values have changed so we want to clear form level error
      delete this.state.error;
      this.notify(field);
    });
  }

  /* ---------------------------------- Setters ---------------------------------- */

  setOptions(options) {
    this.options = options;
  }

  setValue(name, value, options) {
    this.getField(name).fieldApi.setValue(value, null, {
      allowEmptyString: this.options.allowEmptyStrings,
      ...options
    });
  }

  setTouched(name, value) {
    this.getField(name).fieldApi.setTouched(value);
  }

  setError(name, value) {
    this.getField(name).fieldApi.setError(value);
  }

  setFormError(value) {
    this.state.error = value;
    this.emit('change');
  }

  validating() {
    this.state.validating = this.state.validating + 1;
    this.emit('change');
  }

  validated(name, error) {
    // Decrement the validating
    this.state.validating = this.state.validating - 1;

    // Set the error if there is not already one ( sync error first )
    if (!this.getError(name)) {
      this.setError(name, error);
    }

    // If we are not still validating, and we were submitting, then submit form
    // If we are async validating then dont submit yet
    if (this.state.validating > 0) {
      this.emit('change');
      return;
    }

    // If we were submitting
    if (this.state.submitting) {
      // Check validity and perform submission if valid
      if (this.valid()) {
        debug('Submit', this.state);
        this.emit('submit');
      } else {
        debug('Submit', this.state);
        this.emit('failure');
      }
      this.state.submitting = false;
    }

    this.emit('change');
  }

  setStep(value) {
    this.state.step = value;
    this.emit('change');
  }

  setCurrent(component) {
    this.state.Current = component;
    this.emit('change');
  }

  back(prevComponent) {
    this.state.step = this.state.step - 1;

    this.state.Current = prevComponent;

    this.emit('change');
  }

  next(nextComponent) {
    // Validate the entire form
    this.validate();

    // If fields on the screen ( currently rendered ) are valid move on
    if (this.screenValid()) {
      this.state.step = this.state.step + 1;
      this.state.Current = nextComponent;
    }

    // State will have changed
    this.emit('change');
  }

  setInitialValue(field, value) {
    ObjectMap.set(this.options.initialValues, field, value);
  }

  /* ---------------------------------- Getters ---------------------------------- */

  /**
   * Generate the external form state that will be exposed to the users
   *
   * @returns Form State
   */
  getFormState() {
    debug('Generating form state');
    // console.log('GENERATING!!');
    return {
      ...this.state,
      // values: this.getValues(),
      // errors: this.getErrors(),
      // touched: this.getAllTouched(),
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
    return this.state.values;
  }

  getAllTouched() {
    debug('Gettings touched');
    return this.state.touched;
  }

  getErrors() {
    debug('Gettings errors');
    return this.state.errors;
  }

  getOptions() {
    return this.options;
  }

  getStep() {
    return this.state.step;
  }

  getSavedValue(name) {
    const field = this.fieldsByName.get(name);
    if (field && field.shadow) {
      return ObjectMap.get(this.savedValues, `shadow-${name}`);
    }
    return ObjectMap.get(this.savedValues, name);
  }

  removeSavedState(name) {
    const field = this.fieldsByName.get(name);
    if (field && field.shadow) {
      return ObjectMap.delete(this.savedValues, `shadow-${name}`);
    }
    return ObjectMap.delete(this.savedValues, name);
  }

  getFullField(field) {
    return field;
  }

  getInitialValue(field) {
    return ObjectMap.get(this.options.initialValues, field);
  }

  getField(name) {
    debug('Getting Field', name);
    const field = this.fieldsByName.get(name);
    if (!field) {
      console.warn(`Attempting to get field ${name} but it does not exist`);
      // Prevent app from crashing
      return this.dummyField;
    }
    return field;
  }

  // Notify other fields
  notify(field) {
    // Example field - siblings[0].married
    // Get the notifier
    const notifier = this.getField(field);
    // If we have a list we must notify each one
    if (notifier && notifier.notify) {
      // Example: ['spouse']
      notifier.notify.forEach(fieldName => {
        // Get the field toNotify
        const JSPAN = `.${field}`;
        const path = `${JSPAN.replace(/(.*)[.[].*/, '$1')}.${fieldName}`.slice(
          1
        );
        // console.log('PATH', path);
        // Example path - siblings[0].spouse
        const toNotify = this.getField(path);
        if (toNotify) {
          debug('Notifying', toNotify.field);
          toNotify.fieldApi.validate();
          toNotify.fieldApi.checkRelevant();
        }
      });
    }
  }

  validateField(field) {
    this.getField(field).fieldApi.validate();
  }

  resetField(field) {
    this.getField(field).fieldApi.reset();
  }

  fieldExists(field) {
    return this.fieldsByName.get(field) != null;
  }

  valid() {
    const errors = this.getErrors();
    return !!(ObjectMap.empty(errors) && !this.state.error);
  }

  screenValid() {
    // Return false if any of the fields on the screen are invalid
    const error = Object.entries(this.onScreen).some(([name, field]) =>
      field.fieldApi.getError()
    );
    return !error;
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

  reset() {
    debug('Resetting');
    // So because all fields controll themselves and, "inform", this controller
    // of their changes, we need to literally itterate through all registered fields
    // and reset them. Not a big deal but very important to remember that you cant simply
    // reset this controllers state!
    this.fieldsById.forEach(field => {
      field.fieldApi.reset({ preventUpdate: true });
    });

    this.emit('change');
  }

  setValues(values) {
    debug('Setting values');
    // So we because all fields controll themselves and, "inform", this controller
    // of their changes, we need to literally itterate through all registered fields
    // and set them. Not a big deal but very important to remember that you cant simply
    // set this controllers state!
    this.fieldsById.forEach(field => {
      // Initialize the values if it needs to be
      const value = ObjectMap.get(values, field.field);
      if (value !== undefined) {
        field.fieldApi.setValue(value, null, { preventUpdate: true });
      }
    });

    this.emit('change');
  }

  validate() {
    debug('Validating all fields');

    const values = this.getValues();

    // Validate schema if needed
    if (this.options.validationSchema) {
      const errors = validateYupSchema(this.options.validationSchema, values);
      // So we because all fields controll themselves and, "inform", this controller
      // of their changes, we need to literally itterate through all registered fields
      // and set them. Not a big deal but very important to remember that you cant simply
      // set this controllers state!
      this.fieldsById.forEach(field => {
        // Check to see if there is an error to set
        // Note: we use has becuause value may be there but undefined
        if (ObjectMap.has(errors, field.field)) {
          const error = ObjectMap.get(errors, field.field);
          // If there is an error then set it
          this.setError(field.field, error);
        } else {
          // If we are doing schema validation then we need to clear out any old errors
          this.setError(field.field, undefined);
        }
      });
    }

    // Validate AJV schema if needed
    if (this.options.schema && this.options.ajv) {
      const errors = validateAjvSchema(this.ajvValidate, values);
      // So we because all fields controll themselves and, "inform", this controller
      // of their changes, we need to literally itterate through all registered fields
      // and set them. Not a big deal but very important to remember that you cant simply
      // set this controllers state!
      this.fieldsById.forEach(field => {
        // Check to see if there is an error to set
        // Note: we use has becuause value may be there but undefined
        if (ObjectMap.has(errors, field.field)) {
          const error = ObjectMap.get(errors, field.field);
          // If there is an error then set it
          this.setError(field.field, error);
        } else {
          // If we are doing schema validation then we need to clear out any old errors
          this.setError(field.field, undefined);
        }
      });
    }

    // Itterate through and call validate on every field
    this.fieldsById.forEach(field => {
      field.fieldApi.validate(values);
      // Second param to prevent validation
      field.fieldApi.setTouched(true, true);
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
      this.fieldsById.forEach(field => {
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

  asyncValidate() {
    debug('Async Validating all fields');
    const values = this.getValues();

    // Itterate through and call validate on every field
    this.fieldsById.forEach(field => {
      field.fieldApi.asyncValidate(values);
    });
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
    this.state.submitting = true;

    if (!this.options.dontPreventDefault && e) {
      // Prevent default browser form submission
      e.preventDefault(e);
    }

    // Validate the form
    this.validate();

    // Emit a change
    this.emit('change');

    // Trigger all async validations
    this.asyncValidate();

    // If we are async validating then dont submit yet
    if (this.state.validating > 0) {
      return;
    }

    // Check validity and perform submission if valid
    if (this.valid()) {
      debug('Submit', this.state);
      this.emit('submit');
    } else {
      debug('Submit', this.state);
      this.emit('failure');
    }

    this.state.submitting = false;

    this.emit('change');
  }

  /* ---------------- Updater Functions (used by fields) ---------------- */

  // ADDED initialRender parameter because of react 16.13.0 warning that does not like
  // setting initial value during first render
  register(id, field, initialRender) {
    const { field: name, state } = field;
    debug('Register ID:', id, 'Name:', name, state, 'Initial', initialRender);

    // Example foo.bar.baz[3].baz >>>> foo.bar.baz[3]
    const magicValue = name.slice(
      0,
      name.lastIndexOf('[') != -1 ? name.lastIndexOf(']') + 1 : name.length
    );

    // Field might be coming back after render remove old field
    let alreadyRegistered;
    this.fieldsById.forEach((value, key) => {
      if (value && value.field === name) {
        alreadyRegistered = key;
      }
    });

    if (
      //!this.expectedRemovals[magicValue] &&
      alreadyRegistered &&
      (field.keepState || field.inMultistep)
    ) {
      debug('Already Registered', name);
      this.fieldsById.delete(alreadyRegistered);
      this.fieldsByName.delete(name);
    }

    if (
      //!this.expectedRemovals[magicValue] &&
      alreadyRegistered &&
      (!field.keepState || !field.inMultistep)
    ) {
      console.warn(
        'Check to make sure you have not registered two fields with the fieldName',
        name
      );
    }

    debug('Fields Registered', this.fieldsById.size);

    // The field is on the screen
    this.onScreen[id] = field;

    // Always register the field
    this.fieldsById.set(id, field);
    this.fieldsByName.set(name, field);

    // Always clear out expected removals when a reregistering array field comes in
    debug('clearing expected removal', magicValue);
    delete this.expectedRemovals[magicValue];
    delete this.pulledOut[magicValue];

    // The field is a shadow field ooo spooky so dont set anything
    if (field.shadow) {
      return;
    }

    // Update the forms state right away
    this.updater.setValue(id, field.fieldApi.getValue(), false);
    this.updater.setError(id, field.fieldApi.getError(), false);
    this.updater.setTouched(id, field.fieldApi.getTouched(), false);

    // We register field right away but dont want it to triger a rerender
    if (!initialRender) {
      this.emit('change');
    }
  }

  deregister(id) {
    const field = this.fieldsById.get(id);
    const { field: name } = field;
    debug('Deregister', id, name);

    // The field is off the screen
    delete this.onScreen[id];

    // Example foo.bar.baz[3].baz >>>> foo.bar.baz[3]
    const magicValue = name.slice(
      0,
      name.lastIndexOf('[') != -1 ? name.lastIndexOf(']') + 1 : name.length
    );

    // If the fields state is to be kept then save the value
    // Exception where its expected to be removed!
    if (
      (field.keepState || field.inMultistep) &&
      !this.expectedRemovals[magicValue]
    ) {
      debug(`Saving field ${name}'s value`, field.fieldApi.getFieldState());
      if (!field.shadow) {
        ObjectMap.set(this.savedValues, name, field.fieldApi.getFieldState());
      } else {
        // We are shadow field and will store this value in the shadows
        ObjectMap.set(
          this.savedValues,
          `shadow-${name}`,
          field.fieldApi.getFieldState()
        );
      }
    }

    // Remove if its an expected removal OR we dont have keep state
    if (
      this.expectedRemovals[magicValue] ||
      (!field.keepState && !field.inMultistep)
    ) {
      // Remove the field completley
      debug('Removing field', name);
      this.fieldsById.delete(id);
      this.fieldsByName.delete(name);
      // Clean up state only if its not expected removal, otherwise we will just pull it out
      if (!this.expectedRemovals[magicValue]) {
        ObjectMap.delete(this.state.values, name);
        ObjectMap.delete(this.state.touched, name);
        ObjectMap.delete(this.state.errors, name);

        if (!field.shadow) {
          ObjectMap.delete(this.savedValues, name);
        } else {
          ObjectMap.delete(this.savedValues, `shadow-${name}`);
        }
      }

      // If we expected this removal the pullOut
      if (this.expectedRemovals[magicValue] && this.pulledOut[magicValue]) {
        debug('Pulling out', name, 'with magic value', magicValue);
        ObjectMap.pullOut(this.state.values, magicValue);
        ObjectMap.pullOut(this.state.touched, magicValue);
        ObjectMap.pullOut(this.state.errors, magicValue);
        ObjectMap.pullOut(this.savedValues, magicValue);
        // console.log('Pull1', this.state.values);
        // console.log('Pull2', this.savedValues);
        delete this.pulledOut[magicValue];
      }
    }

    this.emit('change');
  }

  expectRemoval(name) {
    debug('Expecting removal of', name);
    this.expectedRemovals[name] = true;
    this.pulledOut[name] = true;
  }

  update(id, field) {
    const { field: name } = field;
    debug('Update', id, name, field.fieldState.value);
    const prevName = this.fieldsById.get(id).field;
    this.fieldsById.set(id, field);
    this.fieldsByName.set(name, field);
    // Only emit change if field name changed
    if (prevName !== name) {
      // Also remember to clear removals
      // Example foo.bar.baz[3].baz >>>> foo.bar.baz[3]
      const magicValue = name.slice(
        0,
        name.lastIndexOf('[') != -1 ? name.lastIndexOf(']') + 1 : name.length
      );
      debug('clearing expected removal', magicValue);
      delete this.expectedRemovals[magicValue];
      this.emit('change');
    }
  }
}

export default FormController;
