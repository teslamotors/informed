import { useMemo } from 'react';
import { useFormApi } from './useFormApi';
import { useScope } from './useScope';

/* ----------------------- useFieldApi ----------------------- */
const buildFieldApi = (formApi, name) => {
  return {
    getValue: () => formApi.getValue(name),
    setValue: (value, e) => formApi.setValue(name, value, e),
    getTouched: () => formApi.getTouched(name),
    setTouched: value => formApi.setTouched(name, value),
    getError: () => formApi.getError(name),
    setError: value => formApi.setError(name, value),
    reset: () => formApi.resetField(name),
    validate: () => formApi.validateField(name),
    getDirty: () => formApi.getDirty(name),
    getPristine: () => formApi.getPristine(name),
    getMaskedValue: () => formApi.getMaskedValue(name)
  };
};

export function useFieldApi(n, scoped = true) {
  const formApi = useFormApi();
  const name = scoped ? useScope(n) : n;

  const fieldApi = useMemo(() => buildFieldApi(formApi, name), [name]);
  return fieldApi;
}
