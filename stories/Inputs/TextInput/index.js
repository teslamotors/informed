import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const InputExample = () => (
  <Form>
    <Input name="name" label="First name:" />
    <button type="submit">Submit</button>
    <Debug values />
  </Form>
);

export default withDocs(readme, InputExample);
