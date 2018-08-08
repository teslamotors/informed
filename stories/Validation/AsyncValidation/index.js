import React, { Component } from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import Modal from '../../utils/Modal';
import readme from './README.md';

import { Form, Text, Scope } from '../../../src';

const validate = username =>
  !username || username.trim() === '' ? 'Username is a required field' : null;

const asyncValidate = username =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate username check
      if (['joe', 'tanner', 'billy', 'bob'].includes(username)) {
        resolve('That username is taken');
      }
      // Simulate request faulure
      if (username === 'reject') {
        reject('Failure while making call to validate username does not exist');
      }
      // Sumulate username success check
      resolve(null);
    }, 2000);
  });

class AsyncValidation extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={() => this.modal.open()} id="validate-async-form">
          {({ formApi, formState }) => (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, marginRight: '2rem' }}>
                <label htmlFor="validate-async-username">Username:</label>
                <Text
                  field="username"
                  id="validate-async-username"
                  validate={validate}
                  asyncValidate={asyncValidate}
                />
                <button type="submit">Submit</button>
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
                <label>Async Errors:</label>
                <Code language="language-js">
                  {JSON.stringify(formState.asyncErrors, null, 2)}
                </Code>
                <label>Invalid:</label>
                <Code language="language-js">
                  {JSON.stringify(formState.invalid, null, 2)}
                </Code>
              </div>
              <Modal getControl={model => (this.modal = model)}>
                <strong>Form Successfully Submitted!</strong>
              </Modal>
            </div>
          )}
        </Form>
      </div>
    );
  }
}

export default withDocs(readme, () => <AsyncValidation />);
