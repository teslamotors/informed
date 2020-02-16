import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Text } from '../../../src';
import FormState from '../../utils/FormState';

const validate = value => {
  if (!value || value.length < 5) return 'Field must be at least five characters';
};

const submit = values => window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);

const GettingStarted = () => (
  <div>
    <Form id="intro-form" onSubmit={submit}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <label>
            First name:
            <Text field="name" validate={validate} />
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
          <FormState errors />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, GettingStarted);
