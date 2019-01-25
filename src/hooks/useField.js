import React, { useState, useLayoutEffect, useContext, useMemo } from 'react';
import { FormRegisterContext } from '../Context';
import useFormState from './useFormState';
import Debug from 'debug';
const debug = Debug('informed:useField'+ '\t');

function useField(field, fieldProps = {}) {
  // Pull props off of field props
  const { 
    validate,
    initialValue,
    validateOnChange,
    validateOnBlur,
    onValueChange,
    notify,
    keepState
  } = fieldProps;

  // Initialize state 
  // TODO support numbers
  const [value, setVal] = useState(initialValue != null ? initialValue : '');
  const [error, setErr] = useState();
  const [touched, setTouch] = useState();

  // Grab the form register context
  const updater = useContext(FormRegisterContext);

  // Grab the form state
  const formState = useFormState();

  /* ---------------------- Setters ---------------------- */

  // Define set error
  const setError = (val) => { 
    setErr(val);
    updater.setError(field, val);
  };

  // Define set value
  const setValue = val => {
    // We only need to call validate if the user gave us one
    // and they want us to validate on change
    if (validate && validateOnChange) {
      setError(validate(val, formState.values));
    }
    // Now we update the value
    setVal(val);
    // If the user passed in onValueChange then call it!
    if( onValueChange ){
      onValueChange(val);
    }
    // Call the updater
    updater.setValue(field, val);
  };

  // Define set touched
  const setTouched = val => {
    // We only need to call validate if the user gave us one
    // and they want us to validate on blur
    if (validate && validateOnBlur) {
      setError(validate(value));
    }
    setTouch(val);
    updater.setTouched(field, val);
  };

  // Define reset
  const reset = () => {
    // TODO support numbers
    setValue(initialValue != null ? initialValue : '');
    // Setting somthing to undefined will remove it 
    setError(undefined);
    setTouched(undefined);
  };

  // Define validate
  const fieldValidate = (val) => {
    if( validate ){
      setError(validate(val, formState.values));
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
    touched
  };

  debug('Render', field, fieldState);

  // We want to register and deregister this field when specific props change
  useLayoutEffect(
    () => {
      debug('Register', field);
      updater.register(field, fieldState, { field, fieldApi, fieldState, notify, keepState });

      return () => {
        debug('Deregister', field);
        updater.deregister(field);
      };
    },
    // This is VERYYYY!! Important!
    [field, validate, validateOnChange, validateOnBlur, onValueChange]
  );

  // This is an awesome optimization!!
  const shouldUpdate = [ ...Object.values(fieldState), ...Object.values(fieldProps) ];

  const purify = (children, userprops = []) => useMemo(() => children, [ ...shouldUpdate, ...userprops]);

  return { fieldState, fieldApi, purify };

}

export default useField;
