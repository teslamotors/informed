import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text, Scope } from '../../../src';

const Basic = () => (
  <div>
    <Form onChange={(state)=>console.log(state.values)}>
      {({ formApi, formState }) => (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <form onSubmit={formApi.submitForm} id="basic-form">
              <label htmlFor="basic-name">First name:</label>
              <Text field="name" id="basic-name" />
              <button type="submit">
                Submit
              </button>
            </form>
          </div>
          <div style={{ flex: 2, flexDirection: 'column', display: 'flex', minWidth: '300px' }}>
            <label>Values:</label>
            <Code language="language-js">
              {JSON.stringify(formState.values, null, 2)}
            </Code>
            <label>Touched:</label>
            <Code language="language-js">
              {JSON.stringify(formState.touched, null, 2)}
            </Code>
          </div>
        </div>
      )}
    </Form>
  </div>
);

export default withDocs( readme, Basic );
