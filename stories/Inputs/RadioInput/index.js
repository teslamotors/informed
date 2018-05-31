import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, RadioGroup, Radio } from '../../../src';

const RadioInput = () => (
  <Form id="radio-form">
    <RadioGroup field="gender">
      <label htmlFor="radio-male">Male</label>
      <Radio value="male" id="radio-male" />
      <label htmlFor="radio-female">Female</label>
      <Radio value="female" id="radio-female" />
    </RadioGroup>
    <button type="submit">
      Submit
    </button>
  </Form>
);

export default withDocs( readme, RadioInput );
