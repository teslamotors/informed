import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text, Scope } from '../../../src';

const Basic = () => (
  <div>
    <Form onChange={(state)=>console.log(state.values)}>
      {({ formApi }) => (
        <form onSubmit={formApi.submitForm} id="basic-form">
          <label htmlFor="basic-name">First name:</label>
          <Text field="name" id="basic-name" />
          <button type="submit">
            Submit
          </button>
        </form>
      )}
    </Form>
  </div>
);

export default withDocs( readme, Basic );
