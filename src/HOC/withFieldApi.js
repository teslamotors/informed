import React from 'react'
import { FormContext } from '../Context';

const buildFieldApi = ( formApi, field ) => ({
    getValue: () => formApi.getValue(field),
    setValue: (value) => {
      //console.log(value);
      formApi.setValue(field, value)
    }
  }
);

const buildFieldState = ( formApi, field ) => {
  console.log("BUILDING STATE");
  return {
    value: formApi.getValue(field)
  }
};

const withFieldApi = ( field ) => ( Component ) => ( props ) => (
  <FormContext.Consumer>
    {( { formApi, formState } ) => {
      console.log("FORMSTATE", formState);
      return <Component fieldApi={buildFieldApi( formApi, field )} fieldState={buildFieldState( formApi, field )} {...props} />
    }}
  </FormContext.Consumer>
);

const bindToField = ( Component ) => ( props ) => (
  <FormContext.Consumer>
    {( { formApi, formState } ) => {
      console.log("FORMSTATE", formState);
      return <Component fieldApi={buildFieldApi( formApi, props.field )} fieldState={buildFieldState( formApi, props.field )} {...props} />
    }}
  </FormContext.Consumer>
)

export default withFieldApi;
export {
  bindToField
}
