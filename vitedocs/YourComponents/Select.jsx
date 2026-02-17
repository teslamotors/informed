import React from 'react';
import { useField } from 'informed';
import { Item, Picker } from '@adobe/react-spectrum';

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

export default Input;
