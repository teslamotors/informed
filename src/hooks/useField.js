import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { FormRegisterContext } from '../Context';
import useFormApi from './useFormApi';
import useStateWithGetter from './useStateWithGetter';
import { validateYupField, uuidv4 } from '../utils';

import Debug from '../debug';
import useLayoutEffect from './useIsomorphicLayoutEffect';
import FormController from '../FormController';
const logger = Debug('informed:useField' + '\t');

// localStorage.debug = 'informed:.*' << HOW to enable debuging

const initializeValue = (value, mask) => {
  if (value != null) {
    // Call mask if it was passed
    if (mask) {
      return mask(value);
    }
    return value;
  }
  // Not needed but called out specifically
  return undefined;
};

const initializeMask = (value, format, parse) => {
  // Call format and parse if they were passed
  if (format && parse) {
    return format(value);
  }
  return value;
};

const generateValidationFunction = (validationFunc, validationSchema) => {
  // We dont want a validation function if there was nothing passed
  if (validationFunc || validationSchema) {
    return (val, values) => {
      if (validationSchema) {
        return validateYupField(validationSchema, val);
      }
      if (validationFunc) {
        return validationFunc(val, values);
      }
    };
  }
};

const generateOnChange = ({ fieldType, setValue, onChange, multiple, ref }) => {
  let setter = val => setValue(val);

  if (
    fieldType === 'text' ||
    fieldType === 'textArea' ||
    fieldType === 'number'
  ) {
    setter = e => setValue(e.target.value, e);
  }

  if (fieldType === 'select') {
    setter = () => {
      let selected = Array.from(ref.current)
        .filter(option => option.selected)
        .map(option => option.value);

      setValue(multiple ? selected : selected[0] || '');
    };
  }

  if (fieldType === 'checkbox') {
    setter = e => {
      setValue(e.target.checked);
      if (onChange) {
        onChange(e);
      }
    };
  }

  return val => {
    setter(val);
    if (onChange) {
      onChange(val);
    }
  };
};

const generateOnBlur = ({ setTouched, onBlur }) => {
  return e => {
    setTouched(true);
    if (onBlur) {
      onBlur(e);
    }
  };
};

const generateValue = ({ fieldType, maskedValue, multiple, value }) => {
  switch (fieldType) {
    case 'text':
    case 'number':
      return !maskedValue && maskedValue !== 0 ? '' : maskedValue;
    case 'textArea':
      return !maskedValue ? '' : maskedValue;
    case 'select':
      return value || (multiple ? [] : '');
    case 'checkbox':
      return !!value;
    default:
      return value;
  }
};

