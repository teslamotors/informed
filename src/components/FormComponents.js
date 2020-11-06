import React, { useContext } from 'react';
import { FormRegisterContext } from '../Context';

const FormComponents = ({ components }) => {
  // Get the field map off the forms context
  const { fieldMap } = useContext(FormRegisterContext);

  if (!components) return null;

  return components.map((comp, i) => {
    const { 'ui:control': componentType } = comp;
    const Component = fieldMap[componentType];
    return <Component key={`ui-comp-${i}`} />;
  });
};

export default FormComponents;
