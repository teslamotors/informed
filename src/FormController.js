import { ObjectMap } from './ObjectMap';
import { Debug } from './debug';
import { FieldMap as defaultFieldMap } from './fieldMap';
import {
  debounceByName,
  informedFormat,
  informedParse,
  uuidv4,
  validateAjvSchema,
  validateYupField,
  validateYupSchema,
  getSchemaPathFromJsonPath,
  isChild
} from './utils';
const debug = Debug('informed:FormController' + '\t');

const initializeValue = (value, { formatter, parser, initialize, mask }) => {
  if (value != null) {
    // Call users initialize if it was passed
    if (initialize && !parser) {
      return initialize(value);
    }
    if (formatter && !parser) {
      const res = informedFormat(value, formatter);
      return res.value;
    }
    if (mask && !parser) {
      return mask(value);
    }
    return value;
  }
  // Not needed but called out specifically
  return undefined;
};

const initializeMask = (value, { formatter, initialize, mask }) => {
  if (initialize) {
    return initialize(value);
  }
  // Call formatter
  if (formatter) {
    const res = informedFormat(value, formatter);
    return res.value;
  }
  if (mask) {
    return mask(value);
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
    const { ajv, schema, fieldMap, adapter } = options.current;

    // Create new ajv instance if passed
    this.ajv = ajv ? new ajv({ allErrors: true }) : null;
    // TODO this fucks with json pointer stuff
    // if (ajvErrors) {
    //   ajvErrors(this.ajv);
    // }
    this.ajvValidate = ajv ? this.ajv.compile(schema) : null;

    // Add field map ( defaults to our field map )
    this.fieldMap = adapter || fieldMap || defaultFieldMap;

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

    this.dataRequests = new Map();

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
      gathering: 0,
      values: {},
      errors: {},
      touched: {},
      maskedValues: {},
      dirt: {},
      focused: {},
      modified: {},
      data: {},
      initialValues: this.options.current.initialValues || {}
    };

    // Bind functions that will be called externally
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setValueQuietly = this.setValueQuietly.bind(this);
    this.setValues = this.setValues.bind(this);
    this.setTheseValues = this.setTheseValues.bind(this);
    this.resetPath = this.resetPath.bind(this);
    this.getMaskedValue = this.getMaskedValue.bind(this);
    this.setMaskedValue = this.setMaskedValue.bind(this);
    this.setModifiedValue = this.setModifiedValue.bind(this);
    this.getTouched = this.getTouched.bind(this);
    this.setTouched = this.setTouched.bind(this);
    this.getFocused = this.getFocused.bind(this);
    this.setFocused = this.setFocused.bind(this);
    this.getError = this.getError.bind(this);
    this.setError = this.setError.bind(this);
    this.reset = this.reset.bind(this);
    this.validate = this.validate.bind(this);
    this.asyncValidate = this.asyncValidate.bind(this);
    this.getDirty = this.getDirty.bind(this);
    this.setDirt = this.setDirt.bind(this);
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
    this.pullOut = this.pullOut.bind(this);
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
    this.touchAllFields = this.touchAllFields.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.validateAsync = this.validateAsync.bind(this);
    this.gatherData = this.gatherData.bind(this);
    this.validated = this.validated.bind(this);
    this.debouncedValidateAsync = debounceByName(this.validateAsync);
    this.debouncedGatherInfo = debounceByName(this.gatherData);
    this.getOptions = this.getOptions.bind(this);
    this.validateField = this.validateField.bind(this);
    this.getErrorMessage = this.getErrorMessage.bind(this);
    this.clearValue = this.clearValue.bind(this);
    this.clearError = this.clearError.bind(this);
    this.getData = this.getData.bind(this);
    this.setData = this.setData.bind(this);
    this.getModified = this.getModified.bind(this);
    this.updateValid = this.updateValid.bind(this);
    this.focusFirstError = this.focusFirstError.bind(this);
    this.setPristine = this.setPristine.bind(this);
    this.disableForm = this.disableForm.bind(this);
    this.enableForm = this.enableForm.bind(this);
  }

  getOptions() {
    return this.options.current;
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

  setModifiedValue(name, value) {
    return ObjectMap.set(this.state.modified, name, value);
  }

  updateValid() {
    // Store previous state
    const prevValid = this.state.valid;

    // Now update
    this.state.valid = ObjectMap.empty(this.state.errors);
    this.state.invalid = !this.state.valid;

    // Call change handlers if needed
    if (prevValid && !this.state.valid) {
      this.emit('invalid');
    }
    if (!prevValid && this.state.valid) {
      this.emit('valid');
    }
  }

  setValues(values) {
    this.fieldsMap.forEach(fieldMeta => {
      // Get value out of values object basd on path
      const val = ObjectMap.get(values, fieldMeta.current.name);
      fieldMeta.current.fieldApi.setValue(val);
    });
  }

  disableForm() {
    this.disabled = true;
    // This will make all fields re render with updated value
    this.emit('field', '_ALL_');
  }

  enableForm() {
    this.disabled = undefined;
    // This will make all fields re render with updated value
    this.emit('field', '_ALL_');
  }

  setTheseValues(values) {
    this.fieldsMap.forEach(fieldMeta => {
      // Get value out of values object basd on path
      const val = ObjectMap.get(values, fieldMeta.current.name);
      // Only set if it is there
      if (val != null) {
        fieldMeta.current.fieldApi.setValue(val);
      }
    });
  }

  resetPath(path) {
    this.fieldsMap.forEach(fieldMeta => {
      // Only reset if parent path
      if (isChild(path, fieldMeta.current.name)) {
        fieldMeta.current.fieldApi.reset();
      }
    });
  }

  setValueQuietly(name, value) {
    this.setValue(name, value, undefined, undefined, true);
  }

  setValue(name, value, e, key, quiet) {
    debug(`setValue ${name}`, value);

    // Get meta for field
    const meta = this.fieldsMap.get(name)?.current || {};

    // Remember Cursor position!
    // Need try catch because of Safari Bullshit issue
    try {
      if (e && e.target && e.target.selectionStart) {
        meta.setCursor(e.target.selectionStart, key);
      }
    } catch (e) {
      // Need try catch because of Safari Bullshit issue
      if (!(e instanceof TypeError)) {
        throw e;
      }
    }

    if (value === '') {
      if (meta.allowEmptyString) {
        debug(`Setting ${name}'s value to '' because allowEmptyString is set`);
        ObjectMap.set(this.state.values, name, value);
        // Special if check for modified
        if (meta.getInitialValue && meta.getInitialValue() != value) {
          ObjectMap.set(this.state.modified, name, value);
        } else {
          debug(`Removing ${name}'s modified`);
          ObjectMap.delete(this.state.modified, name);
        }
        ObjectMap.set(this.state.maskedValues, name, value);
      } else {
        debug(`Setting ${name}'s value to undefiend`);
        ObjectMap.set(this.state.values, name, undefined);
        ObjectMap.set(this.state.modified, name, undefined);
        ObjectMap.set(this.state.maskedValues, name, undefined);
      }
    } else if (meta?.type === 'number' && value !== undefined) {
      let val = value;
      let maskedVal = value;

      // call mask if passed
      if (meta.mask) {
        maskedVal = meta.mask(val);
      }

      // // Only parse if parser was passed
      if (meta.parser) {
        val = val != null ? informedParse(val, meta.parser) : val;
      }

      debug(`Setting ${name}'s value to ${+val}`);
      ObjectMap.set(this.state.values, name, +val);

      // Special if check for modified
      if (meta.getInitialValue && meta.getInitialValue() != val) {
        ObjectMap.set(this.state.modified, name, +val);
      } else {
        debug(`Removing ${name}'s modified`);
        ObjectMap.delete(this.state.modified, name);
      }

      debug(`Setting ${name}'s maskedValue to`, +maskedVal);
      ObjectMap.set(this.state.maskedValues, name, +maskedVal);
    } else {
      let val = value;
      let maskedVal = value;

      // Only clean if clean was passed
      if (meta.clean) {
        val = meta.clean(val);
        maskedVal = val;
      }

      // Call formatter parser if passed
      if (meta.formatter) {
        const res = informedFormat(
          val,
          meta.formatter,
          this.getMaskedValue(name)
        );
        meta.setCursorOffset(res.offset, key);
        maskedVal = res.value;
        val = maskedVal;
      }

      // call mask if passed
      if (meta.mask) {
        val = meta.mask(val);
        maskedVal = val;
      }

      // // Only parse if parser was passed
      if (meta.parser) {
        val = val != null ? informedParse(val, meta.parser) : val;
      }

      debug(`Setting ${name}'s value to`, val);
      ObjectMap.set(this.state.values, name, val);

      // Special if check for modified
      // We want to set even if field is not on screen ( does not have getter for initial )
      if (!meta.getInitialValue || meta.getInitialValue() != val) {
        debug(`Setting ${name}'s modified to`, val);
        ObjectMap.set(this.state.modified, name, val);
      } else {
        debug(`Removing ${name}'s modified`);
        ObjectMap.delete(this.state.modified, name);
      }

      debug(`Setting ${name}'s maskedValue to`, maskedVal);
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
    // I dont think we need this anymore as its done by the generate function ..... TODO maybe remove
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
    if (!quiet) {
      this.state.pristine = false;
      this.state.dirty = !this.state.pristine;
      ObjectMap.set(this.state.dirt, name, true);
    }

    // Remember to update valid
    this.updateValid();

    // Call users onChange if it exists
    if (meta.onChange) {
      const fieldState = this.getFieldState(name);
      meta.onChange(fieldState, e);
    }

    // Call users onNativeChange if we had native event and func
    if (e && meta.onNativeChange) {
      const fieldState = this.getFieldState(name);
      meta.onNativeChange(fieldState, e);
    }

    if (meta.gatherData) {
      // Get error to determine if we even want to validateAsync
      this.debouncedGatherInfo(name);
    }

    // Normal field event
    this.emit('field', name);

    // Special event when fields value changes
    this.emit('field-value', name);
    this.emit('field-modified', name);
    this.emit('field-value-set', name);
  }

  validateField(name) {
    // Get meta for field
    const meta = this.fieldsMap.get(name)?.current;

    if (meta.validate) {
      const val = ObjectMap.get(this.state.values, name);
      debug(`Validating field ${name} via validateField with value ${val}`);
      ObjectMap.set(
        this.state.errors,
        name,
        meta.validate(val, this.state.values)
      );
    }
    // Same thing but for YUP schema
    if (meta.yupSchema) {
      // Only call if we dont already have error
      if (this.getError(name) === undefined) {
        const val = ObjectMap.get(this.state.values, name);
        debug(`Validating YUP field via validateField ${name} ${val}`);
        ObjectMap.set(
          this.state.errors,
          name,
          validateYupField(meta.yupSchema, val)
        );
      }
    }

    // TODO maybe do async validation here !?!?!?!

    // Remember to update valid
    this.updateValid();

    this.emit('field', name);
  }

  getModified(name) {
    return ObjectMap.get(this.state.modified, name);
  }

  getFocused(name) {
    return ObjectMap.get(this.state.focused, name);
  }

  setFocused(name, value, e) {
    debug(`Setting ${name}'s focused to ${value}`);

    // Get meta for field
    const meta = this.fieldsMap.get(name)?.current || {};

    // Update the state
    ObjectMap.set(this.state.focused, name, value);

    // Call users onFoucs if it exists
    if (meta.onFocus) {
      const fieldState = this.getFieldState(name);
      meta.onFocus(fieldState, e);
    }

    // emit field update
    this.emit('field', name);
  }

  getTouched(name) {
    return ObjectMap.get(this.state.touched, name);
  }

  setTouched(name, value, e) {
    debug(`Setting ${name}'s touched to ${value}`);

    // Get meta for field
    const meta = this.fieldsMap.get(name)?.current || {};

    // Update the state
    ObjectMap.set(this.state.touched, name, value);

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

    // Remember to update valid
    this.updateValid();

    // Call users onBlur if it exists
    if (meta.onBlur) {
      const fieldState = this.getFieldState(name);
      meta.onBlur(fieldState, e);
    }

    this.emit('field', name);
  }

  getData(name) {
    return ObjectMap.get(this.state.data, name);
  }

  setData(name, value) {
    debug(`Setting ${name}'s data to ${value}`);
    ObjectMap.set(this.state.data, name, value);
    this.emit('field', name);
  }

  getError(name) {
    return ObjectMap.get(this.state.errors, name);
  }

  setError(name, value) {
    debug(`Setting ${name}'s error to ${value}`);
    ObjectMap.set(this.state.errors, name, value);
    this.state.valid = ObjectMap.empty(this.state.errors);
    this.state.invalid = !this.state.valid;
    this.emit('field', name);
  }

  getInitialValue(name) {
    return ObjectMap.get(this.state.initialValues, name);
  }

  getDirty(name) {
    return !!ObjectMap.get(this.state.dirt, name);
  }

  setDirt(name, value) {
    return ObjectMap.set(this.state.dirt, name, value);
  }

  getPristine(name) {
    return !this.getDirty(name);
  }

  getValid(name) {
    // Valid when we have no error
    return ObjectMap.get(this.state.errors, name) === undefined;
  }

  getFormState() {
    return this.state;
  }

  clearValue(name) {
    this.setValue(name, undefined);
  }

  clearError(name) {
    this.setError(name, undefined);
  }

  setPristine(pristine) {
    this.state.pristine = pristine;
    this.state.dirty = !this.state.pristine;

    // Just need to trigger a form state update
    this.emit('field');
  }

  getFormApi() {
    return {
      getValue: this.getValue,
      setValue: this.setValue,
      setValueQuietly: this.setValueQuietly,
      getMaskedValue: this.getMaskedValue,
      setMaskedValue: this.setMaskedValue,
      setModifiedValue: this.setModifiedValue,
      getTouched: this.getTouched,
      setTouched: this.setTouched,
      getError: this.getError,
      setError: this.setError,
      getFocused: this.getFocused,
      setFocused: this.setFocused,
      getData: this.getData,
      setData: this.setData,
      getModified: this.getModified,
      resetField: this.resetField,
      reset: this.reset,
      getFormState: this.getFormState,
      getPristine: this.getPristine,
      getDirty: this.getDirty,
      setDirt: this.setDirt,
      validateField: this.validateField,
      getFieldState: this.getFieldState,
      getInitialValue: this.getInitialValue,
      touchAllFields: this.touchAllFields,
      validate: this.validate,
      asyncValidate: this.asyncValidate,
      setValues: this.setValues,
      setTheseValues: this.setTheseValues,
      resetPath: this.resetPath,
      submitForm: this.submitForm,
      clearValue: this.clearValue,
      clearError: this.clearError,
      focusFirstError: this.focusFirstError,
      setPristine: this.setPristine,
      disable: this.disableForm,
      enable: this.enableForm
    };
  }

  getFieldState(name) {
    // Get meta for field
    const meta = this.fieldsMap.get(name)?.current || {};
    const error = this.getError(name);
    const focused = !!this.getFocused(name);
    const modified = !!this.getModified(name);
    const dirty = this.getDirty(name);
    const valid = this.getValid(name);
    const touched = !!this.getTouched(name);
    const pristine = !dirty;
    const validating = !!this.validationRequests.get(name);
    const gathering = !!this.dataRequests.get(name);

    let showError = false;
    if (meta && meta.showErrorIfError) {
      showError = error !== undefined;
    } else if (meta && meta.showErrorIfDirty) {
      showError = error !== undefined && (dirty || touched);
    } else if (meta && meta.showErrorIfTouched) {
      showError = error !== undefined && touched;
    }

    // $relevant
    // $focused

    return {
      value: this.getValue(name),
      maskedValue: this.getMaskedValue(name),
      modified,
      touched,
      error: this.getError(name),
      data: this.getData(name),
      pristine,
      dirty,
      valid,
      invalid: !valid,
      showError,
      validating,
      gathering,
      focused
    };
  }

  remove(name, options = {}) {
    debug('Remove', name);

    if (!this.removalLocked) {
      const {
        value: keepValue = false,
        error: keepError = false,
        touched: keepTouched = false
      } = options;

      if (!keepValue) {
        debug('Delete Value', name);
        ObjectMap.delete(this.state.values, name);
        debug('Delete Modified', name);
        ObjectMap.delete(this.state.modified, name);
        debug('Delete Masked', name);
        ObjectMap.delete(this.state.maskedValues, name);
      }
      if (!keepTouched) {
        debug('Delete Touched', name);
        ObjectMap.delete(this.state.touched, name);
      }
      if (!keepError) {
        debug('Delete Errors', name);
        ObjectMap.delete(this.state.errors, name);
      }
      debug('Delete Dirt', name);
      ObjectMap.delete(this.state.dirt, name);
      debug('Delete Focused', name);
      ObjectMap.delete(this.state.focused, name);
      debug('Delete Info', name);
      ObjectMap.delete(this.state.data, name);

      // Remember to update valid
      this.updateValid();

      // Final field change
      this.emit('field', name);
      // Special event when fields value changes
      this.emit('field-value', name);
      this.emit('field-modified', name);
    } else {
      debug('Removal locked so NOT removing', name);
    }
  }

  swap(name, a, b) {
    debug('Swap', name, a, b);
    ObjectMap.swap(this.state.values, name, a, b);
    ObjectMap.swap(this.state.modified, name, a, b);
    ObjectMap.swap(this.state.maskedValues, name, a, b);
    ObjectMap.swap(this.state.touched, name, a, b);
    ObjectMap.swap(this.state.errors, name, a, b);
    ObjectMap.swap(this.state.dirt, name, a, b);
    ObjectMap.swap(this.state.focused, name, a, b);
    ObjectMap.swap(this.state.data, name, a, b);
    // DO NOT emit event here we want to delay it on purpose because otherwise relevance will trigger with bad state
    // this.emit("field", name);
    this.state.pristine = false;
    this.state.dirty = !this.state.pristine;
  }

  pullOut(name) {
    debug('Pull', name);
    ObjectMap.delete(this.state.values, name);
    ObjectMap.delete(this.state.modified, name);
    ObjectMap.delete(this.state.maskedValues, name);
    ObjectMap.delete(this.state.touched, name);
    ObjectMap.delete(this.state.errors, name);
    ObjectMap.delete(this.state.dirt, name);
    ObjectMap.delete(this.state.focused, name);
    ObjectMap.delete(this.state.data, name);
    // DO NOT emit event here we want to delay it on purpose because otherwise relevance will trigger with bad state
    // this.emit("field", name);
    this.state.pristine = false;
    this.state.dirty = !this.state.pristine;
  }

  register(name, meta) {
    debug('Register', name, meta);
    // Register the meta
    if (!this.fieldsMap.get(name)) {
      this.fieldsMap.set(name, meta);
      this.emit('field', name);
    }
  }

  deregister(name) {
    debug('De-Register', name);
    if (this.fieldsMap.get(name)) {
      this.fieldsMap.delete(name);
      this.emit('field', name);
    }
  }

  initialize(name, meta) {
    debug('Initialize', name, this.state);
    // Initialize value if needed
    // If we already have value i.e "saved"
    // use that ( it was not removed on purpose! )
    // Otherwise use the fields initial value
    if (
      !this.getValue(name) &&
      meta.current.initialValue != null &&
      (meta.current.initializeValueIfPristine ? this.state.pristine : true)
    ) {
      const { formatter, parser, initialize, clean, mask } = meta.current;

      // Clean value if we have clean function
      const cleanedValue = clean
        ? clean(meta.current.initialValue)
        : meta.current.initialValue;

      const initialValue = initializeValue(cleanedValue, {
        formatter,
        parser,
        initialize,
        mask
      });
      const initialMask = initializeMask(cleanedValue, {
        formatter,
        initialize,
        mask
      });

      debug(`Initializing ${name}'s value to ${initialValue}`);
      ObjectMap.set(this.state.values, name, initialValue);

      debug(`Initializing ${name}'s maskedValue to ${initialMask}`);
      ObjectMap.set(this.state.maskedValues, name, initialMask);
    }

    // Might need to set initial error
    if (meta.current.validate && meta.current.validateOnMount) {
      const val = ObjectMap.get(this.state.values, name);
      debug(`Validating on mount ${name} ${val}`, this.state);
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

    // Check if the form is valid
    this.state.valid = ObjectMap.empty(this.state.errors);
    this.state.invalid = !this.state.valid;

    if (meta.current.gatherData && meta.current.gatherOnMount === true) {
      // Get error to determine if we even want to validateAsync
      this.debouncedGatherInfo(name);
    }

    this.emit('field', name);

    // Special event when fields value changes ( this if first time so its technically a change to initial value)
    this.emit('field-value', name);
    // Specifically did NOT call field-modified here
  }

  validated(name, res) {
    debug(
      `Setting ${name}'s error to ${res} with ${
        this.state.validating
      } validations left`
    );
    ObjectMap.set(this.state.errors, name, res);

    // Remember to update valid
    this.updateValid();

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
        debug('Fail', this.state);
        if (this.options.current.focusOnInvalid) {
          this.focusFirstError();
        }
        this.emit('field', name);
        this.emit('failure');
      }
      this.state.submitting = false;
    }

    // If we had done function
    if (this.done) {
      // Call done only if valid
      if (this.valid()) this.done();
      // Then always clear
      this.done = undefined;
    }

    // Always update
    this.emit('field', name);
  }

  gathered(name, res) {
    debug(
      `Setting ${name}'s data to ${res} with ${
        this.state.gathering
      } gatherers left`
    );
    ObjectMap.set(this.state.data, name, res);

    // Clear out validating
    this.dataRequests.delete(name);

    // Always update
    this.emit('field', name);
    this.emit('field-value', name);
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

          // What in the hell is invalid and why do I need it??
          // 1. User types ddddd ( 5 inputs so we pass sync validation )
          // 2. Because there is no sync validation async will trigger to validate username
          // 3. While that occurs, user starts to Backspace the ddddd
          // 4. The second user backspaces, sync has error so async never "re-occurs"
          // 5. the sync request made on step 2 completes
          // 6. It wipes out sync error
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

  gatherData(name) {
    debug('EXECUTING INFO ASYNC', name);
    // Get meta for field
    const meta = this.fieldsMap.get(name)?.current;

    // Get the value
    const value = this.getValue(name);

    if (meta && meta.gatherData) {
      this.state.gathering = this.state.gathering + 1;
      const uuid = uuidv4();
      debug('DATA REQUEST', uuid);
      this.dataRequests.set(name, { uuid, value });

      // Because we may have been debounced need to update field here
      this.emit('field', name);

      meta
        .gatherData(value, this.state)
        .then(res => {
          this.state.gathering = this.state.gathering - 1;
          const stale = this.dataRequests.get(name).uuid !== uuid;

          // What in the hell is invalid and why do I need it??
          // because the value can be outdated
          const invalid =
            this.dataRequests.get(name).value !== this.getValue(name);
          if (!stale && !invalid) {
            debug('DATA FINISH', uuid);
            this.gathered(name, res);
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
          this.state.gathering = this.state.gathering - 1;
          const stale = this.dataRequests.get(name).uuid !== uuid;
          const invalid =
            this.dataRequests.get(name).value !== this.getValue(name);
          if (!stale && !invalid) {
            debug('DATA FINISH', uuid);
            this.gathered(name, err.message);
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
      gathering: 0,
      values: {},
      errors: {},
      touched: {},
      maskedValues: {},
      dirt: {},
      focused: {},
      modified: {},
      data: {},
      initialValues: this.options.current.initialValues || {}
    };

    this.fieldsMap.forEach(fieldMeta => {
      fieldMeta.current.fieldApi.reset();
    });

    this.emit('reset');
  }

  focusFirstError() {
    if (this.options.current.focusOnInvalid) {
      // Itterate through and call validate on every field

      Array.from(this.fieldsMap.values()).some(fieldMeta => {
        // Get meta off field
        const meta = fieldMeta.current;

        // Get ref to input
        const formFieldRef = meta.fieldRef;

        // Get error for that field
        const err = this.getError(meta.name);

        // Only focus if we can
        if (err && formFieldRef) {
          if (typeof formFieldRef.current.focus === 'function') {
            debug('Focusing onto', meta.name);
            formFieldRef.current.focus();
          }
          return true;
        }
        return false;
      });
    }
  }

  resetField(name, options = {}) {
    debug('Resetting', name);
    // Get meta for field
    const meta = this.fieldsMap.get(name)?.current || {};

    const { formatter, parser, initialize, mask } = meta;
    const {
      value,
      resetError = true,
      resetTouched = true,
      resetDirt = true,
      resetModified = true
    } = options;

    if (value) {
      const initializedValue = initializeValue(value, {
        formatter,
        parser,
        initialize,
        mask
      });

      debug(`Resetting ${name}'s value to ${initializedValue}`);
      ObjectMap.set(this.state.values, name, initializedValue);

      const maskedValue = initializeMask(value, { formatter, parser, mask });
      debug(`Resetting ${name}'s maskedValue to ${maskedValue}`);
      ObjectMap.set(this.state.maskedValues, name, maskedValue);
    } else {
      const initialValue = initializeValue(
        meta.getInitialValue && meta.getInitialValue(),
        {
          formatter,
          parser,
          initialize,
          mask
        }
      );

      const initialMask = initializeMask(
        meta.getInitialValue && meta.getInitialValue(),
        {
          formatter,
          initialize,
          mask
        }
      );

      debug(`Resetting ${name}'s value to ${initialValue}`);
      ObjectMap.set(this.state.values, name, initialValue);

      debug(`Resetting ${name}'s maskedValue to ${initialMask}`);
      ObjectMap.set(this.state.maskedValues, name, initialMask);
    }

    if (resetError) {
      debug(`Resetting ${name}'s error`);
      ObjectMap.delete(this.state.errors, name);
    }

    if (resetTouched) {
      debug(`Resetting ${name}'s touched`);
      ObjectMap.delete(this.state.touched, name);
    }

    if (resetDirt) {
      debug(`Resetting ${name}'s dirt`);
      ObjectMap.delete(this.state.dirt, name);
    }

    if (resetModified) {
      debug(`Resetting ${name}'s modified`);
      ObjectMap.delete(this.state.modified, name);
    }

    // Might need to set initial error
    if (meta.validate && meta.validateOnMount) {
      const val = ObjectMap.get(this.state.values, name);
      debug(
        `Validating on reset because of validateOnMount ${name} ${val}`,
        this.state
      );
      ObjectMap.set(
        this.state.errors,
        name,
        meta.validate(val, this.state.values)
      );
    }

    // Check if the form is valid
    this.state.valid = ObjectMap.empty(this.state.errors);
    this.state.invalid = !this.state.valid;

    if (meta.gatherData && meta.gatherOnMount === true) {
      // Get error to determine if we even want to validateAsync
      this.debouncedGatherInfo(name);
    }

    this.emit('field', name);

    // Special event when fields value changes ( its a reset so it changes )
    this.emit('field-value', name);
    this.emit('field-modified', name);
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

    // Special event when fields value changes
    this.emit('field-value', name);
    this.emit('field-modified', name);
  }

  lockRemoval(i) {
    debug('LOCKREMOVAL', i);
    this.removalLocked = i;
  }

  unlockRemoval() {
    debug('UNLOCK REMOVAL');
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
    if (e.keyCode == 13 && this.options.current.preventEnter) {
      e.preventDefault(e);
      return false;
    }
  }

  validate() {
    debug('Validating all fields');
    let values = this.state.values;

    const validateModified = this.options.current.validateModified;

    if (validateModified) {
      values = this.state.modified;
    }
    let errors = {};

    // Validate schema if needed
    if (this.options.current.yupSchema) {
      const yupErrors = validateYupSchema(
        this.options.current.yupSchema,
        values
      );
      errors = { ...errors, ...yupErrors };
    }

    // Validate AJV schema if needed
    if (this.options.current.schema && this.options.current.ajv) {
      const ajvErrors = validateAjvSchema(this.ajvValidate, values);
      errors = { ...errors, ...ajvErrors };
    }

    // Call the forms field level validation
    if (this.options.current.validateFields) {
      const fieldErrors = this.options.current.validateFields(values);
      errors = { ...errors, ...fieldErrors };
      errors = ObjectMap.purge(errors);
    }

    // Itterate through and call validate on every field
    this.fieldsMap.forEach(fieldMeta => {
      const meta = fieldMeta.current;
      const value = this.getValue(meta.name);
      const error = meta.validate ? meta.validate(value, values) : undefined;
      if (error != null) {
        ObjectMap.set(errors, meta.name, error);
      }
    });

    // Update the errors
    this.state.errors = errors;

    // Remember to update valid
    this.updateValid();

    // Let everyone know!
    this.emit('field', '_ALL_');
  }

  asyncValidate(done) {
    debug('Async Validating all fields');
    this.done = done;

    // Itterate through and call validate on every field
    this.fieldsMap.forEach(meta => {
      const { name } = meta.current;
      // Get error to determine if we even want to validateAsync
      if (this.getError(name) === undefined) this.validateAsync(name);
    });
  }

  getErrorMessage(key, n) {
    debug(`Getting ${key} error message for ${n} Validating all fields`);

    let name = n;

    if (this.options.current.schema) {
      debug('We have schema so looking in there for error message');

      // Try to grab message from schema first
      // Example schema
      // const schema = {
      //   errorMessage: {
      //     minLength: 'name must be longer',
      //     maxLength: 'must be shorter'
      //   },
      //   properties: {
      //     name: {
      //       minLength: 6, // This will get 'name must be longer' message
      //     },
      //     brother: {
      //       errorMessage: {
      //         minLength: 'brothers name must be longer',
      //       },
      //       properties: {
      //         name: {
      //           minLength: 6, // This will get 'brothers name must be longer'
      //         },
      //         age: {
      //           minLength: 6,
      //           errorMessage: {
      //             minLength: 'brothers age must be longer', // This will get 'brothers age must be longer'
      //           }
      //         },
      //         test: {
      //           maxLength: 6, // This will get 'must be shorter'
      //         },
      //       }
      //     }
      //   }
      // };
      // How are we going to get this? start at the property and drill up
      // First we go down to the fields location in the schema
      // Example
      // Start
      // name = brother.siblings[1].friend.name
      // path = properties.brother.properties.siblings.items.properties.friend.properties.name
      // Iteration 1
      // next = brother.siblings[1].friend
      // nextPath = properties.brother.properties.siblings.items.properties.friend
      // Iteration 2
      // next = brother.siblings[1]
      // nextPath = properties.brother.properties.siblings.items
      // Iteration 3
      // next = brother
      // nextPath = properties.brother
      // Iteration 4
      // next = ''
      // nextPath = ''
      // Done ---------------
      while (name !== '') {
        debug(`Looking for message at ${name}`);
        const path = getSchemaPathFromJsonPath(name);
        debug(`Looking for message at schema path ${path}`);
        const property = ObjectMap.get(this.options.current.schema, path);
        // If the property has an error message use that
        if (property && property.errorMessage) {
          const message =
            typeof property.errorMessage === 'string'
              ? property.errorMessage
              : property.errorMessage[key];
          // Only return a message if we had one... maybe we don't have that defined at field level!
          if (message) {
            return message;
          }
        }
        debug(`Did not find message in schema for ${path}`, property);
        // If we get here we did not find the error message so keep going up
        name = name.substring(0, name.lastIndexOf('.'));
      }

      // Last but not least check schema
      const property = this.options.current.schema;
      if (property.errorMessage) {
        const message =
          typeof property.errorMessage === 'string'
            ? property.errorMessage
            : property.errorMessage[key];
        // Only return a message if we had one... maybe we don't have that defined at field level!
        if (message) {
          return message;
        }
      }
    }

    // Next we check the errorMessage option if it was passed explicitly to an input
    const meta = this.fieldsMap.get(n)?.current;

    if (meta && meta.errorMessage) {
      const message =
        typeof meta.errorMessage === 'string'
          ? meta.errorMessage
          : meta.errorMessage[key];
      // Only return a message if we had one... maybe we don't have that defined at field level!
      if (message) {
        return message;
      }
    }

    // Finally we check the forms errorMessage prop
    if (this.options.current.errorMessage) {
      const message =
        typeof this.options.current.errorMessage === 'string'
          ? this.options.current.errorMessage
          : this.options.current.errorMessage[key];
      // Only return a message if we had one... maybe we don't have that defined at field level!
      if (message) {
        return message;
      }
    }
  }

  touchAllFields() {
    // Touch all the fields
    // TODO maybe do this all at once !?
    this.fieldsMap.forEach(meta => {
      if (!meta.current.arrayField) {
        debug(
          `TouchAllFields - setting ${meta.current.name}'s touched to true`
        );
        ObjectMap.set(this.state.touched, meta.current.name, true);
      }
    });
  }

  submitForm(e) {
    this.state.submitting = true;

    if (!this.options.current.dontPreventDefault && e) {
      // Prevent default browser form submission
      e.preventDefault(e);
    }

    // Validate the form
    this.validate();

    // Touch all the fields
    this.touchAllFields();

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
      if (this.options.current.focusOnInvalid) {
        this.focusFirstError();
      }
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
