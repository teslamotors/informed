import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';
import Code from '../../utils/Code';

import { Form, Text } from '../../../src';

const TextInput = () => (
  <Form>
    {({ formState }) => (
      <div>
        <label>
          First name:
          <Text field="name" />
        </label>
        <button type="submit">Submit</button>
        <Code language="language-js">
          {JSON.stringify(formState.values, null, 2)}
        </Code>
      </div>
    )}
  </Form>
);

export default withDocs(readme, TextInput);
