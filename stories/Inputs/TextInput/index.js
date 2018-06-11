import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, Text } from '../../../src';

const TextInput = () => (
  <Form id="text-form">
    {({ formState }) => (
      <div>
        <label htmlFor="text-name">First name:</label>
        <Text field="name" id="text-name" />
        <button type="submit">
          Submit
        </button>
        <Code language="language-js">
          {JSON.stringify(formState.values, null, 2)}
        </Code>
      </div>
    )}
  </Form>
);

export default withDocs( readme, TextInput );
