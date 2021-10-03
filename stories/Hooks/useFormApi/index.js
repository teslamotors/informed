import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, useFormApi } from '../../../src';

const ComponentUsingFormApi = () => {
  const formApi = useFormApi();
  return (
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
  );
};

const UseFormApi = () => (
  <Form>
    <div>
      <Input name="name" label="Name:" />
      <button type="submit">Submit</button>
      <h5>Component using formApi:</h5>
      <ComponentUsingFormApi />
    </div>
  </Form>
);

export default withDocs(readme, UseFormApi);
