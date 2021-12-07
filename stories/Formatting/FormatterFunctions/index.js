import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const mask = value => value.toUpperCase();

const formatter = [mask, mask, '-', mask, mask, '-', mask, mask, mask, mask];

const Uppercase = () => (
  <Form>
    <div>
      <Input
        field="uppercase"
        label="Uppercase"
        formatter={formatter}
        initialValue="abcdefg"
      />
      <button type="submit">Submit</button>
      <Debug values maskedValues />
    </div>
  </Form>
);

export default withDocs(readme, Uppercase);
