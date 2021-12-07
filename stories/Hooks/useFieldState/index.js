import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, useFieldState } from '../../../src';

const ComponentUsingFieldState = ({ name }) => {
  const fieldState = useFieldState(name);
  return (
    <>
      <h5>Component using fieldState: {name}</h5>
      Render: {Math.random()}
      <pre>
        <code>{JSON.stringify(fieldState, null, 2)}</code>
      </pre>
    </>
  );
};

const UseFieldState = () => (
  <Form>
    <Input name="name" label="Name:" initialValue="Joe" />
    <Input field="age" label="Age:" type="number" />
    <button type="submit">Submit</button>
    <ComponentUsingFieldState name="name" />
    <ComponentUsingFieldState name="age" />
  </Form>
);

export default withDocs(readme, UseFieldState);
