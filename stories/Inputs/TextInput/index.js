import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text } from '../../../src';

//const mask = value => value.toUpperCase();

// const format = value => `$${value}`;
// const parse = value => value.replace('$','');

const TextInput = () => (
  <Form id="text-form">
    <div>
      <label>First name:<Text field="name"/></label>
      <button type="submit">Submit</button>
      <FormState />
    </div>
  </Form>
);

export default withDocs(readme, TextInput);
