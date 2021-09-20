import React, { useState, useContext, useRef, useEffect, useMemo } from 'react';
import { useStateWithGetter } from './useStateWithGetter';
import { Debug } from '../debug';
import {
  ArrayFieldApiContext,
  ArrayFieldStateContext,
  FormControllerContext
} from '../Context';

import { uuidv4 } from '../utils';
import { ObjectMap } from '../ObjectMap';
import { useFieldApi } from './useFieldApi';

const logger = Debug('informed:useArrayField' + '\t');

export const useArrayField = ({
  name,
  initialValue,
  // validate,
  arrayFieldApiRef
  // ...props
}) => {
  // Grab the form register context
  const formController = useContext(FormControllerContext);

  // Hook onto the field api
  const fieldApi = useFieldApi(name);

  // Map will store all fields by name
  // Key => name
  // Val => fieldMetaRef
  // Why? so the array knows about all its field meta
  const [fieldsMap] = useState(() => new Map());

  const [
    initialValues,
    setInitialValues,
    getInitialValues
  ] = useStateWithGetter(() => {
    // If we already have value i.e "saved"
    // use that ( it was not removed on purpose! )
    if (formController.getValue(name)) {
      return formController.getValue(name);
    }
    return initialValue || formController.getInitialValue(name) || [];
  });

  // TODO Need to use saved state to initialize ( after being re rendered )
  const initialKeys = initialValues ? initialValues.map(() => uuidv4()) : [];

  const [keys, setKeys] = useState(initialKeys);

  const remove = i => {
    // Notify form to expect removal on the last field
    formController.lockRemoval({
      index: keys.length - 1,
      name
    });
    // Remove the key
    const newKeys = keys.slice(0, i).concat(keys.slice(i + 1, keys.length));
    setKeys(newKeys);
    // Remove the initial value ( user wanted to get rid of that input )
    const initVals = getInitialValues();
    const newInitialValues = initVals
      .slice(0, i)
      .concat(initVals.slice(i + 1, initVals.length));
    setInitialValues(newInitialValues);

    // We need to manually do a pull from the form state
    formController.pullOut(`${name}[${i}]`);
  };

  const swap = (a, b) => {
    logger('Swapping', `${name}[${a}] and ${name}[${b}]`);

    formController.swap(name, a, b);

    // Swap the keys
    const newKeys = [...keys];

    if (keys[a] && keys[b]) {
      newKeys[a] = keys[b];
      newKeys[b] = keys[a];
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        `Attempted to swap ${a} with ${b} but one of them does not exist :(`
      );
    }

    setKeys(newKeys);
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
    const initVals = initialValue || formController.getInitialValue(name) || [];
    // Set our initial values back to what the user set at beginning
    setInitialValues(initVals);
    // Build a new set of keys because everything is new !!!
    const resetKeys = initVals ? initVals.map(() => uuidv4()) : [];
    // Finally set that shit !
    setKeys(resetKeys);
    // Reset all children
    fieldsMap.forEach(fieldMeta => {
      fieldMeta.current.fieldApi.reset();
    });
  };

  // Create meta object
  const meta = {
    name,
    initialValue,
    fieldApi: {
      ...fieldApi,
      reset
    }
  };
  const metaRef = useRef(meta);
  metaRef.current = meta;

  // Register as if its a field muahhahaha
  useEffect(
    () => {
      formController.register(name, metaRef);
      return () => {
        formController.deregister(name);
      };
    },
    [name]
  );

  const fields = keys.map((key, i) => {
    const arrayFieldItemApi = {
      remove: () => remove(i)
    };

    const arrayFieldItemState = {
      initialValue: initialValues && initialValues[i],
      key,
      name: `${name}[${i}]`,
      index: i,
      parent: name
    };

    return {
      arrayFieldItemApi,
      arrayFieldItemState
    };
  });

  const arrayFieldApi = {
    add,
    swap,
    addWithInitialValue,
    reset
  };

  if (arrayFieldApiRef) {
    arrayFieldApiRef.current = arrayFieldApi;
  }

  const arrayFieldState = {
    fields,
    name
  };

  // Wrap the updater to update array fields references
  const wrappedController = useMemo(() => {
    return {
      ...formController,
      register: (n, m) => {
        fieldsMap.set(n, m);
        formController.register(n, m);
      },
      deregister: (n, m) => {
        fieldsMap.delete(n);
        formController.deregister(n, m);
      },
      getInitialValue: fieldName => {
        // If we are getting initial value and its for this field return that
        if (RegExp(`${name}\\[[0-9]+\\]`).test(fieldName)) {
          const path = fieldName.replace(name, '');
          const v = ObjectMap.get(getInitialValues(), path);
          logger(`Resetting ${path} to ${v}`);
          return v;
        }
        return formController.getInitialValue(fieldName);
      }
    };
  }, []);

  const render = children => (
    <FormControllerContext.Provider value={wrappedController}>
      <ArrayFieldApiContext.Provider value={arrayFieldApi}>
        <ArrayFieldStateContext.Provider value={arrayFieldState}>
          {children}
        </ArrayFieldStateContext.Provider>
      </ArrayFieldApiContext.Provider>
    </FormControllerContext.Provider>
  );

  return {
    render,
    arrayFieldState,
    arrayFieldApi
  };
};
