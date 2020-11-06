import React, { useMemo, useContext } from 'react';
import { computeFieldsFromSchema } from '../utils';
import ArrayField from './form-fields/ArrayField';
import Relevant from './Relevant';
import Debug from '../debug';
import { FormRegisterContext } from '../Context';

const logger = Debug('informed:FormFields' + '\t');

const FormFields = ({ schema, prefix, onlyValidateSchema }) => {
  // Get the field map off the forms context
  const { fieldMap } = useContext(FormRegisterContext);

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

        // Array field for array ( if none was provided use our default )
        if (!Component && type === 'array' && items) {
          return (
            <ArrayField
              key={`ScheamField-${i}`}
              field={field}
              items={items}
              uiBefore={uiBefore}
              uiAfter={uiAfter}
              {...props}
            />
          );
        }

        // User created custom array field
        if (
          Component &&
          componentType === 'array' &&
          items &&
          type === 'array'
        ) {
          return (
            <Component
              key={`ScheamField-${i}`}
              field={field}
              items={items}
              uiBefore={uiBefore}
              uiAfter={uiAfter}
              {...props}
            />
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
