import React from 'react';
import asField from '../../HOC/asField';
import Debug from '../../debug';
import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';
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
    label,
    title,
    id,
    ...rest
  } = props;

  logger('Render', field);

  // for debugging
  useLayoutEffect(() => {
    if (debug && forwardedRef) {
      forwardedRef.current.style.background = 'red';
      setTimeout(() => {
        forwardedRef.current.style.background = 'white';
      }, 500);
    }
  });

  return (
    <>
      {label ? <label htmlFor={id}> {label} </label> : null}
      <input
        {...rest}
        id={id}
        name={field}
        ref={forwardedRef}
        value={!maskedValue && maskedValue !== 0 ? '' : maskedValue}
        onChange={e => {
          setValue(e.target.value, e);
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
    </>
  );
};

export { Text as BasicText };

export default asField(Text);
