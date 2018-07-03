import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Modal from '../../utils/Modal';

import { Form, Text, Scope } from '../../../src';

const basicValidation = value => {
  return !value || value.length < 5 ? 'Password must be at least five characters' : null;
}

const matchValidation = ( value, values ) => {
  return values.password !== values.confirmPassword ? 'Passwords must match' : null;
}

const passwordValidation = ( value, values ) => {
  return basicValidation(value) || matchValidation( value, values )
}

class Notifications extends React.Component{

  render(){

    return (
      <div>
        <Form
          onSubmit={()=>this.modal.open()}
          id="notify-validation-form">
          {({ formApi, formState }) => (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, marginRight: '2rem' }}>
                <label htmlFor="notify-password">Password:</label>
                <Text
                  field="password"
                  id="notify-password"
                  validate={passwordValidation}
                  validateOnChange
                  notify={['confirmPassword']}/>
                <label htmlFor="notify-confirm-password">Confirm password:</label>
                <Text
                  field="confirmPassword"
                  id="notify-confirm-password"
                  validate={passwordValidation}
                  validateOnChange
                  notify={['password']}/>
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
                <label>Invalid:</label>
                <Code language="language-js">
                  {JSON.stringify(formState.invalid, null, 2)}
                </Code>
              </div>
              <Modal getControl={(model)=>this.modal = model}>
                <strong>Form Successfully Submitted!</strong>
              </Modal>
            </div>
          )}
        </Form>
      </div>
    );
  }
}

export default withDocs( readme, () => <Notifications /> );
