import React from 'react';
import { useField } from 'informed';
import { CheckboxGroup, Checkbox } from '@adobe/react-spectrum';

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
            return <Checkbox value={op.value}>{op.label}</Checkbox>;
          })
        : children}
    </CheckboxGroup>
  );
};

export default Input;
