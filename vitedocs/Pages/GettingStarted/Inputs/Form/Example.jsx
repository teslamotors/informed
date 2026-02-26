import React from 'react';
import { useForm, useField, Debug } from 'informed';

// HOW TO SETUP A FORM COMPONENT WITH INFORMED
const CustomForm = ({ children, ...rest }) => {
  const { formController, render, userProps } = useForm(rest);

  /* --- DONT FORGET TO CALL THE RENDER METHOD FROM THE HOOK! --- */
  return render(
    <form
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}
      onKeyDown={formController.keyDown}>
      {children}
    </form>
  );
};

// Simple Input Component for example
const Input = props => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  const { maskedValue, error, showError } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { label, id, ...rest } = userProps;

  return render(
    <>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        {...rest}
        id={id}
        ref={ref}
        value={!maskedValue && maskedValue !== 0 ? '' : maskedValue}
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

// HOW TO USE IT
const Example = () => {
  return (
    <CustomForm>
      <Input name="name" label="First name:" id="name" />
      <button type="submit">Submit</button>
      <Debug />
    </CustomForm>
  );
};

export default Example;
