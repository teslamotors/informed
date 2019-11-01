import React from 'react';
import useField from '../hooks/useField';
import { getChildDisplayName } from '../utils';

const asField = Component => {
  const forwardRef = React.forwardRef((props, userRef) => {
    const { fieldState, fieldApi, render, ref, userProps } = useField(
      props,
      userRef
    );

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

  forwardRef.displayName = `asField(${getChildDisplayName(Component)})`;

  return forwardRef;
};

export default asField;
