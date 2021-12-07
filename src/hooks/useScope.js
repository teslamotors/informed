import { useContext } from 'react';
import { ScopeContext } from '../Context';

/* ----------------------- useScope ----------------------- */
export function useScope(name) {
  const scope = useContext(ScopeContext);

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
}
