import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text } from '../../../src';

const mask = value => value.toUpperCase();

const formatter = [mask, mask, '-', mask, mask, '-', mask, mask, mask, mask];

const FormatParse = () => (
  <Form>
    <div>
      <label>
        Phone Number:
        <Text
          field="phone"
          formatter={formatter}
          maintainCursor
          initialValue="abcdefg"
        />
      </label>
      <button type="submit">Submit</button>
      <FormState />
    </div>
  </Form>
);

export default withDocs(readme, FormatParse);
