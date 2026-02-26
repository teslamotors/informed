import React from 'react';
import { useField, Debug } from 'informed';
import { Button } from '@adobe/react-spectrum';
import { Radio, RadioGroup } from '@adobe/react-spectrum';
import { Form } from 'YourComponents'; // See Form Example

// HOW TO SETUP A RADIO GROUP COMPONENT WITH INFORMED
const Input = ({ children, ...props }) => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'text',
    ...props
  });
  const { required, options } = userProps;
  const { error, showError } = fieldState;
  return render(
    <RadioGroup
      ref={ref}
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      {...userProps}
      {...informed}
      value={informed.value}
      onChange={v => fieldApi.setValue(v)}>
      {options
        ? options.map(option => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))
        : children}
    </RadioGroup>
  );
};

// HOW TO USE IT
const Example = () => (
  <Form
    initialValues={{
      size: 'medium'
    }}>
    <Input
      name="size"
      label="Size"
      options={[
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' }
      ]}
    />
    <Button type="submit" variant="primary">
      submit
    </Button>
    <Debug />
  </Form>
);

export default Example;
