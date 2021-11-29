import React, { useRef } from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import Modal from '../../utils/Modal';
import readme from './README.md';

import { Form, Input, Debug, DebugField } from '../../../src';

const validate = username => {
  return !username || username.trim() === ''
    ? 'Username is a required field'
    : undefined;
};

const asyncValidate = username => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate username check
      if (['joe', 'tanner', 'billy', 'bob'].includes(username)) {
        return resolve('That username is taken');
      }
      // Simulate request faulure
      if (username === 'reject') {
        return reject(new Error('Unable to validate username.'));
      }
      return resolve();
    }, 2000);
  });
};

const AsyncValidation = () => {
  return (
    <div>
      <Form onSubmit={({ values }) => console.log('Submitted', values)}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 2, marginRight: '2rem' }}>
            <Input
              name="username"
              label="Username"
              autocomplete="off"
              validateOn="change"
              validate={validate}
              asyncValidate={asyncValidate}
            />
            <button type="submit">Submit</button>
          </div>
          <div style={{ flex: 2, minWidth: '150px', marginLeft: '3rem' }}>
            <h5>Form State:</h5>
            <Debug />
          </div>
          <div style={{ flex: 2, minWidth: '150px', marginLeft: '3rem' }}>
            <h5>Field State:</h5>
            <DebugField name="username" />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default withDocs(readme, () => <AsyncValidation />);
