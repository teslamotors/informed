import React, { useRef } from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import Modal from '../../utils/Modal';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const validate = username => {
  return !username || username.trim() === ''
    ? 'Username is a required field'
    : null;
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
      <Form onSubmit={values => console.log('Submitted', values)}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <Input
              field="username"
              label="Username"
              autocomplete="off"
              validate={validate}
              asyncValidate={asyncValidate}
            />
            <button type="submit">Submit</button>
          </div>
          <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
            <Debug />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default withDocs(readme, () => <AsyncValidation />);
