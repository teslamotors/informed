import React from 'react';

import useFormState from '../hooks/useFormState';

const FormState = () => {
  const formState = useFormState();
  const { pristine, dirty, invalid, values, errors, touched } = formState;
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
            touched
          },
          null,
          2
        )}
      </code>
    </pre>
  );
};

export default FormState;
