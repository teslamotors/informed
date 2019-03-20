import React, {useLayoutEffect} from 'react';
import asField from '../../HOC/asField';
import Debug from 'debug';
const logger = Debug('informed:Text' + '\t');

const Text = ({ fieldApi, fieldState, ...props }) => {
  const { maskedValue } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const {
    onChange,
    onBlur,
    field,
    initialValue,
    forwardedRef,
    debug,
    ...rest
  } = props;

  logger('Render', field);

  // for debugging
  useLayoutEffect(
    () => {
      if (debug && forwardedRef) {
        forwardedRef.current.style.background = 'red';
        setTimeout(() => {
          forwardedRef.current.style.background = 'white';
        }, 500);
      }
    }
  );

  return (
    <input
      {...rest}
      name={field}
      ref={forwardedRef}
      value={!maskedValue && maskedValue !== 0 ? '' : maskedValue}
      onChange={e => {
        setValue(e.target.value, e );
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
