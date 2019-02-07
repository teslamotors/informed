import React from 'react';
import useFieldState from '../hooks/useFieldState';

const withFieldState = field => Component => props => {
  const fieldState = useFieldState(field);
  return <Component fieldState={fieldState} {...props} />;
};

export default withFieldState;