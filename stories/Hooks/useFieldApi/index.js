import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, useFieldApi } from '../../../src';

const ComponentUsingFieldApi = () => {
  const fieldApi = useFieldApi('name');
  return (
    <>
      <button
        type="button"
        onClick={() =>
          fieldApi.setValue(
            Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER))
          )
        }>
        Random
      </button>
      <button type="button" onClick={() => fieldApi.reset()}>
        Reset
      </button>
    </>
  );
};

const UseFieldApi = () => (
  <Form>
    <Input name="name" label="Name:" initialValue="Joe" />
    <button type="submit">Submit</button>
    <h5>Component using fieldApi:</h5>
    <ComponentUsingFieldApi />
  </Form>
);

export default withDocs(readme, UseFieldApi);
