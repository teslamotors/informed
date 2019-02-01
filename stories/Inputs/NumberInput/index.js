import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text } from '../../../src';

const Number = () => (
  <Form>
    <div>
      <label>
        Age:
        <Text field="age" type="number" />
      </label>
      <button type="submit">Submit</button>
      <FormState />
    </div>
  </Form>
);

export default withDocs(readme, Number);
