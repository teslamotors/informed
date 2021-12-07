import React from 'react';
import { computeFieldFromProperty, getSchemaPathFromJsonPath } from '../utils';
import { ObjectMap } from '../ObjectMap';
import { useFormController } from '../hooks/useFormController';
import { useScope } from '../hooks/useScope';

const FormField = ({ name }) => {
  // Get the field map off the forms context
  const { fieldMap, getOptions } = useFormController();

  // Name might be scoped
  const fullName = useScope(name);

  // Grap the schema
  const { schema } = getOptions();

  // First find property from the schema via the path to that field

  // Examples
  // field = "name" ---> properties.name
  // field = "brother.name" ---> properties.brother.properties.name
  // field = "brother.siblings[1].friend.name" ---> properties.brother.properties.siblings.items[1].properties.friend.properties.name
  const path = getSchemaPathFromJsonPath(fullName);
  const property = ObjectMap.get(schema, path);

  // If property was not found return null
  if (!property) {
    return null;
  }

  // Next compute the field from property
  const schemaField = computeFieldFromProperty(name, property);

  const { props, componentType } = schemaField;

  const Component = fieldMap[componentType];

  // Note we DONT pass in scoped name here
  return <Component name={name} {...props} />;
};

export { FormField };
