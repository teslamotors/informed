import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, useFormState } from '../../../src';

const ComponentUsingFormState = () => {
  const formState = useFormState();
  return (
    <pre>
      <code>{JSON.stringify(formState, null, 2)}</code>
    </pre>
  );
};

const UseFormState = () => (
  <Form>
    <Input name="name" label="Name:" />
    <button type="submit">Submit</button>
    <h5>Component using formState:</h5>
    <ComponentUsingFormState />
  </Form>
);

export default withDocs(readme, UseFormState);
