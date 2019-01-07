import React from 'react';
import useFieldApi from '../hooks/useFieldApi';

const withFieldApi = field => Component => (props) => {
  const fieldApi = useFieldApi( field );
  return <Component fieldApi={fieldApi} {...props} />;
};

export default withFieldApi;
