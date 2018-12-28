import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { FormRegisterContext } from '../Context';

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

  const fieldApi = {
    setValue,
    setTouched,
    setError
  };

  const fieldState = {
    value,
    error,
    touched
  };

  console.log('Render', field, fieldState);

  useLayoutEffect(
    () => {
      console.log('Register', field);
      register(field, fieldState, { ...fieldProps, fieldApi, fieldState });

      return () => {
        console.log('Deregister', field);
        deregister(field);
      };
    },
    // This is VERYYYY!! Important!
    [field, validate]
  );

  useLayoutEffect(
    () => {
      console.log('Update', field, fieldState);
      update(field, fieldState);
    },
    // This is VERYYYY!! Important!
    [value, error, touched]
  );

  return { fieldState, fieldApi };
}

export default useField;
