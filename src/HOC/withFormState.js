import React from 'react';
import { FormStateContext } from '../Context';

const withFormState = Component =>
  React.forwardRef((props, ref) => (
    <FormStateContext.Consumer>
      {(formState) => (
        <Component formState={formState} ref={ref} {...props} />
      )}
    </FormStateContext.Consumer>
  ));

export default withFormState;
