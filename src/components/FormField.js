import React, { useMemo } from 'react';
import { computeFieldFromProperty, getSchemaPathFromJsonPath } from '../utils';
import { ObjectMap } from '../ObjectMap';
import { useFormController } from '../hooks/useFormController';
import { useScope } from '../hooks/useScope';
import { Debug } from '../debug';
import { FormFields } from './FormFields';
import { ScopeContext } from '../Context';
// import { useForceUpdate } from '../hooks/useForceUpdate';
const logger = Debug('informed:FormField' + '\t');

const FormField = ({ name, schema }) => {
  // Get the field map off the forms context
  const { fieldMap, getOptions } = useFormController();

  // Name might be scoped
  const fullName = useScope(name);

  // Grab the schema
  const options = getOptions();

  // Magic trick
  // const forceUpdate = useForceUpdate();

  // IF schema was passed its a sub schema and we lookup via name otherwise we look at whole schema
  const lookupName = schema ? name : fullName;
  const lookupSchema = schema ?? options.schema;

  // First find property from the schema via the path to that field

  // Examples
  // field = "name" ---> properties.name
  // field = "brother.name" ---> properties.brother.properties.name
  // field = "brother.siblings[1].friend.name" ---> properties.brother.properties.siblings.items.properties.friend.properties.name
  const path = getSchemaPathFromJsonPath(lookupName);
  const property = ObjectMap.get(lookupSchema, path);

  // console.log(
  //   'Lookup Name:',
  //   lookupName,
  //   '\nSchema Path:',
  //   path,
  //   '\nProperty:',
  //   lookupSchema
  // );

  // If property was not found return null
  if (!property) {
    return null;
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
  // useEffect(
  //   () => {
  //     const listener = target => {
  //       if (target === name) {
  //         forceUpdate();
  //       }
  //     };

  //     emitter.on('relevant', listener);

  //     // When name changes we always force an update!
  //     forceUpdate();

  //     return () => {
  //       emitter.removeListener('relevant', listener);
  //     };
  //   },
  //   [name]
  // );

  const props = useMemo(() => {
    return { ...schemaProps };
  }, []);

  // Component is either on field map or components list passed in
  const Component =
    fieldMap[componentType] ??
    (options.components ? options.components[componentType] : null);

  // console.log('WTF', schemaField);
  logger('Rendering Field', name, schemaField);

  // Scope for nested
  if (!Component && type === 'object' && properties) {
    return (
      <ScopeContext.Provider value={name}>
        <FormFields schema={schemaField} />
      </ScopeContext.Provider>
    );
  }

  // Just component
  if (Component && type === 'object' && properties) {
    return (
      <ScopeContext.Provider value={name}>
        <Component>
          <FormFields schema={schemaField} />
        </Component>
      </ScopeContext.Provider>
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

  // Note we DONT pass in scoped name here because useField is already scoped
  return <Component name={name} {...props} />;
};

export { FormField };
