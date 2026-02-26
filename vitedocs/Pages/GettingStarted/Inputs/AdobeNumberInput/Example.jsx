import React from 'react';
import { useField, Debug } from 'informed';
import { NumberField, Button } from '@adobe/react-spectrum';
import { Form } from 'YourComponents'; // See Form Example

// HOW TO SETUP A NUMBER INPUT COMPONENT WITH INFORMED
const Input = props => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'number',
    ...props
  });
  const { required } = userProps;
  const { error, showError } = fieldState;
  return render(
    <div className="number-input">
      <NumberField
        ref={ref}
        validationState={!error ? null : 'invalid'}
        errorMessage={showError ? error : undefined}
        isRequired={required}
        {...userProps}
        {...informed}
        onChange={v => fieldApi.setValue(v, {})}
      />
    </div>
  );
};

// HOW TO USE IT
const Example = () => (
  <Form
    initialValues={{
      age: 25
    }}>
    <Input name="age" label="Age" />
    <Button type="submit" variant="primary">
      submit
    </Button>
    <Debug />
  </Form>
);

export default Example;
