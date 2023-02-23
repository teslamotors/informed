import { useContext } from 'react';
import { ScopeContext } from '../Context';
import { useFieldState } from './useFieldState';

/* ----------------------- useScope ----------------------- */
export function useScopedState() {
  const scope = useContext(ScopeContext);
  return useFieldState(scope);
}
