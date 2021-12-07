import { useContext } from 'react';
import { FormControllerContext } from '../Context';

/* ----------------------- useFormController ----------------------- */
export function useFormController() {
  const formController = useContext(FormControllerContext);
  return formController;
}
