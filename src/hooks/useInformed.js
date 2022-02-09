import { useContext } from 'react';
import { InformedContext } from '../Context';

/* ----------------------- useInformed ----------------------- */
export function useInformed() {
  return useContext(InformedContext);
}
