import { useContext } from 'react';
import { FormStateContext } from '../Context';

/* ----------------------- useFormState ----------------------- */
export function useFormState() {
  const formState = useContext(FormStateContext);
  return formState;
}
