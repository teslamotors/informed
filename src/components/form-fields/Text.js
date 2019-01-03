import React from 'react';
import asField from '../../HOC/asField';
import Debug from 'debug';
const debug = Debug('informed:Text' + '\t');

const Text = ({ fieldApi, fieldState, ...props }) => {
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

  debug('Render', field);

  return (
    <input
      {...rest}
      name={field}
      ref={forwardedRef}
      value={!value && value !== 0 ? '' : value}
      onChange={e => {
        setValue(e.target.value);
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
    />
  );
};

export { Text as BasicText };

export default asField(Text);
