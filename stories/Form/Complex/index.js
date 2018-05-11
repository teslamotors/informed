import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text, Scope } from '../../../src';

const Complex = () => (
  <div>
    <Form onChange={(state)=>console.log(state)}>
      {({ formApi, formState }) => (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <form onSubmit={formApi.submitForm} id="complex-form">
              <label htmlFor="complex-name">First name:</label>
              <Text field="name" id="complex-name" />
              <Scope scope="favorite">
                <label htmlFor="complex-color">Favorite color:</label>
                <Text field="color" id="complex-color" />
                <label htmlFor="complex-food">Favorite food:</label>
                <Text field="food" id="complex-food" />
              </Scope>
              <label htmlFor="complex-friend-0">Friend 1:</label>
              <Text field="friends[0]" id="complex-friend-0"/>
              <label htmlFor="complex-friend-1">Friend 2:</label>
              <Text field="friends[1]" id="complex-friend-1"/>
              <label htmlFor="complex-friend-2">Friend 3:</label>
              <Text field="friends[2]" id="complex-friend-2"/>
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

export default withDocs( readme, Complex );
