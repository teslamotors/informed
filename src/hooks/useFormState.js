import React, { useContext } from 'react';
import { FormStateContext } from '../Context';

function useFormState() {
  const formState = useContext(FormStateContext);
  return formState;
}

export default useFormState;
