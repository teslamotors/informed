import React, { useMemo } from 'react';
import useFormApi from './useFormApi';

const buildFieldApi = (formApi, field) => {
  return { 
    getValue: () => formApi.getValue(field),
    setValue: value => formApi.setValue(field, value),
    getTouched: () => formApi.getTouched(field),
    setTouched: value => formApi.setTouched(field, value),
    getInitial: () => formApi.getInitial(field),
    getError: () => formApi.getError(field),
    setError: value => formApi.setError(field, value),
  };
};

function useFieldApi( field ) {
  const formApi = useFormApi();
  const fieldApi = useMemo( () => buildFieldApi( formApi, field), [field] );
  return fieldApi;
}

export default useFieldApi;
