import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Input, Debug } from '../../../src';

const validate = value => {
  if (!value || value.length < 5)
    return 'Field must be at least five characters';
};

const submit = ({ values }) =>
  window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);

const GettingStarted = () => (
  <div>
    <Form id="intro-form" onSubmit={submit} autocomplete="off">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <Input name="name" label="First name" validate={validate} />
          <button type="submit">Submit</button>
        </div>
        <div
          style={{
            flex: 2,
            flexDirection: 'column',
            display: 'flex',
            minWidth: '300px',
            marginLeft: '3rem'
          }}>
          <Debug errors values />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, GettingStarted);
