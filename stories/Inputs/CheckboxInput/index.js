import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Checkbox, Debug } from '../../../src';

const CheckboxInput = () => (
  <Form>
    <Checkbox name="authorize" label="Authorize" />
    <button type="submit">Submit</button>
    <Debug values />
  </Form>
);

export default withDocs(readme, CheckboxInput);
