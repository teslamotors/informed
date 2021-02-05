import React from 'react';
import useFormApi from '../hooks/useFormApi';
import FormFields from './FormFields';

const SchemaFields = () => {
  const { getOptions } = useFormApi();

  // Grap the schema
  const { schema } = getOptions();

  return <FormFields schema={schema} />;
};

export default SchemaFields;
