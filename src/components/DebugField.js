import React from 'react';
import { useFieldState } from '../hooks/useFieldState';

export const DebugField = ({ name, ...props }) => {
  const fieldState = useFieldState(name);

  let displayState = {};

  if (Object.keys(props).length > 0) {
    Object.keys(props).forEach(key => {
      displayState[key] = fieldState[key];
    });
  } else {
    displayState = fieldState;
  }
  return (
    <pre>
      <code>{JSON.stringify(displayState, null, 2)}</code>
    </pre>
  );
};
