import React from 'react';

import { useFormState } from '../hooks/useFormState';

const FormState = props => {
  const formState = useFormState();

  let displayState = {};

  if (Object.keys(props).length > 0) {
    Object.keys(props).forEach(key => {
      displayState[key] = formState[key];
    });
  } else {
    displayState = formState;
  }

  const {
    pristine,
    dirty,
    invalid,
    values,
    errors,
    touched,
    validating,
    submitting
  } = displayState;
  return (
    <pre>
      <code>
        {JSON.stringify(
          {
            pristine,
            dirty,
            invalid,
            values,
            errors,
            touched,
            validating,
            submitting
          },
          null,
          2
        )}
      </code>
    </pre>
  );
};

export { FormState };
