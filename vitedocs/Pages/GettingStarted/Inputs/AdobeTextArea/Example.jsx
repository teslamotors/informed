import React from 'react';
import { useField, Debug } from 'informed';
import { TextArea, Button } from '@adobe/react-spectrum';
import { Form } from 'YourComponents'; // See Form Example

// HOW TO SETUP A TEXT AREA INPUT COMPONENT WITH INFORMED
const Input = props => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'text',
    ...props
  });
  const { required, disabled } = userProps;
  const { error, showError } = fieldState;
  return render(
    <TextArea
      ref={ref}
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      isDisabled={disabled}
      {...userProps}
      {...informed}
      onChange={v => fieldApi.setValue(v)}
    />
  );
};

// HOW TO USE IT
const Example = () => (
  <Form
    initialValues={{
      description: 'Hello World'
    }}>
    <Input name="description" label="Description" />
    <Button type="submit" variant="primary">
      submit
    </Button>
    <Debug />
  </Form>
);

export default Example;
