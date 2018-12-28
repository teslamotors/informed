import React from 'react';
import useField from '../hooks/useField';

const asField = Component => props => {
  const { field, validate, initialValue, ...rest } = props;
  const fieldProps = {
    validate,
    initialValue
  };
  const { fieldState, fieldApi } = useField(field, fieldProps);
  return (
    <Component
      fieldApi={fieldApi}
      fieldState={fieldState}
      field={field}
      {...rest}
    />
  );
};

export default asField;
