import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, TextArea, Debug } from '../../../src';

const TextAreaInput = () => (
  <Form>
    <TextArea name="bio" label="Bio:" />
    <button type="submit">Submit</button>
    <Debug values />
  </Form>
);

export default withDocs(readme, TextAreaInput);
