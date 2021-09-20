import { useContext } from 'react';
import { FormApiContext } from '../Context';

function useFormApi() {
  const formApi = useContext(FormApiContext);
  return formApi;
}

export { useFormApi };
