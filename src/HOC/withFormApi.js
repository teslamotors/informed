import React from 'react'
import { FormContext } from '../Context';

const withFormApi = ( Component ) => ( props ) => (
  <FormContext.Consumer>
    {( formApi ) => <Component formApi={formApi} {...props} />}
  </FormContext.Consumer>
);

export default withFormApi;
