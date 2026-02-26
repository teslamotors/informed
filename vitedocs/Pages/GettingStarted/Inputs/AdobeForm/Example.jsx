import React from 'react';
import { useForm, useField, Debug } from 'informed';
import { Form as AdobeForm, TextField, Button } from '@adobe/react-spectrum';

// HOW TO SETUP AN ADOBE FORM COMPONENT WITH INFORMED
const CustomForm = ({ children, ...rest }) => {
  const { formController, render, userProps } = useForm(rest);

  /* --- DONT FORGET TO CALL THE RENDER METHOD FROM THE HOOK! --- */
  return render(
    <AdobeForm
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}
      onKeyDown={formController.keyDown}>
      {children}
    </AdobeForm>
  );
};

// Simple Adobe Input Component for example
const Input = ({ type, ...props }) => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: type ?? 'text',
    ...props
  });
  const { required, disabled } = userProps;
  const { error, showError } = fieldState;
  return render(
    <TextField
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      isDisabled={disabled}
      {...userProps}
      {...informed}
      onChange={() => {}}
      onInput={e => {
        fieldApi.setValue(e.target.value, e);
      }}
      onBlur={e => {
        fieldApi.setTouched(true, e);
      }}
      ref={r => {
        if (!ref.current) {
          ref.current = !r ? ref.current : r.getInputElement();
        }
      }}
    />
  );
};

// HOW TO USE IT
const Example = () => {
  return (
    <CustomForm>
      <Input name="name" label="First name:" />
      <Button type="submit" variant="primary">
        Submit
      </Button>
      <Debug />
    </CustomForm>
  );
};

export default Example;
