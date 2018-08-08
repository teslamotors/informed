import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, Text, Scope } from '../../../src';

const ArrayOfScopes = () => (
  <Form id="scope-array-form">
    {({ formState }) => (
      <div>
        <h5>Friend1</h5>
        <Scope scope="friends[0]">
          <label htmlFor="friend-1-firstname">Firstname</label>
          <Text field="firstname" id="friend-1-firstname" />
          <label htmlFor="friend-1-lastname">Lastname</label>
          <Text field="lastname" id="friend-1-lastname" />
        </Scope>
        <h5>Friend2</h5>
        <Scope scope="friends[1]">
          <label htmlFor="friend-2-firstname">Firstname</label>
          <Text field="firstname" id="friend-2-firstname" />
          <label htmlFor="friend-2-lastname">Lastname</label>
          <Text field="lastname" id="friend-2-lastname" />
        </Scope>
        <button type="submit">Submit</button>
        <Code language="language-js">
          {JSON.stringify(formState.values, null, 2)}
        </Code>
      </div>
    )}
  </Form>
);

export default withDocs(readme, ArrayOfScopes);
