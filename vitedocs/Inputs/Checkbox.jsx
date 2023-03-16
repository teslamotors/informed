import React from 'react';
import { useField } from 'informed';
import { Checkbox as SpectrumCheckbox, TextField } from '@adobe/react-spectrum';

const Checkbox = (props) => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'text',
    ...props,
  });
  const { required } = userProps;
  const { error, showError } = fieldState;
  return render(
    <SpectrumCheckbox
      ref={ref}
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      {...userProps}
      {...informed}
      isSelected={informed.value}
      onChange={(v) => fieldApi.setValue(v)}
    >
      {props.label}
    </SpectrumCheckbox>
  );
};

export default Checkbox;
