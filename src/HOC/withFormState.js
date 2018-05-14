import React from 'react'
import { FormContext } from '../Context';

const withFormApi = ( Component ) => React.forwardRef(( props, ref ) => (
  <FormContext.Consumer>
    {( { formState } ) => <Component formState={formState} ref={ref} {...props} />}
  </FormContext.Consumer>
));

export default withFormApi;
