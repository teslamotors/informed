import React, { useContext } from 'react';
import { FormContext } from '../Context';

function useFormState() {
  const { formState } = useContext(FormContext);
  return formState;
}

export default useFormState;
