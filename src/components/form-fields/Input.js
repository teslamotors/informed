import React from 'react';
import { useField } from '../../hooks/useField';

export const Input = React.memo(({ label, ...props }) => {
  const { render, userProps, ref, fieldState, fieldApi } = useField(props);
  const { setValue, setTouched } = fieldApi;
  const { maskedValue } = fieldState;
  const { onBlur, onChange } = userProps;
  return render(
    <label>
      {label}
      <input
        ref={ref}
        {...userProps}
        value={!maskedValue && maskedValue !== 0 ? '' : maskedValue}
        onChange={e => {
          setValue(e.target.value, e);
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
      />
    </label>
  );
});
