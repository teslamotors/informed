import React from 'react';
import { useField, Debug } from 'informed';
import { Form } from 'YourComponents'; // See Form Example

// HOW TO SETUP A NATIVE SLIDER (RANGE) COMPONENT WITH INFORMED
const Input = props => {
  const { fieldState, fieldApi, render, ref, userProps } = useField({
    type: 'number',
    ...props
  });

  /* ---------- Get access to field state ----------- */
  const { value, error, showError } = fieldState;

  /* ---------- Get access to field control ----------- */
  const { setValue, setTouched } = fieldApi;

  /* --------------- Everything else ----------------- */
  const { label, id, min, max, step, ...rest } = userProps;

  /* ----------------- Call Render ------------------- */
  return render(
    <>
      {/* ------------------ Label ------------------- */}
      {label ? (
        <label htmlFor={id}>
          {label}: {value ?? 0}
        </label>
      ) : null}
      {/* -------------- Native Range Input ---------- */}
      <input
        {...rest}
        type="range"
        id={id}
        ref={ref}
        min={min ?? 0}
        max={max ?? 100}
        step={step ?? 1}
        value={value ?? 0}
        onChange={e => {
          setValue(Number(e.target.value), e);
        }}
        onBlur={e => {
          setTouched(true, e);
        }}
        style={showError ? { outline: 'solid 1px red' } : null}
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
      volume: 50
    }}>
    <Input name="volume" label="Volume" id="volume" min={0} max={100} step={1} />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default Example;
