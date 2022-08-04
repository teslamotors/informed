import React, { useRef, useState } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, useFormStateSelector } from '../../../src';

const RenderFormState = ({ selector }) => {
  const input1 = useFormStateSelector(selector);
  const renderedRef = useRef([]);

  renderedRef.current = [...renderedRef.current, input1];

  return (
    <pre>
      {renderedRef.current.map(val => `input1 state is now: ${val}`).join('\n')}
    </pre>
  );
};

const UseFormStateProxyExample = () => {
  const [selector, setSelector] = useState(() => formState =>
    formState.values.input1
  );

  const setDifferentSelector = () => {
    setSelector(() => formState => formState.values.input2);
  };

  return (
    <Form>
      <Input name="input1" />
      <Input name="input2" />
      <Input name="input3" />
      <Input name="input4" />
      {/* <button type='button' onClick={setDifferentSelector}>set different selector</button> */}
      <RenderFormState selector={selector} />
    </Form>
  );
};

export default withDocs(readme, UseFormStateProxyExample);
