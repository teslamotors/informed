import React, { useMemo, useEffect, useState } from 'react';
import {
  computeFieldFromProperty,
  getSchemaPathFromJsonPath,
  checkCondition,
  sanitize
} from '../utils';
import { ObjectMap } from '../ObjectMap';
import { useFormController } from '../hooks/useFormController';
import { useScope } from '../hooks/useScope';
import { useConditional } from '../hooks/useConditional';
import { Debug } from '../debug';
import { FormFields } from './FormFields';
import { Relevant } from './Relevant';
import { Scope } from './Scope';
import { useFieldApi } from '../hooks/useFieldApi';
import { useUpdateEffect } from '../hooks/useUpdateEffect';
// import { useForceUpdate } from '../hooks/useForceUpdate';
const logger = Debug('informed:FormField' + '\t');

const FormField = ({ name, schema, ...rest }) => {
  // Get the field map off the forms context
  const { fieldMap, getOptions, emitter } = useFormController();

  // Name might be scoped
  const fullName = useScope(name);

  // Grab the schema
  const options = getOptions();

  // Grap api
  const fieldApi = useFieldApi(name);

  // For conditional props
  const [condProp, setCondProp] = useState({});

  // IF schema was passed its a sub schema and we lookup via name otherwise we look at whole schema
  const lookupName = schema ? name : fullName;
  const lookupSchema = schema ?? options.schema;

  // First find property from the schema via the path to that field

  // Examples
  // field = "name" ---> properties.name
  // field = "brother.name" ---> properties.brother.properties.name
  // field = "brother.siblings[1].friend.name" ---> properties.brother.properties.siblings.items.properties.friend.properties.name
  const path = getSchemaPathFromJsonPath(lookupName);
  let property = ObjectMap.get(lookupSchema, path);

  // console.log(
  //   'Lookup Name:',
  //   lookupName,
  //   '\nSchema Path:',
  //   path,
  //   '\nProperty:',
  //   lookupSchema
  // );

  // If property was not found try to find it in conditions
  let condition;
  if (!property) {
    if (lookupSchema.allOf) {
      lookupSchema.allOf.forEach(item => {
        if (item.if) {
          property = ObjectMap.get(item.then, path);
          condition = item.if;
        }
      });
    }
    // If property was still not found return null
    if (!property) {
      return null;
    }
  }

  // Next compute the field from property
  const schemaField = useMemo(() => computeFieldFromProperty(name, property), [
    name
  ]);

  const {
    props: schemaProps,
    type,
    properties,
    items,
    componentType,
    uiBefore,
    uiAfter
  } = schemaField;

  // Register for events on our field
  useEffect(
    () => {
      const updater = (target, property) => {
        // Example
        // target="foo"
        // property =
        // {
        //     oneOf: [
        //       { const: '', title: '- Select -' },
        //       { const: 'modelS', title: 'Model S' },
        //       { const: 'modelX', title: 'Model X' },
        //       { const: 'model3', title: 'Model 3' }
        //     ]
        //   }

        if (target === name) {
          logger(
            `Updating field props for ${target}`,
            computeFieldFromProperty(name, property)
          );
          setCondProp(computeFieldFromProperty(name, property));
        }
      };

      const remover = target => {
        if (target === name) {
          setCondProp({});
        }
      };

      emitter.on('update-combine', updater);
      emitter.on('update-remove', remover);

      return () => {
        emitter.removeListener('update-combine', updater);
        emitter.removeListener('update-remove', remover);
      };
    },
    [name]
  );

  const hookProps = useConditional({
    name: schemaProps.name,
    evaluate: schemaProps.evaluate,
    evaluateWhen: schemaProps.evaluateWhen,
    dependsOn: schemaProps.dependsOn
  });

  // Combine any conditional props with the schema props
  const props = useMemo(
    () => {
      // Pull new props off of cond property
      const condProps = condProp.props;

      // Lay those on top of existing ones
      const newSchemaProps = sanitize(schemaProps);
      const newCondProps = sanitize(condProps);
      const newHookProps = sanitize(hookProps);

      // Temp fix
      if (
        schemaProps?.required ||
        newCondProps?.required ||
        newHookProps?.required
      ) {
        rest.required = true;
      }

      const newProps = {
        ...newSchemaProps,
        ...newCondProps,
        ...newHookProps,
        ...rest
      };
      logger(`Schema Props for ${name}`, newSchemaProps);
      logger(`Cond Props for ${name}`, newCondProps);
      logger(`Hook Props for ${name}`, newHookProps);
      logger(`New Props for ${name}`, newProps);
      return newProps;
    },
    [condProp, hookProps]
  );

  useUpdateEffect(
    () => {
      if (props.options) {
        logger('options changed', props.options);
        fieldApi.reset();
      }
    },
    [props.options]
  );

  // Component is either on field map or components list passed in
  let Component =
    fieldMap[componentType] ??
    (options.components ? options.components[componentType] : null);

  // Maybe its with options
  // Example adapter:
  //  withOptions: {
  //    array: CheckboxGroup,
  //  },
  if (schemaProps.options && fieldMap.withOptions && !items) {
    Component = fieldMap.withOptions[componentType] || Component;
    // console.log('HERE!!!!!', componentType, fieldMap.withOptions);
  }

  // console.log('WTF', schemaField);
  logger('Rendering Field', name, schemaField);

  // Scope for nested
  if (!Component && type === 'object' && properties) {
    return (
      <Scope scope={name}>
        <FormFields schema={schemaField} />
      </Scope>
    );
  }

  // Just component
  if (Component && type === 'object' && properties) {
    return (
      <Scope scope={name}>
        <Component {...props}>
          <FormFields schema={schemaField} />
        </Component>
      </Scope>
    );
  }

  // Array field for array ( if none was provided use our default )
  if (!Component && type === 'array' && items) {
    return (
      <ArrayField
        name={name}
        items={items}
        uiBefore={uiBefore}
        uiAfter={uiAfter}
        {...props}
      />
    );
  }

  // User created custom array field
  if (Component && componentType === 'array' && items && type === 'array') {
    return (
      <Component
        name={name}
        items={items}
        uiBefore={uiBefore}
        uiAfter={uiAfter}
        {...props}
      />
    );
  }

  // If no component return null ( dont render )
  if (!Component) {
    return null;
  }

  if (condition) {
    const { properties: conditions } = condition;
    const when = ({ formApi, scope }) => {
      // Example key "married, Example condition: "{ const: 'yes' }"
      return Object.entries(conditions).every(([propertyName, condition]) => {
        return checkCondition(
          condition,
          formApi.getValue(scope ? `${scope}.${propertyName}` : propertyName)
        );
      });
    };

    const Comp = () => (
      <Relevant when={when}>
        <Component name={name} {...props} />
      </Relevant>
    );

    // console.log('WTF', Component);

    return <Comp />;
  }

  // Note we DONT pass in scoped name here because useField is already scoped
  return <Component name={name} {...props} />;
};

export { FormField };
