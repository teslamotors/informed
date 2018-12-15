import ObjectMap from '../ObjectMap';
const EventEmitter = require('events').EventEmitter;

class FormController extends EventEmitter {
  constructor(hooks = {}, config = {}) {
    super();
    this.setMaxListeners(0);
    this.hooks = hooks;
    this.config = config;
    this.values = new ObjectMap(config.initialValues);
    this.touched = new ObjectMap();
    this.errors = new ObjectMap();
    this.submits = 0;
    this.asyncErrors = new ObjectMap();
    this.api = {
      setValue: this.setValue,
      getValue: this.getValue,
      setTouched: this.setTouched,
      getTouched: this.getTouched,
      setError: this.setError,
      getError: this.getError,
      getAsyncError: this.getAsyncError,
      getFullField: this.getFullField,
      submitForm: this.submitForm,
      getState: this.getFormState,
      setState: this.setFormState,
      setValues: this.setValues,
      reset: this.reset,
      notify: this.notify,
      fieldExists: this.fieldExists
    };
    this.fields = new Map();
    this.validationPromiseIDs = new Map();
    //this.submitting = false;
    // Call initial hooks
    if (hooks.getApi) {
      hooks.getApi(this.api);
    }
  }

  get state() {
    return {
      values: this.values.object,
      touched: this.touched.object,
      errors: this.errors.object,
      asyncErrors: this.asyncErrors.object,
      pristine: this.pristine,
      dirty: this.dirty,
      invalid: this.invalid,
      submits: this.submits
    };
  }

  get pristine() {
    return this.touched.empty() && this.values.empty();
  }

  get dirty() {
    return !this.pristine;
  }

  get invalid() {
    return !this.errors.empty() || !this.asyncErrors.empty();
  }

  valid = () => {
    return this.errors.empty() && this.asyncErrors.empty();
  };

  getFormState = () => {
    return JSON.parse(JSON.stringify(this.state));
  };

  setFormState = state => {
    this.values.rebuild(state.values);
    this.touched.rebuild(state.touched);
    this.errors.rebuild(state.errors);
    this.asyncErrors.rebuild();
    this.emit('change', this.state);
    this.emit('values', this.state.values);
    this.emit('update', this.state);
  };

  setValues = values => {
    this.values.rebuild(values);
    this.emit('change', this.state);
    this.emit('values', this.state.values);
    this.emit('update', this.state);
  };

  validateAsync = async (fieldController, field) => {
    // Set up promise UID for this field on the form
    const uid = Math.random();
    this.validationPromiseIDs.set(field, uid);
    // Call the validator
    try {
      // Grab the promise by executing the validation function
      const promise = fieldController.asyncValidate(this.state.values);
      // Wait on the promise
      const error = await promise;
      // If the promise ID doesn't match we we originally sent, it means a
      // new promise has replaced it. Bail out!
      if (this.validationPromiseIDs.get(field) !== uid) {
        return;
      }
      // Set the error when the promise resolves
      this.asyncErrors.set(field, error);
    } catch (e) {
      // TODO do something here!!!
    }
    // We changed so notify all other fields
    this.notify(fieldController.config.notify);
    // Emit changes
    this.emit('change', this.state);
    this.emit('field', field);
  };

  setValue = (field, value) => {
    // Get the field controller to trigger any lifecycle methods
    const fieldController = this.fields.get(field);
    // Set value and mask the value if mask prop was set
    this.values.set(
      field,
      fieldController.config.mask ? fieldController.config.mask(value) : value
    );
    // Validate if on change validation prop was set
    if (fieldController.config.validateOnChange) {
      this.errors.set(field, fieldController.validate(this.state.values));
      // We changed so notify all other fields
      this.notify(fieldController.config.notify);
    }
    // Emit changes
    this.emit('change', this.state);
    this.emit('values', this.state.values);
    this.emit('field', field);
    // Call onValueChange function of field with the new value
    if (fieldController.config.onValueChange) {
      fieldController.config.onValueChange(this.values.get(field));
    }
  };

