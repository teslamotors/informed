import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, useFormApi, Debug } from '../../../src';

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
              <Input name={`field-${i}`} />
            </label>
          </>
        ))}
        <button type="submit">Submit</button>
      </div>
      <div style={{ flex: '1' }}>
        <Debug />
      </div>
    </div>
  </Form>
);

export default withDocs(readme, Big);
