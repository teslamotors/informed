import React from 'react';
import { useField, Debug } from 'informed';
import { Form } from 'YourComponents'; // See Form Example

// HOW TO SETUP A NATIVE TEXT INPUT COMPONENT WITH INFORMED
const Input = props => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  /* ---------- Get access to field state ----------- */
  // Note: We use maskedValue instead of value to allow formatters to work
  const { maskedValue, error, showError } = fieldState;

  /* ---------- Get access to field control ----------- */
  const { setValue, setTouched } = fieldApi;

  /* --------------- Everything else ----------------- */
  const { label, id, ...rest } = userProps;

  /* ----------------- Call Render ------------------- */
  return render(
    <>
      {/* ------------------ Label ------------------- */}
      {label ? <label htmlFor={id}>{label}</label> : null}
      {/* -------------- Native Input ---------------- */}
      <input
        {...rest}
        id={id}
        ref={ref}
        // ------------------ Connecting Value -------------------
        value={!maskedValue && maskedValue !== 0 ? '' : maskedValue}
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
      name: 'Joe',
      phone: '5555551234'
    }}>
    <Input name="name" label="Name" id="name" />
    <Input
      name="phone"
      label="Phone"
      id="phone"
      formatter="(###) ###-####"
      placeholder="(555) 555-1234"
    />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default Example;
