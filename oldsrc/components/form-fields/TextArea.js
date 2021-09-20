import React from 'react';
import { asField } from '../../HOC/asField';
import { useIsomorphicLayoutEffect as useLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';

const TextArea = ({ fieldApi, fieldState, ...props }) => {
  const { maskedValue } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const {
    onChange,
    onBlur,
    field,
    // eslint-disable-next-line no-unused-vars
    initialValue,
    forwardedRef,
    debug,
    label,
    id,
    ...rest
  } = props;

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
      <textarea
        {...rest}
        id={id}
        name={field}
        ref={forwardedRef}
        value={!maskedValue ? '' : maskedValue}
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

export { TextArea as BasicTextArea };

const WrappedText = asField(TextArea);

export { WrappedText as TextArea };
