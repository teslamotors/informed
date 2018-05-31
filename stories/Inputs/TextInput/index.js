import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text } from '../../../src';

const TextInput = () => (
  <Form id="text-form">
    <label htmlFor="text-name">First name:</label>
    <Text field="name" id="text-name" />
    <button type="submit">
      Submit
    </button>
  </Form>
);

export default withDocs( readme, TextInput );
