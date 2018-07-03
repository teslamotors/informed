import React, { Component } from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import Modal from '../../utils/Modal';
import readme from './README.md';

import { Form, Text } from '../../../src';

const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : null;
}

class SimpleValidation extends Component {
render(){
  return (
      <div>
        <Form onSubmit={()=>this.modal.open()} id="validate-form">
          {({ formApi, formState }) => (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, marginRight: '2rem' }}>
                <label htmlFor="validate-color">Color:</label>
                <Text
                  field="color"
                  id="validate-color"
                  validate={validate} />
                <label htmlFor="validate-food">Food:</label>
                <Text
                  field="food"
                  id="validate-food"
                  validate={validate} />
                <label htmlFor="validate-car">Car:</label>
                <Text
                  field="car"
                  id="validate-car"
                  validate={validate} />
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

export default withDocs( readme, () => <SimpleValidation /> );
