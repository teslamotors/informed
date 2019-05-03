import React, { useMemo, useContext } from 'react';
import useFormApi from './useFormApi';
import { FormRegisterContext } from '../Context';

const buildFieldApi = (formApi, field, updater) => {

  const fieldApi =  updater.getField(field).fieldApi;

  return { 
    // TODO refactor to use field api from updater.. need to make sure this 
    // will be stable
    getValue: () => formApi.getValue(field),
    setValue: value => formApi.setValue(field, value),
    getTouched: () => formApi.getTouched(field),
    setTouched: value => formApi.setTouched(field, value),
    getError: () => formApi.getError(field),
    setError: value => formApi.setError(field, value),
    reset: fieldApi.reset,
    validate: fieldApi.validate
  };
};

function useFieldApi( field ) {
  const formApi = useFormApi();

  const updater = useContext(FormRegisterContext);

  const fieldApi = useMemo( () => buildFieldApi( formApi, field, updater ), [field] );
  return fieldApi;
}

export default useFieldApi;
