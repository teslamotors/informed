import React from 'react';
import { useField } from 'informed';
import { TextField } from '@adobe/react-spectrum';

const Input = (props) => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'text',
    ...props,
  });
  const { required } = userProps;
  const { error, showError } = fieldState;
  return render(
    <TextField
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

export default Input;
