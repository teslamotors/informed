import React, { useMemo } from 'react';
import { computeFieldsFromSchema } from '../utils';
import { FormField } from './FormField';
import { Relevant } from './Relevant';

// const logger = Debug('informed:FormFields' + '\t');

const FormFields = ({ schema, onlyValidateSchema }) => {
  const fields = useMemo(
    () => {
      const { fieldNames, allOf } = computeFieldsFromSchema(
        schema,
        onlyValidateSchema
      );

      let mappedFields = fieldNames.map((name, i) => {
        return (
          <FormField
            name={name}
            schema={schema}
            key={`schema-field-${name}-${i}`}
          />
        );
      });

      // For conditionals
      const mappedConditionals = allOf.map((conditional, j) => {
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
        const subSchema = {
          properties: conditional.then.relevantProperties
        };

        // Turn the if into a when function for informed
        // Example if condition
        // if: {
        //   properties: {
        //     married: { const: 'yes' }
        //   },
        //   required: ['married']
        // },
        const { properties: conditions } = conditional.if;
        const when = ({ formState: { values } }) => {
          // Example key "married, Example condition: "{ const: 'yes' }"
          return Object.keys(conditions).every(key => {
            const condition = conditions[key];
            // values.married === 'yes'
            return values[key] === condition.const;
          });
        };

        return (
          <Relevant key={`Conditional-ScheamField-${j}`} when={when}>
            <FormFields schema={subSchema} />
          </Relevant>
        );
      });

      mappedFields = [...mappedFields, ...mappedConditionals];

      return mappedFields;
    },
    [schema]
  );

  return fields;
};

export { FormFields };
