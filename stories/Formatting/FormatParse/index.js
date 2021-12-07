import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const format = value => (value != null ? `$${value}` : value);
const parse = value => (value != null ? value.replace('$', '') : value);

const FormatParse = () => (
  <Form>
    <div>
      <label>
        First name:
        <Input field="name" format={format} parse={parse} />
      </label>
      <button type="submit">Submit</button>
      <Debug />
    </div>
  </Form>
);

export default withDocs(readme, FormatParse);
