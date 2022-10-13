import { useMemo, useRef } from 'react';
import { useInformed } from './useInformed';
// import { Debug } from '../debug';

// const debug = Debug('informed:useInformedApi' + '\t');

/* ----------------------- useFieldState ----------------------- */
export const useInformedApi = () => {
  // Grab informed
  const informed = useInformed();
  const informedRef = useRef();
  informedRef.current = informed;

  const informedApi = useMemo(() => {
    return {
      getFormApi: name => {
        return informedRef.current.getController(name)?.getFormApi();
      }
    };
  }, []);

  return informedApi;
};
