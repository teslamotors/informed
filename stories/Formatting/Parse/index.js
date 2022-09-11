import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

// Example 5 = 1 ( i.e a user typed the number ) 10  but we want to store a 2 .. 10 / 5 = 2
const parser = value => (value != null ? value / 5 : value);
const initialize = value => (value != null ? value * 5 : value);

const Mask = () => (
  <Form>
    <Input
      name="field"
      label="5 = 1"
      parser={parser}
      initialValue={2}
      initialize={initialize}
      type="number"
    />
    <button type="submit">Submit</button>
    <Debug values maskedValues />
  </Form>
);

export default withDocs(readme, Mask);

// Example 1 block = 5 cm
// const mask = value => value;
// const parser = value => (value != null ? value / 5 : value);
