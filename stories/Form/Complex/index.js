import React from 'react';
import withDocs from '../../utils/withDocs';
import FormState from '../../utils/FormState';
import readme from './README.md';

import { Form, Text, Scope } from '../../../src';

const Complex = () => (
  <div>
    <Form id="complex-form">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <label htmlFor="complex-name">First name:</label>
          <Text field="name" id="complex-name" />
          <Scope scope="favorite">
            <label htmlFor="complex-color">Favorite color:</label>
            <Text field="color" id="complex-color" />
            <label htmlFor="complex-food">Favorite food:</label>
            <Text field="food" id="complex-food" />
          </Scope>
          <label htmlFor="complex-friend-0">Friend 1:</label>
          <Text field="friends[0]" id="complex-friend-0" />
          <label htmlFor="complex-friend-1">Friend 2:</label>
          <Text field="friends[1]" id="complex-friend-1" />
          <label htmlFor="complex-friend-2">Friend 3:</label>
          <Text field="friends[2]" id="complex-friend-2" />
          <button type="submit">Submit</button>
        </div>
        <div style={{ flex: 2, minWidth: '300px' }}>
          <FormState />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, Complex);
