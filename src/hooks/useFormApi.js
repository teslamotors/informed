import { useContext } from 'react';
import { FormApiContext } from '../Context';

/* ----------------------- useFormApi ----------------------- */
export function useFormApi() {
  const formApi = useContext(FormApiContext);
  return formApi;
}
