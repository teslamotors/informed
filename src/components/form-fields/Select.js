import React from 'react';
import { useField } from '../../hooks/useField';

export const Select = props => {
  const { render, userProps, fieldState, fieldApi, ref } = useField(props);
  const { setValue, setTouched } = fieldApi;
  const { value, showError, error } = fieldState;
  const { id, onBlur, multiple, label, options, children, ...rest } = userProps;

  const handleChange = e => {
    let selected = Array.from(ref.current)
      .filter(option => option.selected)
      .map(option => option.value);

    setValue(multiple ? selected : selected[0] || '', e);
  };

  return render(
    <>
      {label ? <label htmlFor={id}> {label} </label> : null}
      <select
        {...rest}
        id={id}
        multiple={multiple}
        ref={ref}
        value={value || (multiple ? [] : '')}
        aria-invalid={!!showError}
        aria-describedby={`${id}-error`}
        onChange={handleChange}
        onBlur={e => {
          setTouched(true);
          if (onBlur) {
            onBlur(e);
          }
        }}>
        {options
          ? options.map(option => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}>
              {option.label}
            </option>
          ))
          : children}
      </select>
      {showError ? (
        <small role="alert" id={`${id}-error`}>
          {error}
        </small>
      ) : null}
    </>
  );
};
