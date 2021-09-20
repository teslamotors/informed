import React from 'react';
import { useField } from '../../hooks/useField';

export const Select = ({ label, options, children, ...props }) => {
  const { render, userProps, fieldState, fieldApi } = useField(props);
  const { setValue, setTouched } = fieldApi;
  const { value } = fieldState;
  const { id, onBlur, onChange, multiple, ref } = userProps;

  const handleChange = e => {
    let selected = Array.from(ref.current)
      .filter(option => option.selected)
      .map(option => option.value);

    setValue(multiple ? selected : selected[0] || '');

    if (onChange && e) {
      onChange(e);
    }
  };

  return render(
    <>
      {label ? <label htmlFor={id}> {label} </label> : null}
      <select
        {...userProps}
        value={value || (multiple ? [] : '')}
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
    </>
  );
};
