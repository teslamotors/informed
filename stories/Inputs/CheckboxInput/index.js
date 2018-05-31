import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Checkbox } from '../../../src';

const CheckboxInput = () => (
  <Form id="checkbox-form">
    <label htmlFor="checkbox-authorize">Authorize</label>
    <Checkbox field="authorize" id="checkbox-authorize" />
    <button type="submit">
      Submit
    </button>
  </Form>
);

export default withDocs( readme, CheckboxInput );
