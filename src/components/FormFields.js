import React, { useMemo } from 'react';
import { useFormController } from '../hooks/useFormController';
import { checkCondition, computeFieldsFromSchema, uuidv4 } from '../utils';
import { FormField } from './FormField';
import { Relevant } from './Relevant';
import { UpdateFields } from './UpdateFields';

// const logger = Debug('informed:FormFields' + '\t');

const FormFields = ({ schema, onlyValidateSchema }) => {
  const { getOptions } = useFormController();

  const { components: componentsMap } = getOptions();

  const fields = useMemo(
    () => {
      const { properties, conditions, components } = computeFieldsFromSchema(
        schema,
        onlyValidateSchema
      );

      let mappedProperties = properties.map(name => {
        // Not for
        // ui:component:id ---> foobar
        // Only for
        // ui:foobar ---> foobar
        if (name.includes('ui:') && name.split(':').length !== 3) {
          return {
            $id: name.split('ui:')[1]
          };
        }

        // Need to get required off schema
        const required =
          schema.required && schema.required.includes(name) ? true : undefined;

        const uuid = uuidv4();

        const Component = (
          <FormField
            name={name}
            schema={schema}
            key={`schema-field-${name}-${uuid}`}
            required={required}
          />
        );

        return {
          Component
        };
      });

      const mappedComponents = components.map(component => {
        // console.log('WTF', component);
        if (component['ui:control']) {
          const RenderedComponent = componentsMap[component['ui:control']];
          const Component = (
            <RenderedComponent>
              <FormFields schema={component} />
            </RenderedComponent>
          );

          return {
            Component,
            $id: component.$id
          };
        }
      });

      // For conditionals
      const mappedConditionals = conditions.map((conditional, j) => {
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
        // console.log('SUBSCHEMA', subSchema);
        const $id = conditional.$id;
        const thenProps = conditional.thenProps;

        // Turn the if into a when function for informed
        // Example if condition
        // if: {
        //   properties: {
        //     married: { const: 'yes' }
        //   },
        //   required: ['married']
        // },
        const { properties: conditions } = conditional.if;
        const when = ({ formApi, scope }) => {
          // Example key "married, Example condition: "{ const: 'yes' }"
          return Object.entries(conditions).every(
            ([propertyName, condition]) => {
              return checkCondition(
                condition,
                formApi.getValue(
                  scope ? `${scope}.${propertyName}` : propertyName
                )
              );
            }
          );
        };

        const Component = (
          <Relevant key={`Conditional-ScheamField-${j}`} when={when}>
            {subSchema ? <FormFields schema={subSchema} /> : null}
            {thenProps ? <UpdateFields schema={thenProps} /> : null}
          </Relevant>
        );

        return {
          Component,
          $id
        };
      });

      const mappedFields = [];

      // Iterate through the mapped properties
      mappedProperties.forEach(({ $id, Component }) => {
        if (Component) {
          mappedFields.push(Component);
        } else if ($id) {
          // Grab the id from the mapped conditionals
          const conditional = mappedConditionals.find(c => c.$id === $id);
          const component = mappedComponents.find(c => c.$id === $id);
          if (conditional) {
            mappedFields.push(conditional.Component);
            // Make sure to take it off so we dont render it twice ( defaults at the end )
            const index = mappedConditionals.findIndex(c => c.$id === $id);
            mappedConditionals.splice(index, 1);
          } else if (component) {
            mappedFields.push(component.Component);
          } else {
            console.error('MappedConditionals', mappedConditionals);
            throw new Error(`Unable to find mapping for ${$id}`);
          }
        } else {
          throw new Error('Found property with no ID or component...');
        }
      });

      // Add whatever is left at the end
      mappedConditionals.forEach(({ Component }) => {
        mappedFields.push(Component);
      });

      return mappedFields;
    },
    [schema]
  );

  return fields;
};

export { FormFields };
