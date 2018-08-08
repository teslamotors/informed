import React from 'react';
import asField from '../../HOC/asField';

const Checkbox = ({ fieldApi, fieldState, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const {
    onChange,
    onBlur,
    field,
    initialValue,
    forwardedRef,
    ...rest
  } = props;
  return (
    <input
      {...rest}
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
        setTouched();
        if (onBlur) {
          onBlur(e);
        }
      }}
      type="checkbox"
    />
  );
};

export { Checkbox as BasicCheckbox };

export default asField(Checkbox);