  setTouched = (field, value = true) => {
    // Set touched
    this.touched.set(field, value);
    // Get the field controller to trigger any lifecycle methods
    const fieldController = this.fields.get(field);
    // Validate if on blur validation prop was set
    if (fieldController.config.validateOnBlur) {
      this.errors.set(field, fieldController.validate(this.state.values));
      // We changed so notify all other fields
      this.notify(fieldController.config.notify);
    }
    // Validate if on async touch validation prop was set
    if (fieldController.config.asyncValidateOnBlur) {
      this.validateAsync(fieldController, field);
    }
    // Emit changes
    this.emit('change', this.state);
    this.emit('field', field);
  };

  setError = (field, error) => {
    this.errors.set(field, error);
    this.emit('change', this.state);
    this.emit('field', field);

    // We changed so notify all other fields
    const fieldController = this.fields.get(field);
    this.notify(fieldController.config.notify);
  };

  getValue = field => {
    return this.values.get(field);
  };

  getTouched = field => {
    return this.touched.get(field);
  };

  getError = field => {
    return this.errors.get(field);
  };

  getAsyncError = field => {
    return this.asyncErrors.get(field);
  };

  getFullField = field => field;

  register = (field, fieldController) => {
    // Register the field controller
    this.fields.set(field, fieldController);
    // Set initial value if present
    if (fieldController.config.initialValue != null) {
      this.values.set(field, fieldController.config.initialValue);
    }
    // Call validate if validate on mount was passed
    if (fieldController.config.validateOnMount) {
      this.errors.set(field, fieldController.validate(this.state.values));
    }
    this.emit('change', this.state);
    this.emit('field', field);
  };

  remove = field => {
    this.fields.delete(field);
    this.values.delete(field);
    this.touched.delete(field);
    this.errors.delete(field);
    this.asyncErrors.delete(field);
    this.emit('change', this.state);
  };

  deregister = field => {
    this.remove(field);
    this.emit('change', this.state);
    this.emit('field', field);
  };

  reset = () => {
    this.values.rebuild(this.config.initialValues);
    this.touched.rebuild();
    this.errors.rebuild();
    this.asyncErrors.rebuild();
    this.submits = 0;
    // We need to iterate over all the fields and
    // reset them
    this.fields.forEach(fieldController => {
      if (fieldController.config.initialValue) {
        this.values.set(
          fieldController.field,
          fieldController.config.initialValue
        );
      }
    });
    this.emit('change', this.state);
    this.emit('update', this.state);
  };

  fieldExists = field => {
    return !!this.fields.get(field);
  };

  notify = fields => {
    if (fields) {
      fields.forEach(field => {
        // Get the field controller to trigger any lifecycle methods
        const fieldController = this.fields.get(field);
        if (!fieldController) {
          throw new Error(`Cant notify field ${field} as it does not exist!`);
        }
        this.errors.set(field, fieldController.validate(this.state.values));
        this.emit('field', field);
      });

      // Emit changes
      this.emit('change', this.state);
    }
  };

  submitForm = async e => {
    // incriment!!
    this.submits = this.submits + 1;

    if (e && !this.config.dontPreventDefault) {
      e.preventDefault(e);
    }

    const asyncValidators = [];

    this.fields.forEach(fieldController => {
      // Get the fields name
      const field = fieldController.field;
      // Set touched
      this.touched.set(field, true);
      // Validate
      //debugger
      this.errors.set(field, fieldController.validate(this.state.values));
      // Build up list of async validators
      if (fieldController.shouldValidateAsync()) {
        // Only validate if sync is valid
        if (!this.errors.get(field)) {
          asyncValidators.push(() =>
            this.validateAsync(fieldController, field)
          );
        }
      }
    });

    // Execute all async validators
    await Promise.all(asyncValidators.map(func => func()));

    this.emit('change', this.state);
    this.emit('update', this.state);
    // Make sure we are valid
    if (this.valid()) {
      if (this.hooks.preSubmit) {
        this.values.rebuild(
          this.hooks.preSubmit(JSON.parse(JSON.stringify(this.state.values)))
        );
        this.emit('change', this.state);
        this.emit('update', this.state);
      }
      if (this.hooks.onSubmit) {
        this.hooks.onSubmit(JSON.parse(JSON.stringify(this.state.values)));
      }
    } else {
      if (this.hooks.onSubmitFailure) {
        this.hooks.onSubmitFailure(
          JSON.parse(JSON.stringify(this.state.errors)),
          JSON.parse(JSON.stringify(this.state.asyncErrors))
        );
      }
    }
  };
}

export default FormController;
