import { useFieldState } from './useFieldState';

/* ----------------------- useScope ----------------------- */
export function useSubState(sub) {
  return useFieldState(sub, false);
}
