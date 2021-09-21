import { ObjectMap } from './ObjectMap';
import { Debug } from './debug';
import { informedFormat, validateAjvSchema, validateYupField } from './utils';
const debug = Debug('informed:FormController' + '\t');

const initializeValue = (value, { formatter, parser, initialize }) => {
  if (value != null) {
    // Call users initialize if it was passed
    if (initialize) {
      return initialize(value);
    }
    if (formatter && !parser) {
      const res = informedFormat(value, formatter);
      return res.value;
    }
    return value;
  }
  // Not needed but called out specifically
  return undefined;
};

const initializeMask = (value, { formatter }) => {
  // Call formatter
  if (formatter) {
    const res = informedFormat(value, formatter);
    return res.value;
  }

  return value;
};

/* ----------------------- FormController ----------------------- */

export class FormController {
  constructor(options) {
    // Set the options
    this.options = options;

    // Initialize listeners
    this.subscriptions = new Map();

    // This is the emitter lol
    this.emitter = this;

    // Map will store all fields by name
    // Key => name
    // Val => fieldMetaRef
    // Why? so the form knows about field meta
    this.fieldsMap = new Map();

    // For array fields lol
    this.removalLocked = undefined;

    // Initialize the controller state
    this.state = {
      pristine: true,
      dirty: false,
      invalid: false,
      values: {},
      errors: {},
      touched: {},
      maskedValues: {},
      initialValues: this.options.initialValues || {}
    };

    // Bind functions that will be called externally
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.getMaskedValue = this.getMaskedValue.bind(this);
    this.setMaskedValue = this.setMaskedValue.bind(this);
    this.getTouched = this.getTouched.bind(this);
    this.setTouched = this.setTouched.bind(this);
    this.getError = this.getError.bind(this);
    this.setError = this.setError.bind(this);
    this.reset = this.reset.bind(this);
    this.validate = this.validate.bind(this);
    this.getDirty = this.getDirty.bind(this);
    this.getPristine = this.getPristine.bind(this);
    this.getFormState = this.getFormState.bind(this);
    this.getFormApi = this.getFormApi.bind(this);
    this.getFieldState = this.getFieldState.bind(this);
    this.on = this.on.bind(this);
    this.emit = this.emit.bind(this);
    this.removeListener = this.removeListener.bind(this);
    this.remove = this.remove.bind(this);
    this.swap = this.swap.bind(this);
    this.register = this.register.bind(this);
    this.deregister = this.deregister.bind(this);
    this.getInitialValue = this.getInitialValue.bind(this);
    this.initialize = this.initialize.bind(this);
    this.lockRemoval = this.lockRemoval.bind(this);
    this.unlockRemoval = this.unlockRemoval.bind(this);
    this.resetField = this.resetField.bind(this);
    this.getRemovalLocked = this.getRemovalLocked.bind(this);
    this.isRemovalLocked = this.isRemovalLocked.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  getValue(name) {
    return ObjectMap.get(this.state.values, name);
  }

  getMaskedValue(name) {
    return ObjectMap.get(this.state.maskedValues, name);
  }

  setMaskedValue(name, value) {
    return ObjectMap.set(this.state.maskedValues, name, value);
  }

  setValue(name, value, e) {
    // Get meta for field
    const meta = this.fieldsMap.get(name)?.current;

    // Remember Cursor position!
    if (e && e.target && e.target.selectionStart) {
      meta.setCursor(e.target.selectionStart);
    }

    if (value === '') {
      debug(`Setting ${name}'s value to undefiend`);
      ObjectMap.set(this.state.values, name, undefined);
      ObjectMap.set(this.state.maskedValues, name, undefined);
    } else if (meta?.type === 'number' && value !== undefined) {
      debug(`Setting ${name}'s value to ${+value}`);
      ObjectMap.set(this.state.values, name, +value);
      ObjectMap.set(this.state.maskedValues, name, +value);
    } else {
      let val = value;
      let maskedVal = value;

      // Call formatter and parser if passed
      if (meta.formatter) {
        const res = informedFormat(val, meta.formatter);
        meta.setCursorOffset(res.offset);
        maskedVal = res.value;
        val = maskedVal;
      }

      // // Only parse if parser was passed
      if (meta.parser) {
        val = val != null ? meta.parser(val) : val;
      }

      debug(`Setting ${name}'s value to ${val}`);
      ObjectMap.set(this.state.values, name, val);

      debug(`Setting ${name}'s maskedValue to ${maskedVal}`);
      ObjectMap.set(this.state.maskedValues, name, maskedVal);
    }
    this.emit('field', name);
  }

  getTouched(name) {
    return ObjectMap.get(this.state.touched, name);
  }

  setTouched(name, value) {
    debug(`Setting ${name}'s touched to ${value}`);
    ObjectMap.set(this.state.touched, name, value);
    this.emit('field', name);
  }

  getError(name) {
    return ObjectMap.get(this.state.errors, name);
  }

  setError(name, value) {
    debug(`Setting ${name}'s error to ${value}`);
    ObjectMap.set(this.state.errors, name, value);
    this.emit('field', name);
  }

  getInitialValue(name) {
    return ObjectMap.get(this.state.initialValues, name);
  }

  getDirty() {}

  getPristine() {}

  getFormState() {
    return this.state;
  }

  getFormApi() {
    return {
      getValue: this.getValue,
      setValue: this.setValue,
      getMaskedValue: this.getMaskedValue,
      setMaskedValue: this.setMaskedValue,
      getTouched: this.getTouched,
      setTouched: this.setTouched,
      getError: this.getError,
      setError: this.setError,
      resetField: this.resetField,
      reset: this.reset,
      getFormState: this.getFormState
    };
  }

  getFieldState(name) {
    return {
      value: this.getValue(name),
      touched: this.getTouched(name),
      error: this.getError(name),
      maskedValue: this.getMaskedValue(name)
    };
  }

  remove(name) {
    debug('Remove', name);

    if (!this.removalLocked) {
      debug('Delete Value', name);
      ObjectMap.delete(this.state.values, name);
      debug('Delete Masked', name);
      ObjectMap.delete(this.state.maskedValues, name);
      debug('Delete Touched', name);
      ObjectMap.delete(this.state.touched, name);
      debug('Delete Errors', name);
      ObjectMap.delete(this.state.errors, name);
      this.emit('field', name);
    }
  }

  swap(name, a, b) {
    debug('Swap', name, a, b);
    ObjectMap.swap(this.state.values, name, a, b);
    ObjectMap.swap(this.state.maskedValues, name, a, b);
    ObjectMap.swap(this.state.touched, name, a, b);
    ObjectMap.swap(this.state.errors, name, a, b);
    // this.emit("field", name);
  }

  pullOut(name) {
    debug('Pull', name);
    ObjectMap.delete(this.state.values, name);
    ObjectMap.delete(this.state.maskedValues, name);
    ObjectMap.delete(this.state.touched, name);
    ObjectMap.delete(this.state.errors, name);
    // this.emit("field", name);
  }

  register(name, meta) {
    debug('Register', name, meta);
    // Register the meta
    this.fieldsMap.set(name, meta);
    this.emit('field', name);
  }

  deregister(name) {
    debug('De-Register', name);
    this.fieldsMap.delete(name);
    this.emit('field', name);
  }

  initialize(name, meta) {
    debug('Initialize', name, this.state);
    // Initialize value if needed
    // If we already have value i.e "saved"
    // use that ( it was not removed on purpose! )
    if (this.getValue(name)) {
      this.emit('field', name);
      return;
    }
    // Otherwise use the fields initial value
    if (meta.current.initialValue != null) {
      const { formatter, parser, initialize } = meta.current;

      const initialValue = initializeValue(meta.current.initialValue, {
        formatter,
        parser,
        initialize
      });
      const initialMask = initializeMask(meta.current.initialValue, {
        formatter
      });

      debug(`Initializing value ${name} to ${initialValue}`, initialValue);
      debug(`Initializing mask ${name} to ${initialValue}`, initialMask);

      this.setValue(name, initialValue);
      this.setMaskedValue(name, initialMask);
    }
  }

  reset() {
    this.state = {
      pristine: true,
      dirty: false,
      invalid: false,
      values: {},
      errors: {},
      touched: {},
      maskedValues: {},
      initialValues: this.options.initialValues || {}
    };

    this.fieldsMap.forEach(fieldMeta => {
      fieldMeta.current.fieldApi.reset();
    });
  }

  resetField(name) {
    debug('Resetting', name);
    // Get meta for field
    const meta = this.fieldsMap.get(name)?.current;

    const { formatter, parser, initialize } = meta;

    const initialValue = initializeValue(meta.initialValue, {
      formatter,
      parser,
      initialize
    });
    const initialMask = initializeMask(meta.initialValue, {
      formatter
    });

    debug(`Resetting value ${name} to ${initialValue}`, initialValue);
    debug(`Resetting mask ${name} to ${initialValue}`, initialMask);

    this.setValue(name, initialValue);
    this.setMaskedValue(name, initialMask);
  }

  lockRemoval(i) {
    debug('LOCKREMOVAL', i);
    this.removalLocked = i;
  }

  unlockRemoval() {
    this.removalLocked = undefined;
  }

  getRemovalLocked() {
    return this.removalLocked;
  }

  isRemovalLocked() {
    return this.removalLocked != null;
  }

  valid() {
    const errors = this.state.errors;
    return !!ObjectMap.empty(errors);
  }

  validate() {
    debug('Validating all fields');

    const values = this.values;
    let errors = {};

    // Validate schema if needed
    if (this.options.validationSchema) {
      const yupErrors = validateYupField(this.options.validationSchema, values);
      errors = { ...errors, ...yupErrors };
    }

    // Validate AJV schema if needed
    if (this.options.schema && this.options.ajv) {
      const ajvErrors = validateAjvSchema(this.ajvValidate, values);
      errors = { ...errors, ...ajvErrors };
    }

    // Call the forms field level validation
    if (this.options.validateFields) {
      const fieldErrors = this.options.validateFields(values);
      errors = { ...errors, ...fieldErrors };
      errors = ObjectMap.purge(errors);
    }

    // Itterate through and call validate on every field
    this.fieldsMap.forEach(fieldMeta => {
      const meta = fieldMeta.current;
      const value = this.getValue(meta.name);
      const error = meta.validate ? meta.validate(value, values) : undefined;
      if (error) {
        ObjectMap.set(errors, meta.name, error);
      }
    });

    this.state.errors = errors;
    this.emit('field', '_ALL_');
  }

  submitForm(e) {
    this.state.submitting = true;

    if (!this.options.dontPreventDefault && e) {
      // Prevent default browser form submission
      e.preventDefault(e);
    }

    // Validate the form
    this.validate();

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

  /* -------------------------------- Event Emitter ------------------------------ */

  emit(event, ...args) {
    // Grab the set based on the event
    const listeners = this.subscriptions.get(event);
    // Only call if we have listeners on that event ( null check )
    if (listeners) {
      listeners.forEach(listener => listener(...args));
    }
  }

  on(event, listener) {
    // Singleton check
    if (!this.subscriptions.get(event)) {
      this.subscriptions.set(event, new Set());
    }
    // Add listener
    const listeners = this.subscriptions.get(event);
    listeners.add(listener);
  }

  removeListener(event, listener) {
    // Remove listener
    const listeners = this.subscriptions.get(event);
    listeners.delete(listener);
  }
}
