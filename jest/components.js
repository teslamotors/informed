import React from 'react';
import { useForm, useField } from '../src';

export const Form = props => {
  const { formController, render, userProps } = useForm(props);

  return render(
    <form
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}
    />
  );
};

export const Input = props => {
  const { render, informed, userProps, fieldState, ref } = useField({
    type: 'text',
    ...props
  });
  const { label, id, ...rest } = userProps;
  const { showError } = fieldState;
  const style = showError ? { border: 'solid 1px red' } : null;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} style={style} />
      {showError && <small style={{ color: 'red' }}>{fieldState.error}</small>}
    </>
  );
};

export const Checkbox = props => {
  const { render, informed, userProps, ref } = useField({
    type: 'checkbox',
    ...props
  });
  const { label, id, ...rest } = userProps;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} />
    </>
  );
};

export const Select = props => {
  const { render, userProps, fieldState, fieldApi, ref } = useField(props);
  const { setValue, setTouched } = fieldApi;
  const { value, showError, error } = fieldState;
  const {
    id,
    onBlur,
    onChange,
    multiple,
    label,
    options,
    children,
    ...rest
  } = userProps;

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
