import React from 'react';
import readme from './README.md';
import withDocs from '../../utils/withDocs';

import { Form, Text } from '../../../src';

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

const validateForm = values => {
  return values.name === 'Joseph' ? 'Username is already taken!' : undefined;
};

const FormState = () => (
  <Form id="form-state-form" validate={validateForm}>
    {({ formState }) => (
      <div>
        <label>First name:<Text field="name" validate={validate} /></label>
        <button type="submit">Submit</button>
        <label>Values:</label>
        <code>{JSON.stringify(formState.values)}</code>
        <label>Touched:</label>
        <code>{JSON.stringify(formState.touched)}</code>
        <label>Errors:</label>
        <code>{JSON.stringify(formState.errors)}</code>
        <label>Invalid:</label>
        <code>{JSON.stringify(formState.invalid)}</code>
        <label>Pristine:</label>
        <code>{JSON.stringify(formState.pristine)}</code>
        <label>Dirty:</label>
        <code>{JSON.stringify(formState.dirty)}</code>
        <label>Submits:</label>
        <code>{formState.submits}</code>
        <label>Error:</label>
        <code>{formState.error}</code>
      </div>
    )}
  </Form>
);

export default withDocs(readme, FormState);
