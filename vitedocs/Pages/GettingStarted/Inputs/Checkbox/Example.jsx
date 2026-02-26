import React from 'react';
import { useField, Debug } from 'informed';
import { Form } from 'YourComponents'; // See Form Example

// HOW TO SETUP A NATIVE CHECKBOX COMPONENT WITH INFORMED
const Input = props => {
  const { fieldState, fieldApi, render, ref, userProps } = useField({
    type: 'checkbox',
    ...props
  });

  /* ---------- Get access to field state ----------- */
  const { value, error, showError } = fieldState;

  /* ---------- Get access to field control ----------- */
  const { setValue, setTouched } = fieldApi;

  /* --------------- Everything else ----------------- */
  const { label, id, ...rest } = userProps;

  /* ----------------- Call Render ------------------- */
  return render(
    <>
      {/* -------------- Label with Checkbox --------- */}
      <label htmlFor={id}>
        {/* ------------- Native Checkbox ------------ */}
        <input
          {...rest}
          type="checkbox"
          id={id}
          ref={ref}
          checked={!!value}
          onChange={e => {
            setValue(e.target.checked, e);
          }}
          onBlur={e => {
            setTouched(true, e);
          }}
          style={showError ? { outline: 'solid 1px red' } : null}
        />
        {label}
      </label>
      {/* --------- Show error when showError -------- */}
      {showError ? <small style={{ color: 'red' }}>{error}</small> : null}
    </>
  );
};

// HOW TO USE IT
const Example = () => (
  <Form
    initialValues={{
      agree: true
    }}>
    <Input name="agree" label="I agree to terms and conditions" id="agree" />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default Example;
