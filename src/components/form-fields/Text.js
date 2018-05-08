import React from 'react'
import asField from '../../HOC/asField';

const Text = ( { fieldApi, fieldState, ...props  } ) => {
  const {
    value
  } = fieldState;
  console.log("VAL", value);
  const {
    setValue
  } = fieldApi;
  const {
    onChange,
    ...rest
  } = props
  return (
    <input
        {...rest}
        value={!value && value !== 0 ? '' : value}
        onChange={e => {
          setValue(e.target.value)
          if (onChange) {
            onChange(e)
          }
        }}
      />
    )
};

export default asField(Text);
