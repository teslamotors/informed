import React from 'react';
import useField from '../hooks/useField';

const asField = Component => props => {
  
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);
   
  return render(
    <Component
      fieldApi={fieldApi}
      fieldState={fieldState}
      field={props.field}
      forwardedRef={ref}
      debug={props.debug}
      type={props.type}
      {...userProps}
    />
  );
};

export default asField;
