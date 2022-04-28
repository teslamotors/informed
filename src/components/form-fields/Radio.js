import React from 'react';
import { useRadioGroup } from '../../hooks/useRadioGroup';

export const Radio = ({ label, value, ...props }) => {
  const { radioGroupApi, radioGroupState } = useRadioGroup();

  const { setValue, setTouched } = radioGroupApi;

  const { value: groupValue, showError } = radioGroupState;

  return (
    <label>
      {label}
      <input
        {...props}
        aria-invalid={!!showError}
        value={value}
        checked={groupValue === value}
        onChange={e => {
          if (!e.target.checked) {
            return;
          }
          setValue(value, e);
        }}
        onBlur={e => {
          setTouched(true, e);
        }}
        type="radio"
      />
    </label>
  );
};
