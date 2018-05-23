import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text, RadioGroup, Radio } from '../../../src';

const DynamicFields = () => (
  <div>
    <Form>
      {({ formApi, formState }) => (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <form onSubmit={formApi.submitForm} id="dynamic-field-form">
              <label htmlFor="dynamic-name">First name:</label>
              <Text field="name" id="dynamic-name" />
              <label>Are you married?</label>
              <RadioGroup field="married">
                <label htmlFor="dynamic-married-yes">Yes</label>
                <Radio value="yes" id="dynamic-married-yes" />
                <label htmlFor="dynamic-married-no">No</label>
                <Radio value="no" id="dynamic-married-no" />
              </RadioGroup>
              {
                formState.values.married === 'yes' ?
                <React.Fragment>
                  <label htmlFor="dynamic-spouse">Spouse name:</label>
                  <Text field="spouse" id="dynamic-spouse" />
                </React.Fragment>
                : null
              }
              <button type="submit">
                Submit
              </button>
            </form>
          </div>
          <div style={{ flex: 2, minWidth: '300px' }}>
            <label>Values:</label>
            <Code language="language-js">
              {JSON.stringify(formState.values, null, 2)}
            </Code>
            <label>Touched:</label>
            <Code language="language-js">
              {JSON.stringify(formState.touched, null, 2)}
            </Code>
          </div>
        </div>
      )}
    </Form>
  </div>
);

export default withDocs( readme, DynamicFields );
