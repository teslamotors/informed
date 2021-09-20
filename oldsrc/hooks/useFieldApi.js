// eslint-disable-next-line no-unused-vars
import { useMemo } from 'react';
import { useFormApi } from './useFormApi';

const buildFieldApi = (formApi, field) => {
  return {
    // TODO refactor to use field api from updater.. need to make sure this
    // will be stable
    getValue: () => formApi.getValue(field),
    setValue: value => formApi.setValue(field, value),
    getTouched: () => formApi.getTouched(field),
    setTouched: value => formApi.setTouched(field, value),
    getError: () => formApi.getError(field),
    setError: value => formApi.setError(field, value),
    reset: () => formApi.resetField(field),
    validate: () => formApi.validateField(field),
    exists: () => formApi.fieldExists(field),
    getDirty: () => formApi.getDirty(field),
    getPristine: () => formApi.getPristine(field),
    getFieldState: () => formApi.getField(field).fieldApi.getFieldState()
  };
};

function useFieldApi(field) {
  const formApi = useFormApi();

  const fieldApi = useMemo(() => buildFieldApi(formApi, field), [field]);
  return fieldApi;
}

export { useFieldApi };
