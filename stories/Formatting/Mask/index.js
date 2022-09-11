import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const mask = value => (value != null ? value.toUpperCase() : value);
const parser = value => (value != null ? value.toLowerCase() : value);

const Mask = () => (
  <Form>
    <Input
      name="field1"
      label="Field 1 ( no parser )"
      mask={mask}
      initialValue="hello"
    />
    <Input
      initialValue="hello"
      name="field2"
      label="Field 2 ( with parser )"
      mask={mask}
      parser={parser}
    />
    <button type="submit">Submit</button>
    <Debug values maskedValues />
  </Form>
);

export default withDocs(readme, Mask);
