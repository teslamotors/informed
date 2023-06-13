import React from 'react';
import { useField } from 'informed';
import { TextField } from '@adobe/react-spectrum';

const Input = ({ type, ...props }) => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: type ?? 'text',
    ...props
  });
  const { required, disabled } = userProps;
  const { error, showError } = fieldState;
  return render(
    <TextField
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      isDisabled={disabled}
      {...userProps}
      {...informed}
      onChange={() => {}}
      // This is fucking stupid that they took over the native on change!!!
      onInput={e => {
        fieldApi.setValue(e.target.value, e);
      }}
      onBlur={e => {
        fieldApi.setTouched(true, e);
      }}
      ref={r => {
        if (!ref.current) {
          ref.current = !r ? ref.current : r.getInputElement();
        }
      }}
    />
  );
};

export default Input;
