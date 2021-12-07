import React from 'react';
import readme from './README.md';
import withDocs from '../../utils/withDocs';

import { Form, Input, FormStateAccessor } from '../../../src';

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

const validateForm = values => {
  return values.name === 'Joseph' ? 'Username is already taken!' : undefined;
};

const FormStateExample = () => (
  <Form validate={validateForm}>
    <label>
      First name:
      <Input name="name" validate={validate} />
    </label>
    <button type="submit">Submit</button>
    <label>State:</label>
    <FormStateAccessor>
      {formState => (
        <pre>
          <code>{JSON.stringify(formState, null, 2)}</code>
        </pre>
      )}
    </FormStateAccessor>
  </Form>
);

export default withDocs(readme, FormStateExample);
