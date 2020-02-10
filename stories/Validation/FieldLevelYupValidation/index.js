import React, { Component } from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import Modal from '../../utils/Modal';
import readme from './README.md';

import { Form, Text } from '../../../src';
import * as Yup from 'yup'; // for everything

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const lastNameSchema = Yup.string()
  .min(2, 'Last Name Too Short!')
  .max(50, 'Last Name Too Long!')
  .required('Last Name Required');

class SimpleValidation extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={() => this.modal.open()} validationSchema={SignupSchema} id="validate-form" >
          {({ formApi, formState }) => (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, marginRight: '2rem' }}>
                <label>First Name:<Text field="firstName" /></label>
                <label>Last Name:<Text field="lastName" validationSchema={lastNameSchema} /></label>
                <label>Email:<Text field="email" /></label>
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

export default withDocs(readme, () => <SimpleValidation />);
