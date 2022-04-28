import React from 'react';
import { useField } from '../../hooks/useField';

export const Checkbox = props => {
  const { render, userProps, fieldState, fieldApi } = useField(props);
  const { setValue, setTouched } = fieldApi;
  const { value, error, showError } = fieldState;
  const { id, label, ...rest } = userProps;
  return render(
    <>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        {...rest}
        id={id}
        checked={!!value}
        aria-invalid={!!showError}
        aria-describedby={`${id}-error`}
        onChange={e => {
          setValue(e.target.checked, e);
        }}
        onBlur={e => {
          setTouched(true, e);
        }}
        type="checkbox"
      />
      {showError ? (
        <small role="alert" id={`${id}-error`}>
          {error}
        </small>
      ) : null}
    </>
  );
};
