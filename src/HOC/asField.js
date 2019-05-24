import React, { useState } from 'react';
import useField from '../hooks/useField';

const asField = Component =>  {
  
  const forwardRef = React.forwardRef(( props, userRef ) => {

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
  
  // const name = Component.displayName || Component.name;
  // forwardRef.displayName = name; 

  return forwardRef;
};

export default asField;
