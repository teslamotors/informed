import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, BasicText, asField } from '../../../src';

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

const ErrorText = ({ fieldState, ...props }) => (
  <React.Fragment>
    <BasicText
      fieldState={fieldState}
      {...props}
      style={fieldState.error ? { border: 'solid 1px red' } : null}
    />
    {fieldState.error ? (
      <small style={{ color: 'red' }}>{fieldState.error}</small>
    ) : null}
  </React.Fragment>
);

const ErrorTextField = asField(ErrorText);

const Intro = () => (
  <div>
    <Form>
      {({ formState }) => (
        <React.Fragment>
          <label>
            First name:
            <ErrorTextField
              field="name"
              validate={validate}
              validateOnChange
              validateOnBlur
            />
          </label>
          <button type="submit">Submit</button>
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

export default withDocs(readme, Intro);
