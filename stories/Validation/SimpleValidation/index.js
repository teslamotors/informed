import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text } from '../../../src';

const validate = (value)=> !value || value.length < 5 ? 'Field must be longer than five characters' : null;

const SimpleValidation = () => (
  <div>
    <Form>
      {({ formApi, formState }) => (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <form onSubmit={formApi.submitForm} id="validate-form">
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
            </form>
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
          </div>
        </div>
      )}
    </Form>
  </div>
);

export default withDocs( readme, SimpleValidation );
