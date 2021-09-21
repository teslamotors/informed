import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Input } from '../../../src';

const Basic = () => (
  <div>
    <Form id="basic-form">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <Input field="name" label="First name:" />
          <button type="submit">Submit</button>
        </div>
        <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
          <FormState values />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, Basic);
