import React from 'react';
import { useField, Debug } from 'informed';
import { Item, Picker, Button } from '@adobe/react-spectrum';
import { Form } from 'YourComponents'; // See Form Example

// HOW TO SETUP A SELECT INPUT COMPONENT WITH INFORMED
const Input = ({ children, ...props }) => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'text',
    ...props
  });

  const { required, options } = userProps;
  const { error, showError } = fieldState;

  return render(
    <Picker
      ref={ref}
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      {...userProps}
      {...informed}
      selectedKey={fieldState.value}
      onChange={()=>{}}
      onSelectionChange={v => fieldApi.setValue(v, {})}>
      {options
        ? options.map(op => {
            return <Item key={op.value}>{op.label}</Item>;
          })
        : children}
    </Picker>
  );
};

// HOW TO USE IT
const Example = () => (
  <Form
    initialValues={{
      color: 'red'
    }}>
    <Input
      name="color"
      label="Color"
      options={[
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' }
      ]}
    />
    <Button type="submit" variant="primary">
      submit
    </Button>
    <Debug />
  </Form>
);

export default Example;
