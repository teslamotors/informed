import React from 'react';
import Code from '../utils/Code';
import { withDocs }  from 'storybook-readme';
import readme from './README.md';

import { Form, Text } from '../../src';

const Basic = () => (
  <div>
    <Form>
      {({ formApi }) => (
        <form onSubmit={formApi.submitForm} id="form">
          <label htmlFor="name">First name:</label>
          <Text field="name" id="name" />
          {/* <Scope scope="favorite">
            <label htmlFor="hello">Favorite color:</label>
            <Text field="color" id="color" />
            <label htmlFor="hello">Favorite food:</label>
            <Text field="food" id="food" />
          </Scope>
          <Array field="friends">
            <label htmlFor="friend-1">Friend:</label>
            <Text id="friend-1"/>
            <label htmlFor="friend-2">Friend:</label>
            <Text id="friend-2"/>
            <label htmlFor="friend-3">Friend:</label>
            <Text id="friend-3"/>
          </Array> */}
          <button type="submit">
            Submit
          </button>
        </form>
      )}
    </Form>
  </div>
);

export default withDocs( readme, Basic );
