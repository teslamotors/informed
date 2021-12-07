import React, { useEffect, useRef, useState } from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import Modal from '../../utils/Modal';
import readme from './README.md';

import { Form, Input, Scope, Debug } from '../../../src';

const validate = username => {
  return !username || username.trim() === ''
    ? 'Username is a required field'
    : null;
};

const AsyncValidation = () => {
  const apiRef = useRef();

  const [initialValues, setInitialValues] = useState({ username: 'Jeff' });

  useEffect(
    () => {
      apiRef.current.reset();
    },
    [initialValues]
  );

  const asyncValidate = username =>
    new Promise((resolve, reject) => {
      apiRef.current.validating();
      setTimeout(() => {
        // Simulate username check
        if (['joe', 'tanner', 'billy', 'bob'].includes(username)) {
          apiRef.current.validated('username', 'That username is taken');
          return resolve();
        }
        // Simulate request faulure
        if (username === 'reject') {
          apiRef.current.validated('username', 'Unable to validate username.');
          return reject();
        }
        // Sumulate username success check
        apiRef.current.validated('username');
        return resolve();
      }, 2000);
    });

  return (
    <div>
      <Form
        apiRef={apiRef}
        onSubmit={({ values }) => console.log(values)}
        initialValues={initialValues}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <Text
              field="username"
              label="Username"
              validateOnMount
              asyncValidateOnMount
              validateOnBlur
              asyncValidateOnBlur
              validate={validate}
              asyncValidate={asyncValidate}
            />
            <button type="submit">Submit</button>
            <button
              type="button"
              onClick={() => {
                setInitialValues({ username: 'billy' });
              }}>
              Change Initial
            </button>
          </div>
          <div style={{ flex: 2, minWidth: '300px' }}>
            <Debug />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default withDocs(readme, () => <AsyncValidation />);
