import React from 'react';
import { useField } from 'informed';
import { Item, ComboBox } from '@adobe/react-spectrum';

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

export default Input;
