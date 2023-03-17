import React from 'react';
import { useFormState } from '../hooks/useFormState';
import Code from './Code';

export const Debugger = props => {
  const formState = useFormState();

  let displayState = {};

  if (Object.keys(props).length > 0) {
    Object.keys(props).forEach(key => {
      displayState[key] = formState[key];
    });
  } else {
    displayState = formState;
  }
  return <Code input1={JSON.stringify(displayState, null, 2)} />;
};
