import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug, DebugField } from '../../../src';

const DebugExample = () => (
  <Form>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 2, marginRight: '2rem' }}>
        <Input name="name" label="Name:" />
        <button type="submit">Submit</button>
      </div>
      <div style={{ flex: 2, marginLeft: '2rem' }}>
        <Debug />
      </div>
      <div style={{ flex: 2, marginLeft: '2rem' }}>
        <DebugField name="name" />
      </div>
    </div>
  </Form>
);

export default withDocs(readme, DebugExample);
