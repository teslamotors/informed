import React from 'react';
import withRadioGroup from '../../HOC/withRadioGroup';

const Radio = ({ radioGroupApi, radioGroupState, ...props }) => {
  const { value: groupValue } = radioGroupState;
  const {
    setValue,
    setTouched,
    onChange: groupOnChange,
    onBlur: groupOnBlur
  } = radioGroupApi;
  const {
    value,
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
      value={value}
      checked={groupValue === value}
      onChange={e => {
        if (!e.target.checked) {
          return;
        }
        setValue(value);
        if (onChange) {
          onChange(e);
        }
        if (groupOnChange) {
          groupOnChange(e);
        }
      }}
      onBlur={e => {
        setTouched(true);
        if (onBlur) {
          onBlur(e);
        }
        if (groupOnBlur) {
          groupOnBlur(e);
        }
      }}
      type="radio"
    />
  );
};

export { Radio as BasicRadio };

export default withRadioGroup(Radio);
