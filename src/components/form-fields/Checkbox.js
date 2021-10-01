import React from 'react';
import { useField } from '../../hooks/useField';

export const Checkbox = ({ label, ...props }) => {
  const { render, userProps, fieldState, fieldApi } = useField(props);
  const { setValue, setTouched } = fieldApi;
  const { value } = fieldState;
  const { onBlur, onChange } = userProps;
  return render(
    <label>
      {label}
      <input
        {...userProps}
        checked={!!value}
        onChange={e => {
          setValue(e.target.checked);
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={e => {
          setTouched(true);
          if (onBlur) {
            onBlur(e);
          }
        }}
        type="checkbox"
      />
    </label>
  );
};
