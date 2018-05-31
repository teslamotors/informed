import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, TextArea } from '../../../src';

const TextAreaInput = () => (
  <Form id="textarea-form">
    <label htmlFor="textarea-bio">Bio:</label>
    <TextArea field="bio" id="textarea-bio" />
    <button type="submit">
      Submit
    </button>
  </Form>
);

export default withDocs( readme, TextAreaInput );
