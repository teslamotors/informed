import React from 'react';

import useFormState from '../hooks/useFormState';

const FormState = () => {
  const formState = useFormState();
  return (
    <pre>
      <code>
        {JSON.stringify(formState, null, 2)}
      </code>
    </pre>

  );
};

export default FormState;