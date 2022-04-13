import React from 'react';
import { useFormController } from '../hooks/useFormController';

const FormComponents = ({ components }) => {
  // Get the field map off the forms context
  const { fieldMap, getOptions } = useFormController();

  // Grab the schema
  const options = getOptions();

  if (!components) return null;

  return components.map((comp, i) => {
    const { 'ui:control': componentType, 'ui:props': props } = comp;
    const Component =
      fieldMap[componentType] ??
      (options.components ? options.components[componentType] : null);
    return <Component key={`ui-comp-${i}`} {...props} />;
  });
};

export { FormComponents };
