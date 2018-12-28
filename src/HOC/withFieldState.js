import React from 'react';
import withFormApi from './withFormApi';

const buildFieldState = (formApi, field) => {
  return {
    value: formApi.getValue(field),
    touched: formApi.getTouched(field),
    error: formApi.getError(field),
  };
};

const withFieldState = field => Component =>
  withFormApi(({ formApi, ...props }) => (
    <Component fieldState={buildFieldState(formApi, field)} {...props} />
  ));

export default withFieldState;