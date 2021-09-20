import React from 'react';
import { asField } from '../../HOC/asField';

const Checkbox = ({ fieldApi, fieldState, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const {
    onChange,
    onBlur,
    field,
    // eslint-disable-next-line no-unused-vars
    initialValue,
    // eslint-disable-next-line no-unused-vars
    debug,
    forwardedRef,
    id,
    label,
    ...rest
  } = props;
  return (
    <>
      {label ? <label htmlFor={id}> {label} </label> : null}

      <input
        {...rest}
        id={id}
        name={field}
        ref={forwardedRef}
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
    </>
  );
};

export { Checkbox as BasicCheckbox };

const WrappedCheckbox = asField(Checkbox);

export { WrappedCheckbox as Checkbox };
