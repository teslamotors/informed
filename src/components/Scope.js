import React, { Component } from 'react';
import { FormContext } from '../Context';

const Scope  = () => (
  <FormContext.Consumer>
    {( { formApi, formState } ) => {
      return <Component fieldApi={buildFieldApi( formApi, props.field )} fieldState={buildFieldState( formApi, props.field )} {...props} />
    }}
  </FormContext.Consumer>
);

export default Scope;
