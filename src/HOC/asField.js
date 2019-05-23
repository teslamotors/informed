import React, { useState } from 'react';
import useField from '../hooks/useField';

const asField = Component =>  {
  
  return React.forwardRef(( props, userRef ) => {

    const { fieldState, fieldApi, render, ref, userProps } = useField(props, userRef);

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
  });
  
};

export default asField;
