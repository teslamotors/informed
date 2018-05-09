import React, { Component } from 'react';
import { FormContext } from '../Context';

const buildScopedContext = ( scope, formApi, formState, controller ) => {
  return {
    formApi: {
      getValue: ( field ) => formApi.getValue(`${scope}.${field}`),
      setValue: ( field, value ) => formApi.setValue(`${scope}.${field}`, value),
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
