import React from 'react';
import { FormContext } from '../Context';

const withController = Component =>
  React.forwardRef((props, ref) => (
    <FormContext.Consumer>
      {({ controller }) => (
        <Component controller={controller} ref={ref} {...props} />
      )}
    </FormContext.Consumer>
  ));

export default withController;
