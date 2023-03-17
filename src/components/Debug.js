import React, { useEffect } from 'react';
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

  useEffect(
    () => {
      // eslint-disable-next-line
      if (Prism) Prism.highlightAll();
    },
    [displayState]
  );

  return (
    <pre className="language-js">
      <code className="language-js">
        {JSON.stringify(displayState, null, 2)}
      </code>
    </pre>
  );
};
