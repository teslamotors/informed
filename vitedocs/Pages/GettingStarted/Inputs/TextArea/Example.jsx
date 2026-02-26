import React from 'react';
import { useField, Debug } from 'informed';
import { Form } from 'YourComponents'; // See Form Example

// HOW TO SETUP A NATIVE TEXTAREA COMPONENT WITH INFORMED
const Input = props => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  /* ---------- Get access to field state ----------- */
  const { value, error, showError } = fieldState;

  /* ---------- Get access to field control ----------- */
  const { setValue, setTouched } = fieldApi;

  /* --------------- Everything else ----------------- */
  const { label, id, ...rest } = userProps;

  /* ----------------- Call Render ------------------- */
  return render(
    <>
      {/* ------------------ Label ------------------- */}
      {label ? <label htmlFor={id}>{label}</label> : null}
      {/* -------------- Native Textarea ------------- */}
      <textarea
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
      {/* --------- Show error when showError -------- */}
      {showError ? <small style={{ color: 'red' }}>{error}</small> : null}
    </>
  );
};

// HOW TO USE IT
const Example = () => (
  <Form
    initialValues={{
      description: 'Hello World'
    }}>
    <Input name="description" label="Description" id="description" />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default Example;
