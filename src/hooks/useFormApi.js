import React, { useContext } from 'react';
import { FormContext } from '../Context';

function useFormApi() {
  const { formApi } = useContext(FormContext);
  return formApi;
}

export default useFormApi;
