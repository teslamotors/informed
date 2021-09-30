import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, Input, Scope, Debug } from '../../../src';

const ArrayOfScopes = () => (
  <Form>
    <h5>Friend1</h5>
    <Scope scope="friends[0]">
      <Input name="firstName" label="First Name" />
      <Input name="lastName" label="Last Name" />
    </Scope>
    <h5>Friend2</h5>
    <Scope scope="friends[1]">
      <Input name="firstName" label="First Name" />
      <Input name="lastName" label="Last Name" />
    </Scope>
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default withDocs(readme, ArrayOfScopes);
