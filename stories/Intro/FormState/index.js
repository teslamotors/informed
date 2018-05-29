import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Text } from '../../../src';

const FormState = () => (
  <Form id="state-form">
    {({ formState }) => (
      <div>
        <label htmlFor="state-name">First name:</label>
        <Text field="name" id="state-name" />
        <button type="submit">
          Submit
        </button>
        <label>Values:</label>
        <code>
          {JSON.stringify(formState.values, null, 2)}
        </code>
        <label>Touched:</label>
        <code>
          {JSON.stringify(formState.touched, null, 2)}
        </code>
      </div>
    )}
  </Form>
);

export default withDocs( readme, FormState );
