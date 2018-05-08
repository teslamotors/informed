import React from 'react'
import { FormContext } from '../Context';

const buildFieldApi = ( formApi, field ) => ({
    getValue: () => formApi.getValue(field),
    setValue: (value) => {
      formApi.setValue(field, value)
    }
  }
);

const buildFieldState = ( formApi, field ) => {
  return {
    value: formApi.getValue(field)
  }
};

const withFieldApi = ( field ) => ( Component ) => ( props ) => (
  <FormContext.Consumer>
    {( { formApi } ) => {
      return <Component fieldApi={buildFieldApi( formApi, field )} {...props} />
    }}
  </FormContext.Consumer>
);

const withFieldState = ( field ) => ( Component ) => ( props ) => (
  <FormContext.Consumer>
    {( { formState } ) => {
      return <Component fieldState={buildFieldState( formApi, field )} {...props} />
    }}
  </FormContext.Consumer>
);

const bindToField = ( Component ) => ( props ) => (
  <FormContext.Consumer>
    {( { formApi, formState } ) => {
      return <Component fieldApi={buildFieldApi( formApi, props.field )} fieldState={buildFieldState( formApi, props.field )} {...props} />
    }}
  </FormContext.Consumer>
)

export {
  withFieldApi,
  withFieldState,
  bindToField
}
