import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, Text, useFormState } from '../../../src';

const FormState = () => {
  const formState = useFormState();
  return (
    <Code language="language-js">
      {JSON.stringify(formState.values, null, 2)}
    </Code>
  );
};

const Number = () => (
  <Form>
    <div>
      <label>
        Age:
        <Text field="age" type="number" />
      </label>
      <button type="submit">Submit</button>
      <FormState />
    </div>
  </Form>
);

export default withDocs(readme, Number);
