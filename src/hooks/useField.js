import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { FormRegisterContext } from '../Context';
import Debug from 'debug';
const debug = Debug('informed:useField'+ '\t');

function useField(field, fieldProps = {}) {
  const { validate, initialValue } = fieldProps;
  const [value, setVal] = useState(initialValue != null ? initialValue : '');
  const [error, setError] = useState();
  const [touched, setTouched] = useState();
  const { register, deregister, update } = useContext(FormRegisterContext);

  const setValue = val => {
    if (validate) {
      setError(validate(val));
    }
    setVal(val);
  };

  const reset = () => {
    setVal(initialValue != null ? initialValue : '');
    setError(undefined);
    setTouched(undefined);
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
      register(field, fieldState, { ...fieldProps, fieldApi, fieldState });

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

  return { fieldState, fieldApi };
}

export default useField;
