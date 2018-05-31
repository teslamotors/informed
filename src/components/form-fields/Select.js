import React from 'react'
import asField from '../../HOC/asField';

const Select = ( { fieldApi, fieldState, ...props  } ) => {
  const {
    value
  } = fieldState;
  const {
    setValue,
    setTouched
  } = fieldApi;
  const {
    onChange,
    onBlur,
    forwardedRef,
    children,
    multiple,
    ...rest
  } = props
  return (
      <select
        {...rest}
        multiple={multiple}
        ref={forwardedRef}
        value={value || multiple ? [] : ''}
        onChange={e => {
          setValue(e.target.value)
          if (onChange) {
            onChange(e)
          }
        }}
        onBlur={e => {
          setTouched()
          if (onBlur) {
            onBlur(e)
          }
        }}
      >
        {children}
      </select>
    )
};

export default asField(Select);
