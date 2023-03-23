import React from 'react';
import { useField } from 'informed';
import { TextArea } from '@adobe/react-spectrum';

const TextAreaInput = props => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'text',
    ...props
  });
  const { required, disabled } = userProps;
  const { error, showError } = fieldState;
  return render(
    <TextArea
      ref={ref}
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      isDisabled={disabled}
      {...userProps}
      {...informed}
      onChange={v => fieldApi.setValue(v)}
    />
  );
};

export default TextAreaInput;
