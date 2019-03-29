import React from 'react';
import useField from '../hooks/useField';

const asField = Component => props => {
  const { 
    field, 
    validate, 
    initialValue, 
    validateOnChange, 
    validateOnBlur,
    validateOnMount,
    maskOnBlur,
    allowEmptyStrings,
    onValueChange,
    notify,
    keepState,
    maintainCursor,
    debug,
    type,
    mask,
    format,
    parse,
    ...rest } = props;
  const fieldProps = {
    validate,
    initialValue, 
    validateOnChange, 
    validateOnBlur,
    onValueChange,
    validateOnMount,
    maskOnBlur,
    notify,
    keepState,
    maintainCursor,
    allowEmptyStrings,
    debug,
    type,
    mask,
    format,
    parse
  };

  const { fieldState, fieldApi, purify, ref } = useField(field, fieldProps);
   
  return purify(
    <Component
      fieldApi={fieldApi}
      fieldState={fieldState}
      field={field}
      forwardedRef={ref}
      debug={debug}
      type={type}
      {...rest}
    />, 
    Object.values(rest)
  );
};

export default asField;
