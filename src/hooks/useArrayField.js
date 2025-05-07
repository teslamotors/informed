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
import { useFieldSubscription } from './useFieldSubscription';

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

  // For knowing if we are performing reset
  const resetRef = useRef(false);

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

  const add = (amount = 1, prepend = false) => {
    const ks = getKeys();
    // if 'amount' is not defined, run the default behavior to add 1 field
    if (typeof amount !== 'number' || !Number(amount) || amount <= 0) {
      prepend ? ks.unshift(uuidv4()) : ks.push(uuidv4());
    } else {
      for (let i = 0; i < amount; i++) {
        prepend ? ks.unshift(uuidv4()) : ks.push(uuidv4());
      }
    }
    setKeys([...ks]);

    // If we added a new field we are no longer pristine
    formApi.setPristine(false);
    formApi.setDirt(name, []);
    formController.emitter.emit('field-value-set', name);
  };

  const addWithInitialValue = (initialValue, prepend = false) => {
    const ks = getKeys();
    prepend ? ks.unshift(uuidv4()) : ks.push(uuidv4());
    setKeys([...ks]);
    const newInitialValues = prepend ? [initialValue, ...getInitialValues()] : [...getInitialValues(), initialValue];
    setInitialValues(newInitialValues);
  };

  const initialValueRef = useRef();
  initialValueRef.current = initialValue;

  const defaultValueRef = useRef();
  defaultValueRef.current = defaultValue;

  const reset = () => {
    // First wipe the existing state
    // Array fields are unique.. because reset will create new keys every field will get unmounted
    // So, we can start by simply wiping out the keys below here ( same thing we do at form level reset )
    // this will result in all fields performing their cleanup rutines
    logger(`------------ ${name} Array Field Reset Start ------------`);
    // Performing reset so we set the flag
    resetRef.current = true;
    // Remove array field
    formController.remove(name);
    // Build new initial values
    const initVals =
      initialValueRef.current ||
      formController.getInitialValue(name) ||
      defaultValueRef.current ||
      [];
    // Set our initial values back to what the user set at beginning
    setInitialValues(initVals);
    // Clear out keys ( we wait until all fields have deregistered before resetting )
    setKeys([]);

    // ---vv Special case when there are no fields so we do it right away vv---
    if (!fieldsMap.size && resetRef.current) {
      // V important we flag that we are done performing reset as all fields have deregistered
      resetRef.current = false;
      // For debug logging we show when complete
      logger(`------------ ${name} Array Field Reset End ------------`);
      const initVals = getInitialValues();
      // Build a new set of keys because everything is new !!!
      const resetKeys = initVals ? initVals.map(() => uuidv4()) : [];
      // Finally set that shit !
      setKeys(resetKeys);
    }
    // ---^^ Special case when there are no fields so we do it right away ^^---
  };

  const clear = () => {
    formController.remove(name);
    setInitialValues([]);
    setKeys([]);
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
      reset,
      clear
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
        deregister: n => {
          formController.deregister(n);
          // Remove from our map
          fieldsMap.delete(n);
          // On last deregister we finally complete
          // console.log(`${name}-WTF1`, fieldsMap.size);
          // console.log(`${name}-WTF2`, resetRef.current);
          // NOTE: I originally tried to put the below logic inside of remove
          // However this cuases issues because deregister is called with the correct name where remove may have old name
          // Example  [ 0, 1, 2 ] if we remove 1 then 2 moves to 1s place
          if (!fieldsMap.size && resetRef.current) {
            // V important we flag that we are done performing reset as all fields have deregistered
            resetRef.current = false;
            // For debug logging we show when complete
            logger(`------------ ${name} Array Field Reset End ------------`);
            const initVals = getInitialValues();
            // Build a new set of keys because everything is new !!!
            const resetKeys = initVals ? initVals.map(() => uuidv4()) : [];
            // Finally set that shit !
            setKeys(resetKeys);
          }
        },
        getInitialValue: fieldName => {
          // If we are getting initial value and its for this field return that

          // Case1:
          // name      = "friends"
          // fieldName = "friends[0].name"
          //
          // Case2:
          // name      = "friends[0].siblings"
          // fieldName = "friends[0].siblings[0].name"

          // Use a regex to specifically target the last [0-9]+ and anything that follows
          let modifiedFieldName = fieldName.replace(/(\[[0-9]+\])[^[\]]*$/, '');

          // Check if they match
          if (modifiedFieldName === name) {
            const path = fieldName.replace(name, '');
            const v = ObjectMap.get(getInitialValues(), path);
            logger(`Getting initial value for ${path} which is ${v}`);
            return v;
          }
          return formController.getInitialValue(fieldName);
        }
      };
    },
    [name]
  );

  useFieldSubscription(
    'clear',
    [name],
    target => {
      logger(`clear event triggered for ${name} because of ${target}`);
      clear();
    },
    false, // No scope ( lol ) because we are already scoped
    true // Flip order of target comparison
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
