import React from 'react';
import { useField, Debug } from 'informed';
import { TextField, Button } from '@adobe/react-spectrum';
import { Form } from 'YourComponents'; // See Form Example

// HOW TO SETUP A CUSTOM INPUT COMPONENT WITH INFORMED
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
      // This is fucking stupid that they took over the native on change!!!
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
const Example = () => (
  <Form
    initialValues={{
      name: 'Joe'
    }}>
    <Input name="name" label="Name" />
    <Button type="submit" variant="primary">
      submit
    </Button>
    <Debug />
  </Form>
);

export default Example;
