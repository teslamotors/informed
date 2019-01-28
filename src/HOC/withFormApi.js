import React from 'react';
import { FormApiContext } from '../Context';

const withFormApi = Component =>
  React.forwardRef((props, ref) => (
    <FormApiContext.Consumer>
      {(formApi) => <Component formApi={formApi} ref={ref} {...props} />}
    </FormApiContext.Consumer>
  ));

export default withFormApi;
