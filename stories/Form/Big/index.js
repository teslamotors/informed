import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text, useFormApi, FormState } from '../../../src';

const MyButton = () => {
  const formApi = useFormApi();
  return (
    <button type="button" onClick={formApi.reset}>
      Reset
    </button>
  );
};

const Big = () => (
  <Form>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <MyButton />
        {Array.from(Array(250)).map((_, i) => (
          <>
            <label key={`big-${i}`}>
              First name:
              <Text field={`field-${i}`} />
            </label>
          </>
        ))}
        <button type="submit">Submit</button>
      </div>
      <div style={{ flex: '1' }}>
        <FormState />
      </div>
    </div>
  </Form>
);

export default withDocs(readme, Big);
