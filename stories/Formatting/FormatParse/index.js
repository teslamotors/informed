import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text } from '../../../src';

const format = value => value != null ? `$${value}` : value;
const parse = value => value != null ? value.replace('$','') : value;

const FormatParse = () => (
  <Form>
    <div>
      <label>
        First name:
        <Text field="name" format={format} parse={parse} />
      </label>
      <button type="submit">Submit</button>
      <FormState />
    </div>
  </Form>
);

export default withDocs(readme, FormatParse);
