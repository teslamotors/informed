import React, { useState } from 'react';
import useArrayField from '../hooks/useArrayField';

const ArrayField = ({ field, children, initialValue, validate }) => {

  const arrayField = useArrayField({ field, initialValue, validate});

  return children(arrayField);
};

export default ArrayField;
