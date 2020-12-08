import React, { useMemo } from 'react';
import useFormApi from './useFormApi';

const buildScopedFormApi = (scope, formApi) => {
  return {
    ...formApi,
    getValue: field => formApi.getValue(`${scope}.${field}`),
    getTouched: field => formApi.getTouched(`${scope}.${field}`),
    getError: field => formApi.getError(`${scope}.${field}`),
    setValue: (field, value) => formApi.setValue(`${scope}.${field}`, value),
    setTouched: (field, value) => formApi.setTouched(`${scope}.${field}`, value),
    setError: (field, value) => formApi.setError(`${scope}.${field}`, value),
    getInitialValue: field => formApi.getInitialValue(`${scope}.${field}`),
    getFullField: field => `${formApi.getFullField(scope)}.${field}`
  };
};

function useScopedApi( scope ) {

  const formApi = useFormApi();

  // VERY important to memoize the builder!
  const scopedFormApi = useMemo(() => buildScopedFormApi(scope, formApi), [scope]);

  return scopedFormApi;
}

export default useScopedApi;
