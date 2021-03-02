import React from 'react';
import readme from './README.md';
import withDocs from '../../utils/withDocs';

import { Form, Text, FormState } from '../../../src';

const FormApi = () => (
  <Form id="form-api-form">
    {({ formApi }) => (
      <div>
        {/* <FormState /> */}
        <label htmlFor="form-state-name">First name:</label>
        <Text field="name" id="form-api-name" />
        <button type="button" onClick={() => formApi.setValue('name', 'Joe')}>
          Set Name to "Joe"
        </button>
        <button type="button" onClick={() => formApi.setValue('name', 'Kevin')}>
          Set Name to "Kevin"
        </button>
        <button type="button" onClick={() => formApi.reset()}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </div>
    )}
  </Form>
);

export default withDocs(readme, FormApi);
