import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, Input, Debug } from '../../../src';

const InputInput = () => (
  <Form>
    <Input name="friends[0]" label="Friend1" />
    <Input name="friends[1]" label="Friend2" />
    <Input name="friends[2]" label="Friend3" />
    <button type="submit">Submit</button>
    <Debug values />
  </Form>
);

export default withDocs(readme, InputInput);
