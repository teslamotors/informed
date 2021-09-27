import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const DebugExample = () => (
  <Form>
    <Input name="name" label="Name:" />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default withDocs(readme, DebugExample);
