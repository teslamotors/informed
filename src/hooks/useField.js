import React, { useState, useEffect, useLayoutEffect, useContext, useMemo } from 'react';
import { FormRegisterContext } from '../Context';
import Debug from 'debug';
const debug = Debug('informed:useField'+ '\t');

function useField(field, fieldProps = {}) {
  const { validate, initialValue } = fieldProps;
  const [value, setVal] = useState(initialValue != null ? initialValue : '');
  const [error, setError] = useState();
  const [touched, setTouch] = useState();
  const { register, deregister, update } = useContext(FormRegisterContext);

  const setValue = val => {
    if (validate) {
      setError(validate(val));
    }
    setVal(val);
  };

  const setTouched = val => {
    if (validate) {
      setError(validate(val));
    }
    setTouch(val);
  };

  const reset = () => {
    setVal(initialValue != null ? initialValue : '');
    setError(undefined);
    setTouch(undefined);
  };

  const fieldApi = {
    setValue,
    setTouched,
    setError,
    reset
  };

  const fieldState = {
    value,
    error,
    touched
  };

  debug('Render', field, fieldState);

  useLayoutEffect(
    () => {
      debug('Register', field);
      register(field, fieldState, { field, ...fieldProps, fieldApi, fieldState });

      return () => {
        debug('Deregister', field);
        deregister(field);
      };
    },
    // This is VERYYYY!! Important!
    [field, validate]
  );

  useLayoutEffect(
    () => {
      debug('Update', field, fieldState);
      update(field, fieldState);
    },
    // This is VERYYYY!! Important!
    [value, error, touched]
  );

  // This is an awesome optimization!!
  const shouldUpdate = [ ...Object.values(fieldState), ...Object.values(fieldProps) ];

  const purify = (children, userprops = []) => useMemo(() => children, [ ...shouldUpdate, ...userprops]);

  return { fieldState, fieldApi, purify };

}

export default useField;
