import React from 'react';
import readme from './README.md';
import withDocs from '../../utils/withDocs';

import { Form, Text } from '../../../src';

const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : null;
}

const FormState = () => (
  <Form id="form-state-form">
    {({ formState }) => (
      <div>
        <label htmlFor="form-state-name">First name:</label>
        <Text field="name" id="form-state-name" validate={validate} />
        <button type="submit">
          Submit
        </button>
        <label>Values:</label>
        <code>
          {JSON.stringify(formState.values)}
        </code>
        <label>Touched:</label>
        <code>
          {JSON.stringify(formState.touched)}
        </code>
        <label>Errors:</label>
        <code>
          {JSON.stringify(formState.errors)}
        </code>
        <label>Async Errors:</label>
        <code>
          {JSON.stringify(formState.asyncErrors)}
        </code>
        <label>Invalid:</label>
        <code>
          {JSON.stringify(formState.invalid)}
        </code>
        <label>Pristine:</label>
        <code>
          {JSON.stringify(formState.pristine)}
        </code>
        <label>Dirty:</label>
        <code>
          {JSON.stringify(formState.dirty)}
        </code>
      </div>
    )}
  </Form>
);

export default withDocs( readme, FormState );
