import React from 'react';
import { FormContext } from '../Context';

const withFormApi = Component =>
  React.forwardRef((props, ref) => (
    <FormContext.Consumer>
      {({ formApi }) => <Component formApi={formApi} ref={ref} {...props} />}
    </FormContext.Consumer>
  ));

export default withFormApi;
