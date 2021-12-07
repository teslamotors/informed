import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const Number = () => (
  <Form>
    <Input name="age" type="number" label="Age:" />
    <button type="submit">Submit</button>
    <Debug values />
  </Form>
);

export default withDocs(readme, Number);
