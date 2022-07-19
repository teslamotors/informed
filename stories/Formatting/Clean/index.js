import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const clean = value => value.replace(/[!@#$%^&*()]/g, '');

const Uppercase = () => (
  <Form>
    <div>
      <Input
        field="name"
        label="Name"
        initialValue="Joe!@#$%^*()Puzzo"
        clean={clean}
      />
      <button type="submit">Submit</button>
      <Debug values maskedValues />
    </div>
  </Form>
);

export default withDocs(readme, Uppercase);
