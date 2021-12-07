import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Debug, useField } from '../../../src';

const CustomInput = props => {
  const { render, informed, fieldState, userProps, ref } = useField({
    type: 'text',
    ...props
  });

  const { id, label, ...rest } = userProps;
  const { error, showError } = fieldState;

  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input
        {...rest}
        {...informed}
        ref={ref}
        style={showError ? { border: 'solid 1px red' } : null}
      />
      {showError && <small style={{ color: 'red' }}>{error}</small>}
    </>
  );
};

const Example = () => (
  <Form>
    <CustomInput
      field="name"
      label="First name:"
      validateOn="change"
      required
      minLength={5}
    />
    <button type="submit">Submit</button>
    <Debug values errors />
  </Form>
);

export default withDocs(readme, Example);
