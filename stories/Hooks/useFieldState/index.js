import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text, useFieldState } from '../../../src';

const ComponentUsingFieldState = () => {
  const fieldState = useFieldState('name');
  return (
    <pre>
      <code>{JSON.stringify(fieldState, null, 2)}</code>
    </pre>
  );
};

const UseFieldState = () => (
  <Form>
    <label>Name:<Text field="name"/></label>
    <button type="submit">Submit</button>
    <h5>Component using fieldState:</h5>
    <ComponentUsingFieldState />
  </Form>
);

export default withDocs(readme, UseFieldState);
