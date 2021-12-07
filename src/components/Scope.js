// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ScopeContext } from '../Context';

export const Scope = ({ scope, children }) => {
  // Name might be scoped
  const parentScope = useContext(ScopeContext);

  let newScope;

  // Example:
  // parentScope = undefined
  // scope = father
  // ==> father
  if (!parentScope) {
    newScope = scope;
  }
  // Example:
  // parentScope = father
  // scope = bestFriend
  // ==> father.bestFriend
  else {
    newScope = `${parentScope}.${scope}`;
  }

  return (
    <ScopeContext.Provider value={newScope}>{children}</ScopeContext.Provider>
  );
};
