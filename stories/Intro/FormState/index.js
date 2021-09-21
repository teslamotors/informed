import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Input, useFormState } from '../../../src';

const FormState = () => {
  const formState = useFormState();

  return (
    <pre>
      <code>{JSON.stringify(formState, null, 2)}</code>
    </pre>
  );
};

const Example = () => {
  return (
    <Form>
      <Input field="name" label="First Name" />
      <button type="submit">Submit</button>
      <FormState />
    </Form>
  );
};

export default withDocs(readme, Example);
