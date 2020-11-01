import React, { useMemo } from 'react';
import { computeFieldsFromSchema } from '../utils';
import fieldMap from '../fieldMap';
import ArrayField from './ArrayField';
import Relevant from './Relevant';
import Debug from '../debug';

const logger = Debug('informed:FormFields' + '\t');

const FormComponents = ({ components }) => {
  if (!components) return null;

  return components.map((comp, i) => {
    const { 'ui:control': componentType } = comp;
    const Component = fieldMap[componentType];
    return <Component key={`ui-comp-${i}`} />;
  });
};

const FormFields = ({ schema, prefix, onlyValidateSchema }) => {
  // Get fields from scheama

  const fields = useMemo(
    () => {
      const schemaFields = computeFieldsFromSchema(
        schema,
        onlyValidateSchema,
        prefix
      );

      const mapedFields = schemaFields.map((schemaField, i) => {
        const {
          field,
          props,
          type,
          properties,
          items,
          componentType,
          uiBefore,
          uiAfter,
          allOf
        } = schemaField;

        const Component = fieldMap[componentType];

        // console.log('WTF', schemaField);
        logger('Rendering Field', field, schemaField);

        // Scope for nested
        if (!Component && type === 'object' && properties) {
          return (
            <FormFields
              schema={schemaField}
              prefix={field}
              key={`ScheamField-${i}`}
            />
          );
        }

        // Array field for array
        if (!Component && type === 'array' && items) {
          return (
            <ArrayField field={field} key={`ScheamField-${i}`}>
              <FormComponents components={uiBefore} />
              <ArrayField.Items>
                {({ field }) => (
                  <React.Fragment>
                    <FormComponents components={items['ui:before']} />
                    <FormFields schema={items} prefix={field} />
                    <FormComponents components={items['ui:after']} />
                  </React.Fragment>
                )}
              </ArrayField.Items>
              <FormComponents components={uiAfter} />
            </ArrayField>
          );
        }

        // For conditionals
        if (componentType === 'conditionals') {
          return allOf.map(conditional => {
            // Example then ( its a subschema )
            // then: {
            //   properties: {
            //     spouse: {
            //       type: 'string',
            //       title: 'Spouse name',
            //       'ui:control': 'input'
            //     }
            //   }
            // }
            const subSchema = conditional.then;

            // Turn the if into a when function for informed
            // Example if condition
            // if: {
            //   properties: {
            //     married: { const: 'yes' }
            //   },
            //   required: ['married']
            // },
            const { properties: conditions } = conditional.if;
            const when = ({ values }) => {
              // Example key "married, Example condition: "{ const: 'yes' }"
              return Object.keys(conditions).every(key => {
                const condition = conditions[key];
                // values.married === 'yes'
                return values[key] === condition.const;
              });
            };

            return (
              <Relevant key={`ScheamField-${i}`} when={when}>
                <FormFields schema={subSchema} />
              </Relevant>
            );
          });
        }

        // If no com ret null ( dont render )
        if (!Component) {
          return null;
        }

        return <Component key={`ScheamField-${i}`} field={field} {...props} />;
      });

      return mapedFields;
    },
    [schema, prefix]
  );

  return fields;
};

export default FormFields;
