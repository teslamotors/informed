import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, useField } from '../../../src';

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

export const ErrorTextField = React.memo(({ label, ...props }) => {
  const { render, informed, fieldState, ref } = useField({
    type: 'text',
    ...props
  });
  const { showError } = fieldState;
  return render(
    <label>
      {label}
      <input
        {...informed}
        ref={ref}
        style={showError ? { border: 'solid 1px red' } : null}
      />
      {showError ? (
        <small style={{ color: 'red' }}>{fieldState.error}</small>
      ) : null}
    </label>
  );
});

const Intro = () => (
  <div>
    <Form>
      <ErrorTextField
        field="name"
        label="First name:"
        validate={validate}
        validateOnChange
        validateOnBlur
      />
      <button type="submit">Submit</button>
      <Debug values errors />
    </Form>
  </div>
);

export default withDocs(readme, Intro);
