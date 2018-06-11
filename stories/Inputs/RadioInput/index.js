import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, RadioGroup, Radio } from '../../../src';

const RadioInput = () => (
  <Form id="radio-form">
    {({ formState }) => (
      <div>
        <RadioGroup field="gender">
          <label htmlFor="radio-male">Male</label>
          <Radio value="male" id="radio-male" />
          <label htmlFor="radio-female">Female</label>
          <Radio value="female" id="radio-female" />
        </RadioGroup>
        <button type="submit">
          Submit
        </button>
        <Code language="language-js">
          {JSON.stringify(formState.values, null, 2)}
        </Code>
      </div>
    )}
  </Form>
);

export default withDocs( readme, RadioInput );
