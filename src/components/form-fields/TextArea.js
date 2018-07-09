import React from 'react'
import asField from '../../HOC/asField';

const TextArea = ( { fieldApi, fieldState, ...props  } ) => {
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
    ...rest
  } = props
  return (
    <textarea
        {...rest}
        ref={forwardedRef}
        value={!value ? '' : value}
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
    />
  )
};

export {
  TextArea as BasicTextArea
};

export default asField(TextArea);
