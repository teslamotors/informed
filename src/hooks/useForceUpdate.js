import React from 'react';

/* ----------------------- useForceUpdate ----------------------- */
export const useForceUpdate = () => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  return forceUpdate;
};
