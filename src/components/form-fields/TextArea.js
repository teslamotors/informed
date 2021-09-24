import React from 'react';
import { useField } from '../../hooks/useField';

export const TextArea = React.memo(({ label, ...props }) => {
  const { render, userProps, ref, fieldState, fieldApi } = useField(props);
  const { setValue, setTouched } = fieldApi;
  const { maskedValue } = fieldState;
  const { onBlur, onChange } = userProps;
  return render(
    <label>
      {label}
      <textarea
        ref={ref}
        {...userProps}
        value={!maskedValue ? '' : maskedValue}
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
