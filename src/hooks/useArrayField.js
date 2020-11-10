import React, { useState, useMemo, useContext, useRef } from 'react';
import useFormApi from './useFormApi';
import useField from './useField';
import useStateWithGetter from './useStateWithGetter';
import Debug from '../debug';
import useLayoutEffect from './useIsomorphicLayoutEffect';
import {
  FormRegisterContext,
  ArrayFieldApiContext,
  ArrayFieldStateContext
} from '../Context';

import { uuidv4 } from '../utils';
import ObjectMap from '../ObjectMap';

const logger = Debug('informed:useArrayField' + '\t');

const useArrayField = ({
  field,
  initialValue,
  validate,
  arrayFieldApiRef,
  ...props
}) => {
  // Reference to the form Api
  const formApi = useFormApi();

  // Keep track of fields that belong to this array field
  const [fieldsById] = useState(new Map());

  // Grab the form register context
  const updater = useContext(FormRegisterContext);

  // May be scoped so get full field name!!
  const fullField = formApi.getFullField(field);

  const initialVals = updater.getInitialValue(field) || initialValue || [];

  // TODO throw error if initial value and its not array

  // If keep state was passed into the child inputs we need to maintain the length of
  // keys, in order to do so we grab the value from informeds api

  const keptValues =
    formApi.getSavedValue(fullField) && formApi.getSavedValue(fullField).value;

  const [
    initialValues,
    setInitialValues,
    getInitialValues
  ] = useStateWithGetter(keptValues || initialVals);

  const initialKeys = initialValues ? initialValues.map(() => uuidv4()) : [];

  const [keys, setKeys, getKeys] = useStateWithGetter(initialKeys);

  const validateWithLength = useMemo(() => (value, values) => {
    const length = getKeys() == null ? 0 : getKeys().length;
    return validate ? validate(value, length, values) : undefined;
  });

  // Register shadow field
  const { fieldApi } = useField({
    field,
    validate: validate ? validateWithLength : undefined,
    shadow: true,
    ...props
  });

  // Register for events
  useLayoutEffect(
    () => {
      // Define event handler
      const onChangeHandler = fieldName => {
        // Dont do anythign if we updated
        if (fieldName === fullField) {
          return;
        }

        logger(`${fullField} changed`);

        // determine if one of our array children triggered this change
        if (RegExp(`${fullField}\\[[0-9]+\\]`).test(fieldName)) {
          // If it was we need to call validate
          fieldApi.validate();
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

  const remove = i => {
    // Notify form to expect removal on this field
    logger(
      'EXPECTING REMOVAL OF',
      `${field}[${i}] and ${field}[${keys.length - 1}]`
    );
    updater.expectRemoval(`${field}[${i}]`);
    updater.expectRemoval(`${field}[${keys.length - 1}]`);

    // Remove the key
    const newKeys = keys.slice(0, i).concat(keys.slice(i + 1, keys.length));
    setKeys(newKeys);
    // Remove the initial value ( user wanted to get rid of that input )
    const initVals = getInitialValues();
    const newInitialValues = initVals
      .slice(0, i)
      .concat(initVals.slice(i + 1, initVals.length));
    setInitialValues(newInitialValues);
    //formApi.setInitialValue(field, newInitialValues);
  };

  const add = () => {
    keys.push(uuidv4());
    setKeys([...keys]);
  };

  const addWithInitialValue = initialValue => {
    keys.push(uuidv4());
    setKeys([...keys]);
    const newInitialValues = [...getInitialValues()];
    newInitialValues[keys.length - 1] = initialValue;
    setInitialValues(newInitialValues);
  };

  const reset = () => {
    // When resetting we reset to the users initial value not the one tracked by this hook
    const initVals = updater.getInitialValue(field) || initialValue || [];
    // Set our initial values back to what the user set at beginning
    setInitialValues(initVals);
    // Build a new set of keys because everything is new !!!
    const resetKeys = initVals ? initVals.map(() => uuidv4()) : [];
    // Finally set that shit !
    setKeys(resetKeys);
  };

  const fields = keys.map((key, i) => {
    const arrayFieldItemApi = {
      remove: () => remove(i)
    };

    const arrayFieldItemState = {
      initialValue: initialValues && initialValues[i],
      key,
      field: `${field}[${i}]`,
      index: i
    };

    return {
      arrayFieldItemApi,
      arrayFieldItemState,
      // Makes it easier for users
      ...arrayFieldItemApi,
      ...arrayFieldItemState
    };
  });

  const arrayFieldApi = {
    add,
    addWithInitialValue,
    reset
  };

  if (arrayFieldApiRef) {
    arrayFieldApiRef.current = arrayFieldApi;
  }

  const arrayFieldState = {
    fields,
    field
  };

  // Wrap the updater to update array fields references
  const wrappedUpdator = {
    ...updater,
    register: (id, fld, ...args) => {
      fieldsById.set(id, fld);
      updater.register(id, fld, ...args);
    },
    deregister: (id, ...args) => {
      fieldsById.delete(id);
      updater.deregister(id, ...args);
    },
    getInitialValue: fieldName => {
      // If we are getting initial value and its for this field return that
      if (RegExp(`${fullField}\\[[0-9]+\\]`).test(fieldName)) {
        const path = fieldName.replace(field, '');
        const v = ObjectMap.get(getInitialValues(), path);
        logger(`Resetting ${path} to ${v}`);
        return v;
      }
      return updater.getInitialValue(fieldName);
    }
  };

  const render = children => (
    <FormRegisterContext.Provider value={wrappedUpdator}>
      <ArrayFieldApiContext.Provider value={arrayFieldApi}>
        <ArrayFieldStateContext.Provider value={arrayFieldState}>
          {children}
        </ArrayFieldStateContext.Provider>
      </ArrayFieldApiContext.Provider>
    </FormRegisterContext.Provider>
  );

  return {
    render,
    add,
    addWithInitialValue,
    fields,
    arrayFieldState,
    arrayFieldApi,
    field
  };
};

export default useArrayField;
