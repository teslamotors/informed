import { useMemo } from 'react';
import { useFormApi } from './useFormApi';
import { useScope } from './useScope';

/* ----------------------- useFieldApi ----------------------- */
const buildFieldApi = (formApi, name) => {
  return {
    getValue: () => formApi.getValue(name),
    setValue: (value, e, key) => formApi.setValue(name, value, e, key),
    getTouched: () => formApi.getTouched(name),
    setTouched: (value, e) => formApi.setTouched(name, value, e),
    getError: () => formApi.getError(name),
    setError: value => formApi.setError(name, value),
    getFocused: () => formApi.getFocused(name),
    setFocused: (value, e) => formApi.setFocused(name, value, e),
    getData: () => formApi.getData(name),
    getModified: () => formApi.getModified(name),
    reset: options => formApi.resetField(name, options),
    validate: () => formApi.validateField(name),
    getDirty: () => formApi.getDirty(name),
    getPristine: () => formApi.getPristine(name),
    getMaskedValue: () => formApi.getMaskedValue(name),
    clearValue: () => formApi.clearValue(name),
    setValueQuietly: value => formApi.setValueQuietly(name, value)
  };
};

export function useFieldApi(n, scoped = true) {
  const formApi = useFormApi();
  const name = scoped ? useScope(n) : n;

  const fieldApi = useMemo(() => buildFieldApi(formApi, name), [name]);
  return fieldApi;
}
