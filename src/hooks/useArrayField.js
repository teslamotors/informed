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
          // Call ourselves with the recursiveFlag set
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

  const len = Object.keys(deferredUpdates).length;
  Object.keys(deferredUpdates).forEach(field => {
    if (formApi.fieldExists(field)) {
      const v = deferredUpdates[field];
      delete deferredUpdates[field];
      if (formApi.getValue(field) !== v) formApi.setValue(field, v);
    }
  });
  if (len !== Object.keys(deferredUpdates).length) {
    setDeferredUpdates(deferredUpdates);
  }

  return { fields, add, addWithInitialValue };
};

export default useArrayField;