function useField(fieldProps = {}, userRef) {
  // Pull props off of field props
  const {
    field,
    validate: validationFunc,
    validationSchema,
    mask,
    maskWithCursorOffset,
    format,
    parse,
    initialValue,
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    maskOnBlur,
    allowEmptyString,
    onValueChange,
    notify,
    keepState,
    maintainCursor,
    debug,
    shadow,
    step,
    fieldType,
    multiple,
    onChange,
    onBlur,
    formController,
    relevant: userRelevant,
    ...userProps
  } = fieldProps;

  // Create ref to a field id
  const [fieldId] = useState(uuidv4());

  // Grab the form register context
  let updater = useContext(FormRegisterContext);

  // Grab the form api
  let formApi = useFormApi();

  // If the form Controller was passed in then use that instead
  if (formController) {
    updater = formController.updater;
    formApi = formController.getFormApi();
  }

  // Generate validation function
  const validate = generateValidationFunction(validationFunc, validationSchema);

  // Grab possible initial value from form
  const [formInitialValue] = useState(() => updater.getInitialValue(field));

  // We might have keep state so check for it!
  const savedState = formApi.getSavedValue(field);

  // Create Initial Values
  let initVal;
  let initTouched;

  // We do these checks because initial value could be false or zero!!
  if (keepState && savedState) {
    logger(`Setting field ${name}'s kept state`, savedState);
    initVal = savedState.value;
    initTouched = savedState.touched;
    // Remove the saved state
    formApi.removeSavedState(name);
  } else if (initialValue != undefined) {
    initVal = initialValue;
  } else {
    initVal = formInitialValue;
  }

  // Initialize state
  const [value, setVal, getTheVal] = useStateWithGetter(
    initializeValue(initVal, mask)
  );
  const [error, setErr, getErr] = useStateWithGetter(
    validateOnMount ? validate(value) : undefined
  );
  const [touched, setTouch, getTouch] = useStateWithGetter(initTouched);
  const [cursor, setCursor, getCursor] = useStateWithGetter(0);
  const [cursorOffset, setCursorOffset, getCursorOffset] = useStateWithGetter(
    0
  );
  const [maskedValue, setMaskedValue] = useState(
    initializeMask(value, format, parse)
  );

  // Create then update refs to props
  const initialValueRef = useRef(initialValue);
  const fieldRef = useRef(field);
  initialValueRef.current = initialValue;
  fieldRef.current = field;

  // Special getter to support shadow fields
  const getVal = () => {
    return shadow ? formApi.getDerrivedValue(field) : getTheVal();
  };

  /* ---------------------- Setters ---------------------- */

  // ---- Define set error ----

  const setError = (val, { preventUpdate } = {}) => {
    // For multistep forms always set error to undefined when not at that step
    if (step && formApi.getStep() < step) {
      logger(
        `Setting ${field}'s error to undefined as we are not at that step`
      );
      setErr(undefined);
      if (!preventUpdate) {
        updater.setError(field, undefined);
      }
    } else {
      logger(`Setting ${field}'s error to ${val}`);
      setErr(val);
      if (!preventUpdate) {
        updater.setError(field, val);
      }
    }
  };

  // ---- Define set value ----
  const setValue = (val, e, options = {}) => {
    logger(`Setting ${field} to ${val}`);

    // Get the most up to date options
    const formOptions = formApi.getOptions();

    // Initialize maked value
    let maskedVal = val;

    if (
      val === '' &&
      !allowEmptyString &&
      !options.allowEmptyString &&
      !formOptions.allowEmptyStrings
    ) {
      val = undefined;
    }

    // Turn string into number for number fields
    if (
      (fieldProps.type === 'number' || fieldType === 'number') &&
      val !== undefined
    ) {
      val = +val;
    }

    // Remember Cursor position!
    if (e && e.target && e.target.selectionStart) {
      setCursor(e.target.selectionStart);
    }

    // Call mask if it was passed
    if (mask && !maskOnBlur) {
      maskedVal = mask(val, getCursor());
      val = mask(val, getCursor());
    }

    // Call maskWithCursorOffset if it was passed
    if (maskWithCursorOffset && !maskOnBlur) {
      const res = maskWithCursorOffset(val, getCursor());
      maskedVal = res.value;
      val = res.value;
      setCursorOffset(res.offset);
    }

    // Call format and parse if they were passed
    if (format && parse) {
      // Masked value only differs from value when format and parse are used
      val = parse(val);
      maskedVal = format(val);
    }

    // We only need to call validate if the user gave us one
    // and they want us to validate on change && its not the initial validation
    if (validate && validateOnChange && !options.initial) {
      logger(`Validating after change ${field} ${val}`);
      setError(validate(val, formApi.getValues()));
    }

    // Now we update the value
    setVal(val);
    setMaskedValue(maskedVal);

    // If the user passed in onValueChange then call it!
    if (onValueChange) {
      onValueChange(val);
    }

    // Call the updater
    if (!options.preventUpdate) {
      updater.setValue(field, val);
    }
  };

  // ---- Define set touched ----
  const setTouched = (val, reset, { preventUpdate } = {}) => {
    logger(`Field ${field} has been touched`);

    // We only need to call validate if the user gave us one
    // and they want us to validate on blur
    if (validate && validateOnBlur && !reset && val) {
      logger(`Validating after blur ${field} ${getVal()}`);
      setError(validate(getVal(), formApi.getValues()));
    }

    // Call mask if it was passed
    if (mask && maskOnBlur) {
      // Generate the masked value from the current value
      const maskedVal = mask(getVal());

      // Now we update the value
      setVal(maskedVal);
      setMaskedValue(maskedVal);

      // If the user passed in onValueChange then call it!
      if (onValueChange) {
        onValueChange(maskedVal);
      }

      // Call the updater
      if (!preventUpdate) {
        updater.setValue(field, maskedVal);
      }
    }

    // Call maskWithCursorOffset if it was passed
    if (maskWithCursorOffset && maskOnBlur) {
      // Generate the mask and offset
      const res = maskWithCursorOffset(getVal());

      // Set the offset
      setCursorOffset(res.offset);

      // Now we update the value
      setVal(res.value);
      setMaskedValue(res.value);

      // If the user passed in onValueChange then call it!
      if (onValueChange) {
        onValueChange(res.value);
      }

      // Call the updater
      if (!preventUpdate) {
        updater.setValue(field, res.value);
      }
    }

    // Finally we set touched and call the updater
    setTouch(val);
    if (!preventUpdate) {
      updater.setTouched(field, val);
    }
  };

  // ---- Define reset ----
  const reset = ({ preventUpdate } = {}) => {
    const initVal = initializeValue(
      initialValueRef.current || updater.getInitialValue(field),
      mask
    );
    // TODO support numbers
    setValue(initVal, null, { initial: true, preventUpdate });
    // Setting somthing to undefined will remove it
    setError(validateOnMount ? validate(initVal) : undefined, {
      preventUpdate
    });
    setTouched(undefined, true, { preventUpdate });
  };

  // ---- Define validate ----

  // Note: it takes values as an optimization for when
  // the form controller calls it ( dont need to generate all values )
  // over and over :)
  const fieldValidate = values => {
    if (validate) {
      logger(`Field validating ${field} ${getVal()}`);
      setError(validate(getVal(), values || formApi.getValues()));
    }
  };

  /* ----------------- Field Api && State ----------------- */

  const relevantFunc = () => true;

  // Build the field api
  const fieldApi = {
    setValue,
    setTouched,
    setError,
    reset,
    validate: fieldValidate,
    getValue: getVal,
    getTouched: getTouch,
    getError: getErr,
    getFieldState: () => ({
      value: getVal(),
      touched: getTouch()
    }),
    relevant: userRelevant || relevantFunc
  };

  // Build the field state
  let fieldState = {
    value,
    error,
    touched,
    maskedValue
  };

  // Create shadow state if this is a shadow field
  if (shadow) {
    fieldState = {
      error,
      touched
    };
  }

  // Initial register needs to happen before render ( simulating constructor muhahahah )
  useState(() => {
    const fullField = formApi.getFullField(field);
    logger('Initial Register', fieldId, fullField);
    const fieldObj = {
      field: fullField,
      fieldId,
      fieldApi,
      fieldState,
      notify,
      keepState,
      shadow
    };
    updater.register(fieldId, fieldObj, true);
  });

  logger('Render', formApi.getFullField(field), fieldState);

  const internalRef = useRef(null);

  const ref = React.useMemo(() => userRef || internalRef, []);

  // We want to register and deregister this field
  useEffect(() => {
    const fullField = formApi.getFullField(fieldRef.current);
    logger('Register', fieldId, fieldRef.current);
    const fieldObj = {
      field: fullField,
      fieldId,
      fieldApi,
      fieldState,
      notify,
      keepState,
      shadow
    };
    updater.register(fieldId, fieldObj);
    return () => {
      const fullField = formApi.getFullField(fieldRef.current);
      logger('Deregister', fieldId, fullField);
      updater.deregister(fieldId);
    };
  }, []);

  // We want to let the controller know of changes on this field when specific props change
  useEffect(
    () => {
      const fullField = formApi.getFullField(field);
      logger('Update', field);

      const fieldObj = {
        field: fullField,
        fieldId,
        fieldApi,
        fieldState,
        notify,
        keepState,
        shadow
      };

      updater.update(fieldId, fieldObj);
    },
    // This is VERYYYY!! Important!
    [validationFunc, validateOnChange, validateOnBlur, onValueChange, field]
  );

  // Maintain cursor position
  useLayoutEffect(
    () => {
      if (maintainCursor && ref.current != null && getCursor())
        ref.current.selectionEnd = getCursor() + getCursorOffset();
    },
    [value]
  );

  // for debugging
  useLayoutEffect(() => {
    if (debug && ref) {
      ref.current.style.border = '5px solid orange';
      setTimeout(() => {
        ref.current.style.borderWidth = '2px';
        ref.current.style.borderStyle = 'inset';
        ref.current.style.borderColor = 'initial';
        ref.current.style.borderImage = 'initial';
      }, 500);
    }
  });

  // This is an awesome optimization!!
  const shouldUpdate = [
    ...Object.values(fieldState),
    ...Object.values(fieldProps),
    ...Object.values(userProps)
  ];

  const render = children => useMemo(() => children, [...shouldUpdate]);

  // Build some setub fields so users can easily intagrate without any hookup code

  const name = field;
  const changeHandler = generateOnChange({
    fieldType,
    setValue,
    onChange,
    multiple,
    ref
  });
  const blurHandler = generateOnBlur({ setTouched, onBlur });
  const hookedValue = generateValue({
    fieldType,
    maskedValue,
    multiple,
    value
  });

  return {
    fieldState,
    fieldApi,
    render,
    ref,
    userProps: {
      ...userProps,
      multiple, // WE NEED TO PUT THESE BACK!!
      onChange, // WE NEED TO PUT THESE BACK!!
      onBlur // WE NEED TO PUT THESE BACK!!
    },
    informed: {
      name,
      multiple,
      onChange: changeHandler,
      onBlur: blurHandler,
      value: hookedValue,
      ref,
      ...userProps
    }
  };
}

export default useField;
