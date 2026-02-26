import React from 'react';
import { useField, Debug } from 'informed';
import { Button } from '@adobe/react-spectrum';
import { Item, ComboBox } from '@adobe/react-spectrum';
import { Form } from 'YourComponents'; // See Form Example

// HOW TO SETUP A COMBO BOX COMPONENT WITH INFORMED
const Input = ({ children, items, ...props }) => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'text',
    ...props
  });

  const { required } = userProps;
  const { error, showError } = fieldState;

  return render(
    <ComboBox
      ref={ref}
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      {...userProps}
      {...informed}
      items={items}
      allowsCustomValue
      onInputChange={v => fieldApi.setValue(v, {})}>
      {item => <Item key={item.id}>{item.value}</Item>}
    </ComboBox>
  );
};

// HOW TO USE IT
const Example = () => {
  const items = [
    { id: 1, value: 'Apple' },
    { id: 2, value: 'Banana' },
    { id: 3, value: 'Cherry' }
  ];

  return (
    <Form
      initialValues={{
        fruit: 'Apple'
      }}>
      <Input name="fruit" label="Fruit" items={items} />
      <Button type="submit" variant="primary">
        submit
      </Button>
      <Debug />
    </Form>
  );
};

export default Example;
