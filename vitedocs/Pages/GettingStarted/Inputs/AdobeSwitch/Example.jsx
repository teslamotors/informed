import React from 'react';
import { useField, Debug } from 'informed';
import { Button } from '@adobe/react-spectrum';
import { Switch } from '@adobe/react-spectrum';
import { Form } from 'YourComponents'; // See Form Example

// HOW TO SETUP A SWITCH COMPONENT WITH INFORMED
const Input = props => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'text',
    ...props
  });
  const { required } = userProps;
  const { error, showError } = fieldState;
  return render(
    <Switch
      ref={ref}
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      {...userProps}
      {...informed}
      isSelected={informed.value}
      onChange={v => fieldApi.setValue(v, {})}>
      {props.label}
    </Switch>
  );
};

// HOW TO USE IT
const Example = () => (
  <Form
    initialValues={{
      notifications: true
    }}>
    <Input name="notifications" label="Enable Notifications" />
    <Button type="submit" variant="primary">
      submit
    </Button>
    <Debug />
  </Form>
);

export default Example;
