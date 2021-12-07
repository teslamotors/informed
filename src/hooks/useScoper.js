import { useCallback, useContext } from 'react';
import { ScopeContext } from '../Context';

/* ----------------------- useScoper ----------------------- */
// This hook will return a scoper function!
export function useScoper() {
  const scope = useContext(ScopeContext);

  const scoper = useCallback(
    name => {
      // Example
      // scope = "friends[0]"
      // name  = "friends[0]"
      // return "friends[0]"
      if (scope === name) {
        return name;
      }

      // Example
      // scope = "friends[0]"
      // name  = "name"
      // return "friends[0].name"
      if (scope && name) {
        return `${scope}.${name}`;
      }
      return name;
    },
    [scope]
  );

  return scoper;
}
