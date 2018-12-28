import React from 'react';
import withFormApi from './withFormApi';

const buildFieldApi = (formApi, field) => ({
  getValue: () => formApi.getValue(field),
  setValue: value => formApi.setValue(field, value),
  getTouched: () => formApi.getTouched(field),
  setTouched: value => formApi.setTouched(field, value),
  getError: () => formApi.getError(field),
  setError: value => formApi.setError(field, value),
});

const withFieldApi = field => Component =>
  withFormApi(({ formApi, ...props }) => (
    <Component fieldApi={buildFieldApi(formApi, field)} {...props} />
  ));

export default withFieldApi;
