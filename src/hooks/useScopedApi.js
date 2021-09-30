// eslint-disable-next-line no-unused-vars
import { useMemo } from 'react';
import { useFormApi } from './useFormApi';

const buildScopedFormApi = (scope, formApi) => {
  return {
    getValue: field => formApi.getValue(`${scope}.${field}`),
    setValue: (field, value) => formApi.setValue(`${scope}.${field}`, value),
    getTouched: field => formApi.getTouched(`${scope}.${field}`),
    setTouched: (field, value) =>
      formApi.setTouched(`${scope}.${field}`, value),
    getError: field => formApi.getError(`${scope}.${field}`),
    setError: (field, value) => formApi.setError(`${scope}.${field}`, value),
    // reset: field => formApi.reset(`${scope}.${field}`), // Specifically did NOT add this as it would clobber array fields reset
    validate: field => formApi.validate(`${scope}.${field}`),
    getDirty: field => formApi.getDirty(`${scope}.${field}`),
    getPristine: field => formApi.getPristine(`${scope}.${field}`),
    getMaskedValue: field => formApi.getMaskedValue(`${scope}.${field}`)
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
