import React, { useRef } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, useFormStateSelector } from '../../../src';

const RenderFormState = () => {
  const input1 = useFormStateSelector(formState => formState.values.input1);
  const renderedRef = useRef([]);

  renderedRef.current = [...renderedRef.current, input1];

  return (
    <pre>
      {renderedRef.current.map(val => `input1 state is now: ${val}`).join('\n')}
    </pre>
  );
};

const UseFormStateProxyExample = () => {
  return (
    <Form>
      <Input name="input1" />
      <Input name="input2" />
      <Input name="input3" />
      <Input name="input4" />
      <RenderFormState />
    </Form>
  );
};

export default withDocs(readme, UseFormStateProxyExample);
