import React from 'react';
import Code from './Code';

import { useFormState } from '../../src';

const FormState = () => {
  const formState = useFormState();
  return (
    <>
      <label>Values:</label>
      <Code language="language-js">
        {JSON.stringify(formState.values, null, 2)}
      </Code>
      <label>Touched:</label>
      <Code language="language-js">
        {JSON.stringify(formState.touched, null, 2)}
      </Code>
    </>
  );
};

export default FormState;