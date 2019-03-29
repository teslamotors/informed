import React, { useState, useLayoutEffect, useEffect, useContext, useMemo, useRef } from 'react';
import { FormRegisterContext } from '../Context';
import useFormApi from './useFormApi';
import Debug from 'debug';
const logger = Debug('informed:useField'+ '\t');

// TODO figure out if this is bad? 
// https://github.com/facebook/react/issues/14543
function useStateWithGetter(initial) {
  const ref = useRef();
  const [state, setState] = useState(initial);
  ref.current = state;
  const set = (value) => {
    ref.current = value;
    setState(value);
  };
  const get = () => {
    return ref.current;
  };
  return [state, set, get];
}

function useField(field, fieldProps = {}) {
  // Pull props off of field props
  const { 
    validate,
    mask,
    format,
    parse,
    initialValue,
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    maskOnBlur,
    allowEmptyStrings,
    onValueChange,
    notify,
    keepState, 
    maintainCursor,
    debug, 
    type
  } = fieldProps;

  // Initialize state 
  const [value, setVal, getVal] = useStateWithGetter(initialValue != null ? initialValue : undefined);
  const [error, setErr] = useState( validateOnMount ? validate(initialValue) : undefined );
  const [touched, setTouch] = useState();
  const [cursor, setCursor, getCursor] = useStateWithGetter(0);
  const [maskedValue, setMaskedValue ] = useState(value);

  // Grab the form register context
  const updater = useContext(FormRegisterContext);

  // Grab the form state
  const formApi = useFormApi();

  /* ---------------------- Setters ---------------------- */

  // Define set error
  const setError = (val) => { 
    setErr(val);
    updater.setError(field, val);
  };

  // Define set value
  const setValue = (val, e) => {
    logger(`Setting ${field} to ${val}`);
    // Initialize maked value
    let maskedVal = val;
    // Set value to undefined if its an empty string
    if( val === '' && !allowEmptyStrings ){
      val = undefined;
    }
    // Turn string into number for number fields
    if(type === 'number' && val !== undefined ){
      val = +val;
    }
    // Call mask if it was passed
    if(mask && !maskOnBlur){
      maskedVal = mask(val);
      val = mask(val);
    }
    // Call format and parse if they were passed
    if(format && parse){
      val = parse(val);
      maskedVal = format(val);
    }
    // We only need to call validate if the user gave us one
    // and they want us to validate on change
    if (validate && validateOnChange) {
      logger(`Validating after change ${field} ${val}`);
      setError(validate(val, formApi.getValues()));
    }
    // Remember Cursor position!
    if(e && e.target && e.target.selectionStart ){
      setCursor(e.target.selectionStart);
    }

    // Now we update the value
    setVal(val);
    setMaskedValue(maskedVal);
    // If the user passed in onValueChange then call it!
    if( onValueChange ){
      onValueChange(val);
    }    
    // Call the updater
    updater.setValue(field, val);
  };

  // Define set touched
  const setTouched = ( val, reset ) => {
    // We only need to call validate if the user gave us one
    // and they want us to validate on blur
    if (validate && validateOnBlur && !reset ) {
      logger(`Validating after blur ${field} ${getVal()}`);
      setError(validate(getVal(), formApi.getValues()));
    }
    // Call mask if it was passed
    if(mask && maskOnBlur){
      const maskedVal = mask( getVal() );
      // Now we update the value
      setVal(maskedVal);
      setMaskedValue(maskedVal);
      // If the user passed in onValueChange then call it!
      if( onValueChange ){
        onValueChange(maskedVal);
      }    
      // Call the updater
      updater.setValue(field, maskedVal);
    }
    setTouch(val);
    updater.setTouched(field, val);
  };

  // Define reset
  const reset = () => {
    // TODO support numbers
    setValue(initialValue != null ? initialValue : undefined);
    // Setting somthing to undefined will remove it 
    setError(validateOnMount ? validate(initialValue) : undefined);
    setTouched(undefined, true);
  };

  // Define validate
  const fieldValidate = (val) => {
    if( validate ){
      logger(`Field validating ${field} ${val}`);
      setError(validate(val, formApi.getValues()));
    }
  };

  /* ----------------- Field Api && State ----------------- */

  // Build the field api
  const fieldApi = {
    setValue,
    setTouched,
    setError,
    reset, 
    validate: fieldValidate
  };

  // Build the field state
  const fieldState = {
    value,
    error,
    touched,
    maskedValue
  };

  logger('Render', formApi.getFullField(field), fieldState);

  const ref = useRef(null);

  // We want to register and deregister this field when field name changes
  useLayoutEffect(
    () => {
      const fullField = formApi.getFullField(field);
      logger('Register', fullField);
      updater.register(field, fieldState, { field: fullField, fieldApi, fieldState, notify, keepState });

      return () => {
        logger('Deregister', fullField);
        updater.deregister(field);
      };
    },
    // This is VERYYYY!! Important!
    [field]
  );

  // We want to let the controller know of changes on this field when specific props change
  useLayoutEffect(
    () => {
      const fullField = formApi.getFullField(field);
      logger('Update', field);
      updater.update(field, { field: fullField, fieldApi, fieldState, notify, keepState });
    },
    // This is VERYYYY!! Important!
    [validate, validateOnChange, validateOnBlur, onValueChange]
  );

  // Maintain cursor position
  useLayoutEffect(
    () => {
      if ( maintainCursor && ref.current != null && getCursor()) ref.current.selectionEnd = getCursor();
    },
    [value]
  );

  // for debugging
  useLayoutEffect(
    () => {
      if (debug && ref) {
        ref.current.style.border = '5px solid orange';
        setTimeout(() => {
          ref.current.style.borderWidth ='2px';
          ref.current.style.borderStyle = 'inset';
          ref.current.style.borderColor = 'initial';
          ref.current.style.borderImage = 'initial';
        }, 500);
      }
    }
  );

  // This is an awesome optimization!!
  const shouldUpdate = [ ...Object.values(fieldState), ...Object.values(fieldProps), field ];

  const purify = (children, userprops = []) => useMemo(() => children, [ ...shouldUpdate, ...userprops]);

  return { fieldState, fieldApi, purify, ref };

}

export default useField;
