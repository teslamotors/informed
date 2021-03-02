// eslint-disable-next-line no-unused-vars
import React from 'react';
import useFieldApi from './useFieldApi';
import useFormState from './useFormState';

const buildFieldState = fieldApi => {
  return {
    value: fieldApi.getValue(),
    touched: fieldApi.getTouched(),
    error: fieldApi.getError(),
    dirty: fieldApi.getDirty(),
    pristine: fieldApi.getPristine()
  };
};

function useFieldState(field) {
  const fieldApi = useFieldApi(field);
  // TODO find better way to get this to rerender

  // eslint-disable-next-line no-unused-vars
  const formState = useFormState();
  // The above is a temp hack
  const fieldState = buildFieldState(fieldApi);
  return fieldState;
}

export default useFieldState;
