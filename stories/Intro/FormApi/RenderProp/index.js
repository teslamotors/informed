import React from 'react';
import withDocs from '../../../utils/withDocs';
import readme from './README.md';
import { Form, Input } from '../../../../src';

const FormApi = () => (
  <Form>
    {({ formApi }) => (
      <div>
        <Input name="name" label="First Name:" />
        <button
          type="button"
          onClick={() =>
            formApi.setValue(
              'name',
              Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER))
            )
          }>
          Random
        </button>
        <button type="submit">Submit</button>
      </div>
    )}
  </Form>
);

export default withDocs(readme, FormApi);
