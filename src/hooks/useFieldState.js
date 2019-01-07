import React from 'react';
import useFieldApi from './useFieldApi';

const buildFieldState = (formApi) => {
  return {
    value: formApi.getValue(),
    touched: formApi.getTouched(),
    error: formApi.getError(),
  };
};

function useFieldState( field ) {
  const fieldApi = useFieldApi(field);
  const fieldState = buildFieldState(fieldApi);
  return fieldState;
}

export default useFieldState;
