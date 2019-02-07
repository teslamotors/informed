import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, TextArea } from '../../../src';

const TextAreaInput = () => (
  <Form>
    {({ formState }) => (
      <div>
        <label>
          Bio:
          <TextArea field="bio"/>
        </label>
        <button type="submit">Submit</button>
        <Code language="language-js">
          {JSON.stringify(formState.values, null, 2)}
        </Code>
      </div>
    )}
  </Form>
);

export default withDocs(readme, TextAreaInput);
