import React from 'react';
import { useField, Debug } from 'informed';
import { Button } from '@adobe/react-spectrum';
import { Slider } from '@adobe/react-spectrum';
import { Form } from 'YourComponents'; // See Form Example

// HOW TO SETUP A SLIDER COMPONENT WITH INFORMED
const Input = (props) => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'number',
    ...props,
  });
  const { required } = userProps;
  const { error, showError } = fieldState;
  return render(
    <Slider
      ref={ref}
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      {...userProps}
      {...informed}
      onChange={(v) => fieldApi.setValue(v)}
    />
  );
};

// HOW TO USE IT
const Example = () => (
  <Form
    initialValues={{
      volume: 50
    }}>
    <Input name="volume" label="Volume" minValue={0} maxValue={100} />
    <Button type="submit" variant="primary">
      submit
    </Button>
    <Debug />
  </Form>
);

export default Example;
