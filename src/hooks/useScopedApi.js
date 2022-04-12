// eslint-disable-next-line no-unused-vars
import { useMemo } from 'react';
import { useFormApi } from './useFormApi';

const buildScopedFormApi = (scope, formApi) => {
  return {
    getValue: field => formApi.getValue(`${scope}.${field}`),
    setValue: (field, value, e, key) =>
      formApi.setValue(`${scope}.${field}`, value, e, key),
    getTouched: field => formApi.getTouched(`${scope}.${field}`),
    setTouched: (field, value) =>
      formApi.setTouched(`${scope}.${field}`, value),
    getFocused: field => formApi.getFocused(`${scope}.${field}`),
    setFocused: (field, value) =>
      formApi.setFocused(`${scope}.${field}`, value),
    getError: field => formApi.getError(`${scope}.${field}`),
    setError: (field, value) => formApi.setError(`${scope}.${field}`, value),
    getData: field => formApi.getData(`${scope}.${field}`),
    getModified: field => formApi.getModified(`${scope}.${field}`),
    resetField: field => formApi.resetField(`${scope}.${field}`),
    validate: field => formApi.validate(`${scope}.${field}`),
    getDirty: field => formApi.getDirty(`${scope}.${field}`),
    getPristine: field => formApi.getPristine(`${scope}.${field}`),
    getMaskedValue: field => formApi.getMaskedValue(`${scope}.${field}`),
    clearValue: field => formApi.clearValue(`${scope}.${field}`),
    clearError: field => formApi.clearError(`${scope}.${field}`)
  };
};

function useScopedApi(scope) {
  const formApi = useFormApi();

  // VERY important to memoize the builder!
  const scopedFormApi = useMemo(() => buildScopedFormApi(scope, formApi), [
    scope
  ]);

  return scopedFormApi;
}

export { useScopedApi };
