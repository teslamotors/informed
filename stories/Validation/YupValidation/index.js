import React, { Component } from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import Modal from '../../utils/Modal';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';
import * as Yup from 'yup'; // for everything

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

class SimpleValidation extends Component {
  render() {
    return (
      <div>
        <Form
          yupSchema={SignupSchema}
          onSubmit={({ values }) =>
            window.alert(JSON.stringify(values, null, 2))
          }>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, marginRight: '2rem' }}>
              <Input name="firstName" label="First Name:" />
              <Input name="lastName" label="Last Name:" />
              <Input name="email" label="Email:" />
              <button type="submit">Submit</button>
            </div>
            <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
              <Debug values errors invalid valid />
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default withDocs(readme, () => <SimpleValidation />);
