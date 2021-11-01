import React from 'react';
import { useField } from '../../hooks/useField';

export const Input = React.memo(props => {
  const { render, userProps, ref, fieldState, fieldApi } = useField(props);
  const { setValue, setTouched, setFocused } = fieldApi;
  const { maskedValue, showError, error } = fieldState;
  const { label, id, ...rest } = userProps;
  return render(
    <>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        ref={ref}
        id={id}
        {...rest}
        value={!maskedValue && maskedValue !== 0 ? '' : maskedValue}
        onChange={e => {
          setValue(e.target.value, e);
        }}
        onBlur={e => {
          setTouched(true, e);
        }}
        onFocus={e => {
          setFocused(true, e);
        }}
        aria-invalid={!!showError}
        aria-describedby={`${id}-error`}
      />
      {showError ? (
        <small role="alert" id={`${id}-error`}>
          {error}
        </small>
      ) : null}
    </>
  );
});
