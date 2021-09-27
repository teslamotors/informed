import React from 'react';
import { useRadioGroup } from '../../hooks/useRadioGroup';

export const Radio = ({ label, value, onChange, onBlur, ...props }) => {
  const {
    radioGroupApi,
    radioGroupState,
    onChange: groupOnChange,
    onBlur: groupOnBlur
  } = useRadioGroup();

  const { setValue, setTouched } = radioGroupApi;

  const { value: groupValue } = radioGroupState;

  return (
    <label>
      {label}
      <input
        {...props}
        value={value}
        checked={groupValue === value}
        onChange={e => {
          if (!e.target.checked) {
            return;
          }
          setValue(value);
          if (onChange) {
            onChange(e);
          }
          if (groupOnChange) {
            groupOnChange(e);
          }
        }}
        onBlur={e => {
          setTouched(true);
          if (onBlur) {
            onBlur(e);
          }
          if (groupOnBlur) {
            groupOnBlur(e);
          }
        }}
        type="radio"
      />
    </label>
  );
};
