import React, { useState } from 'react';
import useArrayField from '../hooks/useArrayField';

const ArrayField = ({ children, ...props }) => {

  const arrayField = useArrayField(props);

  return children(arrayField);
};

export default ArrayField;
