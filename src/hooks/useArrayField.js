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
import { useScope } from './useScope';
import { useFormApi } from './useFormApi';

const logger = Debug('informed:useArrayField' + '\t');

export const useArrayField = ({
  name: userName,
  initialValue,
  defaultValue,
  // validate,
  arrayFieldApiRef
  // hidden
  // ...props
}) => {
  // Name might be scoped
  const name = useScope(userName);

  // Grab the form register context
  const formController = useContext(FormControllerContext);

  // Hook onto the field api
  const fieldApi = useFieldApi(name);

  // Gook onto the form api
  const formApi = useFormApi();

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
    return (
      initialValue || formController.getInitialValue(name) || defaultValue || []
    );
  });

  // TODO Need to use saved state to initialize ( after being re rendered )
  const initialKeys = Array.isArray(initialValues)
    ? initialValues.map(() => uuidv4())
    : [];

  const [keys, setKeys, getKeys] = useStateWithGetter(initialKeys);

  const remove = i => {
    // Always get ref to latest keys
    const ks = getKeys();

    // Notify form to expect removal on the last field
    formController.lockRemoval({
      index: ks.length - 1,
      name
    });
    // Remove the key
    const newKeys = ks.slice(0, i).concat(ks.slice(i + 1, ks.length));
    setKeys(newKeys);
    // Remove the initial value ( user wanted to get rid of that input )
    const initVals = getInitialValues();
    const newInitialValues = initVals
      .slice(0, i)
      .concat(initVals.slice(i + 1, initVals.length));
    setInitialValues(newInitialValues);

    // We need to manually do a pull from the form state
    formController.pullOut(`${name}[${i}]`);
    formApi.setDirt(name, []);
    formController.emitter.emit('field-value-set', name);
  };

  const swap = (a, b) => {
    logger('Swapping', `${name}[${a}] and ${name}[${b}]`);

    formController.swap(name, a, b);

    // Always get ref to latest keys
    const ks = getKeys();

    // Swap the keys
    const newKeys = [...ks];

    if (ks[a] && ks[b]) {
      newKeys[a] = ks[b];
      newKeys[b] = ks[a];
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        `Attempted to swap ${a} with ${b} but one of them does not exist :(`
      );
    }

    setKeys(newKeys);
  };

  const add = (amount = 1) => {
    const ks = getKeys();
    // if 'amount' is not defined, run the default behavior to add 1 field
    if (typeof amount !== 'number' || !Number(amount) || amount <= 0) {
      ks.push(uuidv4());
    } else {
      for (let i = 0; i < amount; i++) {
        ks.push(uuidv4());
      }
    }
    setKeys([...ks]);

    // If we added a new field we are no longer pristine
    formApi.setPristine(false);
    formApi.setDirt(name, []);
    formController.emitter.emit('field-value-set', name);
  };

  const addWithInitialValue = initialValue => {
    const ks = getKeys();
    ks.push(uuidv4());
    setKeys([...ks]);
    const newInitialValues = [...getInitialValues()];
    newInitialValues[ks.length - 1] = initialValue;
    setInitialValues(newInitialValues);
  };

  const initialValueRef = useRef();
  initialValueRef.current = initialValue;

  const reset = () => {
    // First wipe the existing state
    // Array fields are unique.. because reset will create new keys everything below gets wiped
    // So, we can start by simply wiping out the state below here ( same thing we do at form level reset )
    // ^^ By this I mean in form level reset we first wipe the form state :) so we can do same thing here!
    formController.remove(name);
    // When resetting we reset to the users initial value not the one tracked by this hook
    const initVals =
      initialValueRef.current ||
      formController.getInitialValue(name) ||
      defaultValue ||
      [];

    // Set our initial values back to what the user set at beginning
    setInitialValues(initVals);
    // Build a new set of keys because everything is new !!!
    const resetKeys = initVals ? initVals.map(() => uuidv4()) : [];
    // Finally set that shit !
    setKeys(resetKeys);
  };

  // Create meta object
  const meta = {
    name,
    initialValue,
    fieldApi: {
      ...fieldApi,
      reset
    },
    arrayField: true
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

  const arrayFieldApi = useMemo(() => {
    return {
      add,
      remove,
      swap,
      addWithInitialValue,
      reset
    };
  }, []);

  if (arrayFieldApiRef) {
    arrayFieldApiRef.current = arrayFieldApi;
  }

  const arrayFieldState = {
    fields,
    name
    // hidden
  };

  // Wrap the updater to update array fields references
  const wrappedController = useMemo(
    () => {
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
    },
    [name]
  );

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
