import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Input, useFormState, Debug } from '../../../src';

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
      <Input name="name" label="First Name" />
      <button type="submit">Submit</button>
      <Debug />
    </Form>
  );
};

export default withDocs(readme, Example);
