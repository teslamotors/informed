import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, RadioGroup, Radio, Debug } from '../../../src';

const RadioInput = () => (
  <Form>
    <RadioGroup name="gender">
      <Radio value="male" label="Male" />
      <Radio value="female" label="Female" />
    </RadioGroup>
    <button type="submit">Submit</button>
    <Debug values />
  </Form>
);

export default withDocs(readme, RadioInput);
