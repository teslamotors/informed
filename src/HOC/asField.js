import React from 'react';
import useField from '../hooks/useField';

const asField = Component => props => {
  const { 
    field, 
    validate, 
    initialValue, 
    validateOnChange, 
    validateOnBlur,
    onValueChange,
    notify,
    keepState,
    debug,
    ...rest } = props;
  const fieldProps = {
    validate,
    initialValue, 
    validateOnChange, 
    validateOnBlur,
    onValueChange,
    notify,
    keepState,
    debug
  };

  const { fieldState, fieldApi, purify, ref } = useField(field, fieldProps);
   
  return purify(
    <Component
      fieldApi={fieldApi}
      fieldState={fieldState}
      field={field}
      forwardedRef={ref}
      debug={debug}
      {...rest}
    />
  );
};

export default asField;
