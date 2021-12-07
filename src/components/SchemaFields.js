import React from 'react';
import { useFormController } from '../hooks/useFormController';
import { FormFields } from './FormFields';

const SchemaFields = () => {
  const { getOptions } = useFormController();

  // Grap the schema
  const { schema } = getOptions();

  return <FormFields schema={schema} />;
};

export { SchemaFields };
