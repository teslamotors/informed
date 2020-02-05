import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { FormRegisterContext } from '../Context';
import useFormApi from './useFormApi';
import useStateWithGetter from './useStateWithGetter';
import Debug from '../debug';
import useLayoutEffect from './useIsomorphicLayoutEffect';
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

function useField(fieldProps = {}, userRef) {
  // Pull props off of field props
  const {
    field,
    validate,
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
    ...userProps
  } = fieldProps;

  // Grab the form register context
  const updater = useContext(FormRegisterContext);

  // Grab the form state
  const formApi = useFormApi();


  // Initialize state 
  const [value, setVal, getTheVal] = useStateWithGetter(initializeValue(initialValue, mask));
  const [error, setErr, getErr] = useStateWithGetter(validateOnMount ? validate(value) : undefined);
  const [touched, setTouch, getTouch] = useStateWithGetter();
  const [cursor, setCursor, getCursor] = useStateWithGetter(0);
  const [cursorOffset, setCursorOffset, getCursorOffset] = useStateWithGetter(0);
  const [maskedValue, setMaskedValue] = useState(initializeMask(value, format, parse));

  // Create then update refs to props
  const initialValueRef = useRef(initialValue);
  initialValueRef.current = initialValue;

  // Special getter to support shadow fields
  const getVal = () => {
    return shadow ? formApi.getDerrivedValue(field) : getTheVal();
  };

  /* ---------------------- Setters ---------------------- */

  // Define set error

  const setError = (val) => {
    // For multistep forms always set error to undefined when not at that step
    if (step && formApi.getStep() < step) {
      logger(`Setting ${field}'s error to undefined as we are not at that step`);
      setErr(undefined);
      updater.setError(field, undefined);
    } else {
      logger(`Setting ${field}'s error to ${val}`);
      setErr(val);
      updater.setError(field, val);
    }
  };

  // Define set value
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
    if (fieldProps.type === 'number' && val !== undefined) {
      val = +val;
    }

    // Call mask if it was passed
    if (mask && !maskOnBlur) {
      maskedVal = mask(val);
      val = mask(val);
    }

    // Call maskWithCursorOffset if it was passed
    if (maskWithCursorOffset && !maskOnBlur) {
      const res = maskWithCursorOffset(val);
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

    // Remember Cursor position!
    if (e && e.target && e.target.selectionStart) {
      setCursor(e.target.selectionStart);
    }

    // Now we update the value
    setVal(val);
    setMaskedValue(maskedVal);

    // If the user passed in onValueChange then call it!
    if (onValueChange) {
      onValueChange(val);
    }

    // Call the updater
    updater.setValue(field, val);
  };

  // Define set touched
  const setTouched = (val, reset) => {

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
      updater.setValue(field, maskedVal);
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
      updater.setValue(field, res.value);
    }

    // Finally we set touched and call the updater
    setTouch(val);
    updater.setTouched(field, val);
  };

  // Define reset
  const reset = () => {
    const initVal = initializeValue(initialValueRef.current, mask);
    // TODO support numbers
    setValue(initialValueRef.current);
    // Setting somthing to undefined will remove it
    setError(validateOnMount ? validate(initVal) : undefined);
    setTouched(undefined, true);
  };

  // Define validate

  // Note: it takes values as an optimization for when
  // the form controller calls it ( dont need to generate all values )
  // over and over :)
  const fieldValidate = (values) => {
    if (validate) {
      logger(`Field validating ${field} ${getVal()}`);
      setError(validate(getVal(), values || formApi.getValues()));
    }
  };

  /* ----------------- Field Api && State ----------------- */

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
      touched: getTouch(),
    })
  };

  // Build the field state
  let fieldState = {
    value,
    error,
    touched,
    maskedValue,
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
    logger('Initial Register', fullField);
    const fieldObj = { field: fullField, fieldApi, fieldState, notify, keepState, shadow };
    updater.register(field, fieldObj);
  });

  logger('Render', formApi.getFullField(field), fieldState);

  const internalRef = useRef(null);

  const ref = React.useMemo(() => userRef || internalRef, []);

  // We want to register and deregister this field when field name changes
  useEffect(
    () => {
      const fullField = formApi.getFullField(field);
      logger('Register', fullField);
      const fieldObj = { field: fullField, fieldApi, fieldState, notify, keepState, shadow };
      updater.register(field, fieldObj);
      return () => {
        logger('Deregister', fullField);
        updater.deregister(field);
      };
    },
    // This is VERYYYY!! Important!
    [field]
  );

  // We want to let the controller know of changes on this field when specific props change
  useEffect(
    () => {
      const fullField = formApi.getFullField(field);
      logger('Update', field);

      const fieldObj = { field: fullField, fieldApi, fieldState, notify, keepState, shadow };

      updater.update(field, fieldObj);

      // Should re-trigger validation if validation handler updates
      // TODO figure out how to do this without breaking validate={val=> validateFunc}
      // const val = getVal();
      // if (
      //   validate &&
      //   ((validateOnChange && val) || (validateOnBlur && getTouch()))
      // ) {
      //   setError(validate(val, formApi.getValues()));
      // }

    },
    // This is VERYYYY!! Important!
    [validate, validateOnChange, validateOnBlur, onValueChange]
  );

  // Maintain cursor position
  useLayoutEffect(
    () => {
      if (maintainCursor && ref.current != null && getCursor()) ref.current.selectionEnd = getCursor() + getCursorOffset();
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

  return { fieldState, fieldApi, render, ref, userProps };
}

export default useField;
