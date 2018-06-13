import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, Text } from '../../../src';

const TextInput = () => (
  <Form id="array-form">
    {({ formState }) => (
      <div>
        <label htmlFor="array-friend-1">Friend1</label>
        <Text field="friends[0]" id="array-friend-1" />
        <label htmlFor="array-friend-2">Friend2</label>
        <Text field="friends[1]" id="array-friend-2" />
        <label htmlFor="array-friend-3">Friend3</label>
        <Text field="friends[2]" id="array-friend-3" />
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

export default withDocs( readme, TextInput );
