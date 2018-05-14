import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './InlineFunctions.md';

import { Form, Text } from '../../../src';

const validate = (value)=>'Field is not valid';

const InlineFunctions = () => (
  <div>
    <Form>
      {({ formApi, formState }) => (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <form onSubmit={formApi.submitForm} id="gotcha-form-1">
              <label htmlFor="gotcha-color-1">Color:</label>
              <small>Validate on blur</small>
              <Text
                field="color"
                id="gotcha-color-1"
                validateOnBlur
                debug
                validate={(value)=>'Field is not valid'} />
              <label htmlFor="gotcha-food-1">Food:</label>
              <small>Validate on change</small>
              <Text
                field="food"
                id="gotcha-food-1"
                validateOnChange
                debug
                validate={(value)=>'Field is not valid'} />
              <label htmlFor="gotcha-car-1">Car:</label>
              <small>Validate on blur and change</small>
              <Text
                field="car"
                id="gotcha-car-1"
                validateOnBlur
                validateOnChange
                debug
                validate={(value)=>'Field is not valid'} />
              <button type="submit">
                Submit
              </button>
            </form>
          </div>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <form onSubmit={formApi.submitForm} id="gotcha-form-2">
              <label htmlFor="gotcha-color-2">Color:</label>
              <small>Validate on blur</small>
              <Text
                field="color"
                id="gotcha-color-2"
                validateOnBlur
                debug
                validate={validate} />
              <label htmlFor="gotcha-food-2">Food:</label>
              <small>Validate on change</small>
              <Text
                field="food"
                id="gotcha-food-2"
                validateOnChange
                debug
                validate={validate} />
              <label htmlFor="gotcha-car-2">Car:</label>
              <small>Validate on blur and change</small>
              <Text
                field="car"
                id="gotcha-car-2"
                validateOnBlur
                validateOnChange
                debug
                validate={validate} />
              <button type="submit">
                Submit
              </button>
            </form>
          </div>
          <div style={{ flex: 2, flexDirection: 'column', display: 'flex', minWidth: '300px' }}>
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

export default withDocs( readme, InlineFunctions );
