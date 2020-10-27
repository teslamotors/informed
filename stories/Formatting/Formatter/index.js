import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text } from '../../../src';

const formatter = [
  '+',
  '1',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

const parser = value => {
  return value.replace('+1 ', '').replace(/-/g, '');
};

const FormatParse = () => (
  <Form>
    <div>
      <label>
        Phone Number:
        <Text field="phone" formatter={formatter} parser={parser} maintainCursor initialValue="1231231234"/>
      </label>
      <button type="submit">Submit</button>
      <FormState />
    </div>
  </Form>
);

export default withDocs(readme, FormatParse);
