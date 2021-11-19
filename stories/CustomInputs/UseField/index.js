import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Debug, useField } from '../../../src';

const CustomInput = props => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  const { value, error, showError } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { label, id, ...rest } = userProps;
  return render(
    <>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        {...rest}
        id={id}
        ref={ref}
        value={!value && value !== 0 ? '' : value}
        onChange={e => {
          setValue(e.target.value, e);
        }}
        onBlur={e => {
          setTouched(true, e);
        }}
        style={showError ? { border: 'solid 1px red' } : null}
      />
      {showError ? <small style={{ color: 'red' }}>{error}</small> : null}
    </>
  );
};

const Example = () => (
  <Form autocomplete="off">
    <CustomInput
      field="name"
      label="First name:"
      validateOn="change"
      required
      minLength={5}
    />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default withDocs(readme, Example);
