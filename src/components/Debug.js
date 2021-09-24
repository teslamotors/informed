import React from 'react';
import { useFormState } from '../hooks/useFormState';

export const Debug = props => {
  const formState = useFormState();

  let displayState = {};

  if (Object.keys(props).length > 0) {
    Object.keys(props).forEach(key => {
      displayState[key] = formState[key];
    });
  } else {
    displayState = formState;
  }
  return (
    <pre>
      <code>{JSON.stringify(displayState, null, 2)}</code>
    </pre>
  );
};
