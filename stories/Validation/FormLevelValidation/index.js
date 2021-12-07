import React, { Component } from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import Modal from '../../utils/Modal';
import readme from './README.md';

import { Form, Text } from '../../../src';

const validateLength = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

const validateFields = values => {
  return {
    color: validateLength(values.color),
    food: validateLength(values.food),
    car: validateLength(values.car)
  };
};

const validate = values =>
  values.a + values.b !== 4 ? 'a and b must sum to 4!' : undefined;

class SimpleValidation extends Component {
  render() {
    return (
      <div>
        <Form
          onSubmit={() => this.modal.open()}
          validateFields={validateFields}
          validate={validate}>
          {({ formState }) => (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, marginRight: '2rem' }}>
                <label>
                  Color:
                  <Input field="color" />
                </label>
                <label>
                  Food:
                  <Input field="food" />
                </label>
                <label>
                  Car:
                  <Input field="car" />
                </label>
                <label>
                  A:
                  <Input field="a" type="number" />
                </label>
                <label>
                  B:
                  <Input field="b" type="number" />
                </label>
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
                <label>Error:</label>
                <Code language="language-js">
                  {JSON.stringify(formState.error, null, 2)}
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
