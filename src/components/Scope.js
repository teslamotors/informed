import React, { useContext } from 'react';
import { FormRegisterContext, FormContext } from '../Context';
import useFormApi from '../hooks/useFormApi';
import useFormState from '../hooks/useFormState';

const buildScopedFormApi = ( scope, formApi ) => {
  return {
    ...formApi,
    getValue: field => formApi.getValue(`${scope}.${field}`),
    getTouched: field => formApi.getTouched(`${scope}.${field}`),
    getError: field => formApi.getError(`${scope}.${field}`),
    setValue: (field, value) => formApi.setValue(`${scope}.${field}`, value),
    setTouched: (field, value) => formApi.setTouched(`${scope}.${field}`, value),
    setError: (field, value) => formApi.setError(`${scope}.${field}`, value),
  }; 
};

const buildScopedRegister = ( scope, formRegister ) => {

  const { register, deregister, update } = formRegister;

  return {
    register: ( field, ...args ) => register(`${scope}.${field}`, ...args),
    deregister: ( field, ...args ) => deregister(`${scope}.${field}`, ...args),
    update: ( field, ...args ) => update(`${scope}.${field}`, ...args),
  }; 
};

const Scope = ({scope, children}) => {

  const formRegister = useContext(FormRegisterContext);
  const formApi = useFormApi();
  const formState = useFormState();

  const scopedFormApi = buildScopedFormApi( scope, formApi );
  const scopedRegister = buildScopedRegister( scope, formRegister );

  const formContext = {
    formState, 
    formApi: scopedFormApi
  };

  return (
    <FormRegisterContext.Provider value={scopedRegister}>
      <FormContext.Provider value={formContext}>
        {children}
      </FormContext.Provider>
    </FormRegisterContext.Provider>
  );

};

export default Scope;
