import React, { Component } from 'react';
import { FormContext } from '../Context';

const buildScopedContext = ( scope, formApi, formState ) => {
  return {
    formApi: {
      getValue: ( field ) => formApi.getValue(`${scope}.${field}`),
      setValue: ( field, value ) => formApi.setValue(`${scope}.${field}`, value)
    },
    formState
  };
}

const Scope  = ({scope, children}) => (
  <FormContext.Consumer>
    {( { formApi, formState } ) => (
      <FormContext.Provider value={buildScopedContext( scope, formApi, formState )}>
        {children}
      </FormContext.Provider>
    )}
  </FormContext.Consumer>
);

export default Scope;
