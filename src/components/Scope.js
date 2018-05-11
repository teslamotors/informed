import React, { Component } from 'react';
import { FormContext } from '../Context';

const buildScopedContext = ( scope, formApi, formState, controller ) => {
  return {
    formApi: {
      getValue: ( field ) => formApi.getValue(`${scope}.${field}`),
      setValue: ( field, value ) => formApi.setValue(`${scope}.${field}`, value),
      getTouched: ( field ) => formApi.getTouched(`${scope}.${field}`),
      setTouched: ( field, value ) => formApi.setTouched(`${scope}.${field}`, value),
      getError: ( field ) => formApi.getError(`${scope}.${field}`),
      setError: ( field, value ) => formApi.setError(`${scope}.${field}`, value),
      getFullField: ( field ) => `${scope}.${field}`
    },
    formState,
    controller
  };
}

const Scope  = ({scope, children}) => (
  <FormContext.Consumer>
    {( { formApi, formState, controller } ) => (
      <FormContext.Provider value={buildScopedContext( scope, formApi, formState, controller )}>
        {children}
      </FormContext.Provider>
    )}
  </FormContext.Consumer>
);

export default Scope;
