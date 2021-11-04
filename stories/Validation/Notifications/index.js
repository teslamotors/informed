import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Modal from '../../utils/Modal';

import { Form, Input, Debug } from '../../../src';

const basicValidation = value => {
  return !value || value.length < 5
    ? 'Password must be at least five characters'
    : undefined;
};

const matchValidation = (password1, password2) => {
  return password1 !== password2 ? 'Passwords must match' : undefined;
};

const passwordValidation = (password1, password2) => {
  return basicValidation(password1) || matchValidation(password1, password2);
};

const validatePassword = (value, values) =>
  passwordValidation(value, values.confirmPassword);
const validateConfim = (value, values) =>
  passwordValidation(value, values.password);

class Notifications extends React.Component {
  render() {
    return (
      <div>
        <Form onSubmit={() => this.modal.open()} id="notify-validation-form">
          {({ formState }) => (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, marginRight: '2rem' }}>
                <label htmlFor="notify-password">Password:</label>
                <Input
                  name="password"
                  id="notify-password"
                  validate={validatePassword}
                  validateOn="change"
                  validateWhen={['confirmPassword']}
                />
                <label htmlFor="notify-confirm-password">
                  Confirm password:
                </label>
                <Input
                  name="confirmPassword"
                  id="notify-confirm-password"
                  validate={validateConfim}
                  validateOn="change"
                  validateWhen={['password']}
                />
                <button type="submit">Submit</button>
              </div>
              <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
                <Debug values errors invalid />
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
