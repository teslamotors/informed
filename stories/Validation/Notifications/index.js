import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Modal from '../../utils/Modal';

import { Form, Text } from '../../../src';

const basicValidation = value => {
  return !value || value.length < 5
    ? 'Password must be at least five characters'
    : undefined;
};

const matchValidation = (password1, password2) => {
  return password1 !== password2
    ? 'Passwords must match'
    : undefined;
};

const passwordValidation = (password1, password2) => {
  return basicValidation(password1) || matchValidation(password1, password2);
};

const validatePassword = (value, values) => passwordValidation( value, values.confirmPassword); 
const validateConfim = (value, values) => passwordValidation( value, values.password); 

class Notifications extends React.Component {
  render() {
    return (
      <div>
        <Form onSubmit={() => this.modal.open()} id="notify-validation-form">
          {({ formState }) => (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, marginRight: '2rem' }}>
                <label htmlFor="notify-password">Password:</label>
                <Text
                  field="password"
                  id="notify-password"
                  validate={validatePassword}
                  validateOnChange
                  notify={['confirmPassword']}
                />
                <label htmlFor="notify-confirm-password">
                  Confirm password:
                </label>
                <Text
                  field="confirmPassword"
                  id="notify-confirm-password"
                  validate={validateConfim}
                  validateOnChange
                  notify={['password']}
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

export default withDocs(readme, () => <Notifications />);
