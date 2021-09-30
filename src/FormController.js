import { ObjectMap } from './ObjectMap';
import { Debug } from './debug';
import { FieldMap as defaultFieldMap } from './fieldMap';
import {
  debounceByName,
  informedFormat,
  uuidv4,
  validateAjvSchema,
  validateYupField,
  validateYupSchema
} from './utils';
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

    // Get schema stuff off of options
    const { ajv, schema, fieldMap } = options;

    // Create new ajv instance if passed
    this.ajv = ajv ? new ajv({ allErrors: true }) : null;
    this.ajvValidate = ajv ? this.ajv.compile(schema) : null;

    // Add field map ( defaults to our field map )
    this.fieldMap = fieldMap || defaultFieldMap;

    // This is the emitter lol
    this.emitter = this;

    // Map will store all fields by name
    // Key => name
    // Val => fieldMetaRef
    // Why? so the form knows about field meta
    this.fieldsMap = new Map();

    // Map will store current validation request
    // Key => name
    // Val => {uuid, value}
    // Why? So we know if validation request is stale or not
    // We ALSO need to store value because of edge case:
    //
    // Assume sync validation "Must be at least 5 characters" and some async validation that takes 2 seconds
    // 1. User types ddddd ( 5 inputs so we pass sync validation )
    // 2. Because there is no sync validation async will trigger to validate username
    // 3. While that occurs, user starts to Backspace the ddddd
    // 4. The second user backspaces, sync has error so async never "re-occurs"
    // 5. the sync request made on step 2 completes
    // 6. It wipes out sync error
    this.validationRequests = new Map();

    // For array fields lol
    this.removalLocked = undefined;

    // Initialize the controller state
    this.state = {
      pristine: true,
      dirty: false,
      submitted: false,
      invalid: false,
      valid: true,
      submitting: false,
      validating: 0,
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
    this.getValid = this.getValid.bind(this);
    this.on = this.on.bind(this);
    this.emit = this.emit.bind(this);
    this.removeListener = this.removeListener.bind(this);
    this.remove = this.remove.bind(this);
    this.swap = this.swap.bind(this);
    this.register = this.register.bind(this);
    this.deregister = this.deregister.bind(this);
    this.getInitialValue = this.getInitialValue.bind(this);
    this.initialize = this.initialize.bind(this);
    this.reformat = this.reformat.bind(this);
    this.lockRemoval = this.lockRemoval.bind(this);
    this.unlockRemoval = this.unlockRemoval.bind(this);
    this.resetField = this.resetField.bind(this);
    this.getRemovalLocked = this.getRemovalLocked.bind(this);
    this.isRemovalLocked = this.isRemovalLocked.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.validateAsync = this.validateAsync.bind(this);
    this.validated = this.validated.bind(this);
    this.debouncedValidateAsync = debounceByName(this.validateAsync);
    this.getOptions = this.getOptions.bind(this);
  }

  getOptions() {
    return this.options;
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

    // We only need to call validate if the user gave us one
    // and they want us to validate on change
    // Example validateOn = "change" ("change-change")==> true
    // Example validateOn = "blur" ("blur-blur") ==> false
    // Example validateOn = "submit" ("submit-submit")==> false
    // Example validateOn = "change-blur" ==> true
    // Example validateOn = "change-submit" ==> true
    // Example validateOn = "blur-submit" ==> false
    if (meta.validate && meta.validateOn.includes('change')) {
      const val = ObjectMap.get(this.state.values, name);
      debug(`Validating after change ${name} ${val}`);
      ObjectMap.set(
        this.state.errors,
        name,
        meta.validate(val, this.state.values)
      );
    }
    // Same thing but for YUP schema
    if (meta.yupSchema && meta.validateOn.includes('change')) {
      // Only call if we dont already have error
      if (this.getError(name) === undefined) {
        const val = ObjectMap.get(this.state.values, name);
        debug(`Validating YUP after change ${name} ${val}`);
        ObjectMap.set(
          this.state.errors,
          name,
          validateYupField(meta.yupSchema, val)
        );
      }
    }

    // We only need to call asyncValidate if
    // 1. the user gave us one
    // 2. they want us to validate on change
    // 3. We don't have a sync error
    // Example validateOn = "change" ("change-change")==> true
    // Example validateOn = "blur" ("blur-blur") ==> false
    // Example validateOn = "submit" ("submit-submit")==> false
    // Example validateOn = "change-blur" ==> false
    // Example validateOn = "change-submit" ==> false
    // Example validateOn = "blur-submit" ==> false
    if (meta.asyncValidate && meta.validateOn === 'change') {
      // Get error to determine if we even want to validateAsync
      if (this.getError(name) === undefined) this.debouncedValidateAsync(name);
    }

    // Always remember to update pristine and valid here
    this.state.pristine = false;
    this.state.dirty = !this.state.pristine;

    // Remember to update valid
    this.state.valid = ObjectMap.empty(this.state.errors);
    this.state.invalid = !this.state.valid;

    this.emit('field', name);
  }

  getTouched(name) {
    return ObjectMap.get(this.state.touched, name);
  }

  setTouched(name, value) {
    debug(`Setting ${name}'s touched to ${value}`);
    ObjectMap.set(this.state.touched, name, value);
    const meta = this.fieldsMap.get(name)?.current;

    // We only need to call validate if the user gave us one
    // and they want us to validate on blur
    // Example validateOn = "change" ("change-change")==> true
    // Example validateOn = "blur" ("blur-blur") ==> true
    // Example validateOn = "submit" ("submit-submit")==> false
    // Example validateOn = "change-blur" ==> true
    // Example validateOn = "change-submit" ==> true
    // Example validateOn = "blur-submit" ==> true
    if (
      meta.validate &&
      (meta.validateOn.includes('blur') || meta.validateOn.includes('change'))
    ) {
      const val = ObjectMap.get(this.state.values, name);
      debug(`Validating after blur ${name} ${val}`);
      ObjectMap.set(
        this.state.errors,
        name,
        meta.validate(val, this.state.values)
      );
    }

    // We only need to call asyncValidate if
    // 1. the user gave us one
    // 2. they want us to validate on blur
    // 3. We don't have a sync error
    // Example validateOn = "change" ("change-change")==> true
    // Example validateOn = "blur" ("blur-blur") ==> true
    // Example validateOn = "submit" ("submit-submit")==> false
    // Example validateOn = "change-blur" ==> true
    // Example validateOn = "change-submit" ==> false
    // Example validateOn = "blur-submit" ==> false
    if (
      meta.asyncValidate &&
      (meta.validateOn === 'blur' ||
        meta.validateOn === 'change-blur' ||
        meta.validateOn === 'change')
    ) {
      // Get error to determine if we even want to validateAsync
      if (this.getError(name) === undefined) {
        this.validateAsync(name);
      }
    }

    this.state.valid = ObjectMap.empty(this.state.errors);
    this.state.invalid = !this.state.valid;

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

  getPristine(name) {
    // Field might not be registered yet so don't try and check if we are not registered
    if (this.fieldsMap.get(name)) {
      // Current value for this field
      const val = this.getValue(name);

      // What was the initial value for this field
      const init = this.fieldsMap.get(name).current.getInitialValue();

      // We are pristine if
      return init === val;
    }
    return undefined;
  }

  getDirty(name) {
    return !this.getPristine(name);
  }

  getValid(name) {
    // Valid when we have no error
    return ObjectMap.get(this.state.errors, name) === undefined;
  }

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
      getFormState: this.getFormState,
      getPristine: this.getPristine,
      getDirty: this.getDirty
    };
  }

  getFieldState(name) {
    // Get meta for field
    const meta = this.fieldsMap.get(name)?.current;
    const error = this.getError(name);
    const pristine = this.getPristine(name);
    const valid = this.getValid(name);
    const touched = !!this.getTouched(name);
    const dirty = !pristine;
    const validating = !!this.validationRequests.get(name);

    let showError = false;
    if (meta && meta.showErrorIfError) {
      showError = error !== undefined;
    } else if (meta && meta.showErrorIfDirty) {
      showError = error !== undefined && dirty;
    } else {
      showError = error !== undefined && touched;
    }

    // $relevant
    // $focused

    return {
      value: this.getValue(name),
      maskedValue: this.getMaskedValue(name),
      touched,
      error: this.getError(name),
      pristine,
      dirty,
      valid,
      invalid: !valid,
      showError,
      validating
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
    // DO NOT emit event here we want to delay it on purpose because otherwise relevance will trigger with bad state
    // this.emit("field", name);
  }

  pullOut(name) {
    debug('Pull', name);
    ObjectMap.delete(this.state.values, name);
    ObjectMap.delete(this.state.maskedValues, name);
    ObjectMap.delete(this.state.touched, name);
    ObjectMap.delete(this.state.errors, name);
    // DO NOT emit event here we want to delay it on purpose because otherwise relevance will trigger with bad state
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

      // Might need to set initial error
      if (meta.current.validate && meta.current.validateOnMount) {
        const val = ObjectMap.get(this.state.values, name);
        debug(`Validating on mount ${name} ${val}`);
        ObjectMap.set(
          this.state.errors,
          name,
          meta.current.validate(val, this.state.values)
        );
      }

      // validateOnMount="sync" DONT validateOnMount={true} DO
      if (meta.current.asyncValidate && meta.current.validateOnMount === true) {
        // Get error to determine if we even want to validateAsync
        if (this.getError(name) === undefined) this.validateAsync(name);
      }

      debug(`Initializing ${name}'s value to ${initialValue}`);
      ObjectMap.set(this.state.values, name, initialValue);

      debug(`Initializing ${name}'s maskedValue to ${initialMask}`);
      ObjectMap.set(this.state.maskedValues, name, initialMask);

      // Check if the form is valid
      this.state.valid = ObjectMap.empty(this.state.errors);
      this.state.invalid = !this.state.valid;

      this.emit('field', name);
    }
  }

  validated(name, res) {
    debug(
      `Setting ${name}'s error to ${res} with ${
        this.state.validating
      } validations left`
    );
    ObjectMap.set(this.state.errors, name, res);

    // Remember to update valid
    this.state.valid = ObjectMap.empty(this.state.errors);
    this.state.invalid = !this.state.valid;

    // Clear out validating
    this.validationRequests.delete(name);

    // If we are not still validating, and we were submitting, then submit form
    // If we are async validating then dont submit yet
    if (this.state.validating > 0) {
      debug(
        `Still validating ${this.state.validating} others so just update state.`
      );
      this.emit('field', name);
      return;
    }

    // If we were submitting
    if (this.state.submitting) {
      // Check validity and perform submission if valid
      if (this.valid()) {
        debug('Submit', this.state);
        this.emit('field', name);
        this.emit('submit');
      } else {
        debug('Submit', this.state);
        this.emit('field', name);
        this.emit('failure');
      }
      this.state.submitting = false;
    }

    // Always update
    this.emit('field', name);
  }

  validateAsync(name) {
    debug('VALIDATING ASYNC', name);
    // Get meta for field
    const meta = this.fieldsMap.get(name)?.current;

    // Get the value
    const value = this.getValue(name);

    if (meta && meta.asyncValidate) {
      this.state.validating = this.state.validating + 1;
      const uuid = uuidv4();
      debug('REQUEST', uuid);
      this.validationRequests.set(name, { uuid, value });

      // Because we may have been debounced need to update field here
      this.emit('field', name);

      meta
        .asyncValidate(value, this.state.values)
        .then(res => {
          this.state.validating = this.state.validating - 1;
          const stale = this.validationRequests.get(name).uuid !== uuid;
          const invalid =
            this.validationRequests.get(name).value !== this.getValue(name);
          if (!stale && !invalid) {
            debug('FINISH', uuid);
            this.validated(name, res);
          } else {
            debug(
              `${stale ? 'STALE' : 'INVALID'} THEN`,
              uuid,
              value,
              this.getValue(name)
            );
          }
        })
        .catch(err => {
          this.state.validating = this.state.validating - 1;
          const stale = this.validationRequests.get(name).uuid !== uuid;
          const invalid =
            this.validationRequests.get(name).value !== this.getValue(name);
          if (!stale && !invalid) {
            debug('FINISH', uuid);
            this.validated(name, err.message);
          } else {
            debug(
              `${stale ? 'STALE' : 'INVALID'} THEN`,
              uuid,
              value,
              this.getValue(name)
            );
          }
        });
    }
  }

  reset() {
    this.state = {
      pristine: true,
      dirty: false,
      submitted: false,
      invalid: false,
      valid: true,
      submitting: false,
      validating: 0,
      values: {},
      errors: {},
      touched: {},
      maskedValues: {},
      initialValues: this.options.initialValues || {}
    };

    this.fieldsMap.forEach(fieldMeta => {
      fieldMeta.current.fieldApi.reset();
    });

    this.emit('reset');
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

    debug(`Resetting ${name}'s value to ${initialValue}`);
    ObjectMap.set(this.state.values, name, initialValue);

    debug(`Resetting ${name}'s maskedValue to ${initialMask}`);
    ObjectMap.set(this.state.maskedValues, name, initialMask);

    debug(`Resetting ${name}'s error`);
    ObjectMap.delete(this.state.errors, name);

    debug(`Resetting ${name}'s touched`);
    ObjectMap.delete(this.state.touched, name);

    // Check if the form is valid
    this.state.valid = ObjectMap.empty(this.state.errors);
    this.state.invalid = !this.state.valid;

    this.emit('field', name);
  }

  reformat(name) {
    debug('Reformatting', name);
    // Get meta for field
    const meta = this.fieldsMap.get(name)?.current;

    // Get current value
    const currentValue = ObjectMap.get(this.state.values, name);

    const { formatter, parser, initialize } = meta;

    const newValue = initializeValue(currentValue, {
      formatter,
      parser,
      initialize
    });
    const newMaskedValue = initializeMask(currentValue, {
      formatter
    });

    debug(`Reformatting ${name}'s value to ${newValue}`);
    ObjectMap.set(this.state.values, name, newValue);

    debug(`Reformatting ${name}'s maskedValue to ${newMaskedValue}`);
    ObjectMap.set(this.state.maskedValues, name, newMaskedValue);

    this.emit('field', name);
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

  keyDown(e) {
    // If preventEnter then return
    if (e.keyCode == 13 && this.options.preventEnter) {
      e.preventDefault(e);
      return false;
    }
  }

  validate() {
    debug('Validating all fields');

    const values = this.state.values;
    let errors = {};

    // Validate schema if needed
    if (this.options.yupSchema) {
      const yupErrors = validateYupSchema(this.options.yupSchema, values);
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

    // Update the errors
    this.state.errors = errors;

    // Remember to update valid
    this.state.valid = ObjectMap.empty(this.state.errors);
    this.state.invalid = !this.state.valid;

    // Let everyone know!
    this.emit('field', '_ALL_');
  }

  asyncValidate() {
    debug('Async Validating all fields');

    // Itterate through and call validate on every field
    this.fieldsMap.forEach(meta => {
      const { name } = meta.current;
      // Get error to determine if we even want to validateAsync
      if (this.getError(name) === undefined) this.validateAsync(name);
    });
  }

  submitForm(e) {
    this.state.submitting = true;

    if (!this.options.dontPreventDefault && e) {
      // Prevent default browser form submission
      e.preventDefault(e);
    }

    // Validate the form
    this.validate();

    // Touch all the fields
    // TODO maybe do this all at once !?
    this.fieldsMap.forEach(meta => {
      debug(`Submit - setting ${meta.current.name}'s touched to true`);
      ObjectMap.set(this.state.touched, meta.current.name, true);
    });

    // Let everyone know!
    this.emit('field', '_ALL_');

    // Trigger all async validations
    this.asyncValidate();

    // Check validity and perform submission if valid
    // Only submit if we are valid and we are NOT currently async validating
    if (this.valid() && this.state.validating === 0) {
      debug('Submit', this.state);
      this.state.submitted = true;
      this.emit('submit');
    } else {
      debug('Fail', this.state);
      this.emit('failure');
    }

    // Only set to false if we are not async validating
    if (this.state.validating === 0) {
      this.state.submitting = false;
    }

    this.emit('field');
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
