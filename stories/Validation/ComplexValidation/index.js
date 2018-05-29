import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text, Scope } from '../../../src';

const validate = (value)=> !value || value.length < 5 ? 'Field must be longer than five characters' : null;

const ComplexValidation = () => (
  <div>
    <Form id="complex-validation-form">
      {({ formApi, formState }) => (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <label htmlFor="complex-name">First name:</label>
            <Text field="name" id="complex-name" validate={validate} />
            <Scope scope="favorite">
              <label htmlFor="complex-color">Favorite color:</label>
              <Text field="color" id="complex-color" validate={validate} />
              <label htmlFor="complex-food">Favorite food:</label>
              <Text field="food" id="complex-food" validate={validate} />
            </Scope>
            <label htmlFor="complex-friend-0">Friend 1:</label>
            <Text field="friends[0]" id="complex-friend-0" validate={validate} />
            <label htmlFor="complex-friend-1">Friend 2:</label>
            <Text field="friends[1]" id="complex-friend-1" validate={validate} />
            <label htmlFor="complex-friend-2">Friend 3:</label>
            <Text field="friends[2]" id="complex-friend-2" validate={validate} />
            <button type="submit">
              Submit
            </button>
          </div>
          <div style={{ flex: 2, minWidth: '300px' }}>
            <label>Values:</label>
            <Code language="language-js">
              {JSON.stringify(formState.values, null, 2)}
            </Code>
            <label>Errors:</label>
            <Code language="language-js">
              {JSON.stringify(formState.errors, null, 2)}
            </Code>
          </div>
        </div>
      )}
    </Form>
  </div>
);

export default withDocs( readme, ComplexValidation );
