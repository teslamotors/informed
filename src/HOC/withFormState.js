import React from 'react'
import { FormContext } from '../Context';

const withFormApi = ( Component ) => ( props ) => (
  <FormContext.Consumer>
    {( { formState } ) => <Component formState={formState} {...props} />}
  </FormContext.Consumer>
);

export default withFormApi;
