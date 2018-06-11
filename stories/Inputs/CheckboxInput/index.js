import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, Checkbox } from '../../../src';

const CheckboxInput = () => (
  <Form id="checkbox-form">
    {({ formState }) => (
      <div>
        <label htmlFor="checkbox-authorize">Authorize</label>
        <Checkbox field="authorize" id="checkbox-authorize" />
        <button type="submit">
          Submit
        </button>
        <Code language="language-js">
          {JSON.stringify(formState.values, null, 2)}
        </Code>
      </div>
    )}
  </Form>
);

export default withDocs( readme, CheckboxInput );
