import React from 'react'
import { FormContext } from '../Context';

const withFormApi = ( Component ) => ( props ) => (
  <FormContext.Consumer>
    {( { formApi, formState } ) => <Component formApi={formApi} formState={formState} {...props} />}
  </FormContext.Consumer>
);

export default withFormApi;
