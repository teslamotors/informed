import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, BasicText, asField } from '../../../src';

const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : null;
};

const ErrorText = asField(({ fieldState, ...props }) => (
  <React.Fragment>
    <BasicText
      fieldState={fieldState} {...props}
      style={ fieldState.error ? { border: 'solid 1px red' } : null }/>
    { fieldState.error ? <small style={{color: 'red'}}>{fieldState.error}</small> : null }
  </React.Fragment>
));

const Intro = () => (
  <div>
    <Form id="custom-form-1">
      {({ formApi, formState }) => (
        <React.Fragment>
          <label htmlFor="custom-1-name">First name:</label>
          <ErrorText field="name" id="custom-1-name" validate={validate} validateOnChange validateOnBlur />
          <button type="submit">
            Submit
          </button>
          <label>Values:</label>
          <Code language="language-js">
            {JSON.stringify(formState.values, null, 2)}
          </Code>
          <label>Errors:</label>
          <Code language="language-js">
            {JSON.stringify(formState.errors, null, 2)}
          </Code>
        </React.Fragment>
      )}
    </Form>
  </div>
);

export default withDocs( readme, Intro );
