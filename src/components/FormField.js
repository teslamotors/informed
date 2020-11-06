import React, { useContext } from 'react';
import useFormApi from '../hooks/useFormApi';
import { computeFieldFromProperty, getSchemaPathFromJsonPath } from '../utils';
import ObjectMap from '../ObjectMap';
import { FormRegisterContext } from '../Context';

const FormField = ({ field }) => {
  // Get the field map off the forms context
  const { fieldMap } = useContext(FormRegisterContext);

  // Grab the form api ( we need it to get the actual field name because might be in scope )
  const { getFullField, getOptions } = useFormApi();

  // Grab the full field
  const fullField = getFullField(field);

  // Grap the schema
  const { schema } = getOptions();

  // First find property from the schema via the path to that field

  // Examples
  // field = "name" ---> properties.name
  // field = "brother.name" ---> properties.brother.properties.name
  // field = "brother.siblings[1].friend.name" ---> properties.brother.properties.siblings.items[1].properties.friend.properties.name
  const path = getSchemaPathFromJsonPath(fullField);
  const property = ObjectMap.get(schema, path);

  // If property was not found return null
  if (!property) {
    return null;
  }

  // Next compute the field from property
  const schemaField = computeFieldFromProperty(field, property);

  const { props, componentType } = schemaField;

  const Component = fieldMap[componentType];

  return <Component field={field} {...props} />;
};

export default FormField;
