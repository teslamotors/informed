import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Text } from '../../../src';
import FormState from '../../utils/FormState';

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

const GettingStarted = () => (
  <div>
    <Form id="intro-form">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <label>
            First name:
            <Text field="name" validate={validate}/>
          </label>
          <button type="submit">Submit</button>
        </div>
        <div
          style={{
            flex: 2,
            flexDirection: 'column',
            display: 'flex',
            minWidth: '300px'
          }}>
          <FormState errors/>
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, GettingStarted);
