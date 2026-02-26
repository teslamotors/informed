import React from 'react';
import { useField, Debug } from 'informed';
import { Button } from '@adobe/react-spectrum';
import { CheckboxGroup, Checkbox } from '@adobe/react-spectrum';
import { Form } from 'YourComponents'; // See Form Example

// HOW TO SETUP A CHECKBOX GROUP COMPONENT WITH INFORMED
const Input = ({ children, ...props }) => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    ...props
  });

  const { required, options } = userProps;
  const { error, showError } = fieldState;

  return render(
    <CheckboxGroup
      ref={ref}
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      {...userProps}
      {...informed}
      value={fieldState.value}
      onChange={v => fieldApi.setValue(v, {})}>
      {options
        ? options.map(op => {
            return <Checkbox key={op.value} value={op.value}>{op.label}</Checkbox>;
          })
        : children}
    </CheckboxGroup>
  );
};

// HOW TO USE IT
const Example = () => (
  <Form
    initialValues={{
      interests: ['sports']
    }}>
    <Input
      name="interests"
      label="Interests"
      options={[
        { label: 'Sports', value: 'sports' },
        { label: 'Music', value: 'music' },
        { label: 'Reading', value: 'reading' }
      ]}
    />
    <Button type="submit" variant="primary">
      submit
    </Button>
    <Debug />
  </Form>
);

export default Example;
