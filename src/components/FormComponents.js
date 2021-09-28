import React from 'react';
import { useFormController } from '../hooks/useFormController';

const FormComponents = ({ components }) => {
  // Get the field map off the forms context
  const { fieldMap } = useFormController();

  if (!components) return null;

  return components.map((comp, i) => {
    const { 'ui:control': componentType } = comp;
    const Component = fieldMap[componentType];
    return <Component key={`ui-comp-${i}`} />;
  });
};

export { FormComponents };
