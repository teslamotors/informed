import React, { useMemo } from 'react';
import { computeFieldsFromSchema } from '../utils';
import fieldMap from '../fieldMap';
import Scope from './Scope';
import Debug from '../debug';

const logger = Debug('informed:FormFields' + '\t');

const FormFields = ({ schema, onlyValidateSchema }) => {
  // Get fields from scheama

  const fields = useMemo(
    () => {
      const schemaFields = computeFieldsFromSchema(schema, onlyValidateSchema);

      const mapedFields = schemaFields.map((schemaField, i) => {
        const { field, props, type, properties, componentType } = schemaField;

        const Component = fieldMap[componentType];

        // console.log('WTF', schemaField);
        logger('Rendering Field', field, schemaField);

        if (!Component && type === 'object' && properties) {
          return (
            <Scope scope={field} key={`ScheamField-${i}`}>
              <FormFields schema={schemaField} />
            </Scope>
          );
        }

        return <Component key={`ScheamField-${i}`} field={field} {...props} />;
      });

      return mapedFields;
    },
    [schema]
  );

  return fields;
};

export default FormFields;
