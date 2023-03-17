import React from 'react';
import { useField } from 'informed';
import { Slider, TextField } from '@adobe/react-spectrum';

const Input = (props) => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'number',
    ...props,
  });
  const { required } = userProps;
  const { error, showError } = fieldState;
  return render(
    <Slider
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
