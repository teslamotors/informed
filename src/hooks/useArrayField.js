import React, { useState, useMemo } from 'react';
import useFormApi from './useFormApi';
import useField from './useField';
import useStateWithGetter from './useStateWithGetter';
import Debug from '../debug';
import useLayoutEffect from './useIsomorphicLayoutEffect';

const logger = Debug('informed:useArrayField' + '\t');

// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const useArrayField = ({ field, initialValue, validate, ...props }) => {
  const formApi = useFormApi();

  // May be scoped so get full field name!!
  const fullField = formApi.getFullField(field);

  const initialVals = formApi.getInitialValue(fullField) || initialValue || [];

  // TODO throw error if initial value and its not array

  const [initialValues, setInitialValues] = useState(initialVals);

  const initialKeys = initialValues ? initialValues.map(() => uuidv4()) : [];

  const [, setKeys, getKeys] = useStateWithGetter(initialKeys);

  const validateWithLength = useMemo(() => (value, values) => {
    const length = getKeys() == null ? 0 : getKeys().length;
    return validate ? validate(value, length, values) : undefined;
  });

  // NOTE: important that we use "field" and NOT full field as getter is scoped!
  const { fieldApi } = useField({
    field,
    validate: validateWithLength,
    shadow: true,
    ...props
  });

  // deferredUpdates is a map of field to value for fields which do not yet exist.
  // On every re-render, we will try to set the fields of all the deferredUpdates if the field exists.
  // The point is that we may receive an update for an array field which doesn't yet exist, so we will create the key.
  // The next time it renders the field will get created, and then the deferred update can be committed.
  const [deferredUpdates, setDeferredUpdates] = React.useState({});

  const remove = i => {
    const keys = getKeys();
    const newKeys = keys.slice(0, i).concat(keys.slice(i + 1, keys.length));
    setKeys(newKeys);
    const newInitialValues = initialValues
      .slice(0, i)
      .concat(initialValues.slice(i + 1, initialValues.length));
    setInitialValues(newInitialValues);
  };

  const add = () => {
    const keys = getKeys();
    keys.push(uuidv4());
    setKeys([...keys]);
  };

  const addWithInitialValue = initialValue => {
    const keys = getKeys();
    keys.push(uuidv4());
    setKeys([...keys]);
    const newInitialValues = [...initialValues];
    newInitialValues[keys.length - 1] = initialValue;
    setInitialValues(newInitialValues);
  };

  // Register for events
  useLayoutEffect(
    () => {
      // Define event handler
      const onChangeHandler = (fieldName, vals, recursiveFlag) => {
        if (fieldName === fullField) {
          const values = formApi.getValue(field);
          if (values !== undefined && Array.isArray(values)) {
            const makeDeferredUpdates = (v, prefix) => {
              // If the field exists, then it would have already been set. So ignore it here.
              if (formApi.fieldExists(prefix)) {
                return;
              }

              // Defer the updates as is appropriate based on the data type which is being deferred.
              if (Array.isArray(v)) {
                deferredUpdates[prefix] = v;
              } else if (typeof v === 'object') {
                Object.keys(v).forEach(key => {
                  makeDeferredUpdates(v[key], prefix + '.' + key);
                });
              } else {
                deferredUpdates[prefix] = v;
              }
            };

            let keys = getKeys();

            // Add missing fields to keys and defer the update to the field since it won't yet exist.
            for (let i = keys.length; i < values.length; i++) {
              keys.push(uuidv4());
              makeDeferredUpdates(values[i], `${fullField}[${i}]`);
            }

            // Only delete when no changes have been deferred and this was a recursive call
            if (
              Object.keys(deferredUpdates).length === 0 &&
              recursiveFlag === undefined
            ) {
              keys = keys.slice(0, values.length);
            }

            setDeferredUpdates(deferredUpdates);
            setKeys([...keys]);
          }
        }

        logger(`${fullField} changed`);

        // determine if one of our array children triggered this change
        if (RegExp(`${fullField}\\[[0-9]+\\]`).test(fieldName)) {
          // If it was then update the shadow field!!!
          // NOTE: important that we use "field" and NOT full field as getter is scoped!
          const arrayFieldValue = formApi.getValue(field);
          logger(`setting array field ${fullField} to ${arrayFieldValue}`);
          // Call ourselves with the recursiveFlag set in order to set the field value
          onChangeHandler(fullField, arrayFieldValue, true);
        }
      };

      // Register for events
      formApi.emitter.on('value', onChangeHandler);

      // Unregister events
      return () => {
        formApi.emitter.removeListener('value', onChangeHandler);
      };
    },
    [field]
  );

  const fields = getKeys().map((key, i) => ({
    key,
    field: `${field}[${i}]`,
    remove: () => remove(i),
    initialValue: initialValues && initialValues[i]
  }));

  // For each of the deferredUpdates check if the field exists, and if it does then perform the update and remove it from deferredUpdates.
  const len = Object.keys(deferredUpdates).length;
  Object.keys(deferredUpdates).forEach(field => {
    if (formApi.fieldExists(field)) {
      const v = deferredUpdates[field];
      delete deferredUpdates[field];
      if (formApi.getValue(field) !== v) formApi.setValue(field, v);
    }
  });
  // If we changed deferredUpdates (meaning that we removed one or more keys), then save it back. 
  // Without this check it will call setState every time which is an infinite loop.
  if (len !== Object.keys(deferredUpdates).length) {
    setDeferredUpdates(deferredUpdates);
  }

  return { fields, add, addWithInitialValue };
};

export default useArrayField;
