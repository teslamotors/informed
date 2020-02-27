import React, { useState, useMemo, useContext } from 'react';
import useFormApi from './useFormApi';
import useField from './useField';
import useStateWithGetter from './useStateWithGetter';
import Debug from '../debug';
import useLayoutEffect from './useIsomorphicLayoutEffect';
import { FormRegisterContext } from '../Context';

const logger = Debug('informed:useArrayField' + '\t');


// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const useArrayField = ({ field, initialValue, validate, ...props }) => {

  const formApi = useFormApi();

  // Grab the form register context
  const updater = useContext(FormRegisterContext);

  // May be scoped so get full field name!!
  const fullField = formApi.getFullField(field);

  const initialVals = formApi.getInitialValue(field) || initialValue || [];

  // TODO throw error if initial value and its not array

  // If keep state was passed into the child inputs we need to maintain the length of 
  // keys, in order to do so we grab the value from informeds api

  const keptValues = formApi.getSavedValue(fullField) && formApi.getSavedValue(fullField).value;

  const [initialValues, setInitialValues] = useState(keptValues || initialVals);

  const initialKeys = initialValues ? initialValues.map(() => uuidv4()) : [];

  const [keys, setKeys, getKeys] = useStateWithGetter(initialKeys);

  const validateWithLength = useMemo(() => (value, values) => {
    const length = getKeys() == null ? 0 : getKeys().length;
    return validate ? validate(value, length, values) : undefined;
  });

  // Register shadow field
  const { fieldApi } = useField({ field, validate: validateWithLength, shadow: true, ...props });

  // Register for events
  useLayoutEffect(() => {

    // Define event handler
    const onChangeHandler = (fieldName) => {

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
  }, [field]);



  const remove = i => {

    // Notify form to expect removal on this field
    logger('EXPECTING REMOVAL OF', `${field}[${i}] and ${field}[${keys.length - 1}]`);
    updater.expectRemoval(`${field}[${i}]`);
    updater.expectRemoval(`${field}[${keys.length - 1}]`);

    // Remove the key
    const newKeys = keys.slice(0, i).concat(keys.slice(i + 1, keys.length));
    setKeys(newKeys);
    // Remove the initial value ( user wanted to get rid of that input )
    const newInitialValues = initialValues.slice(0, i).concat(initialValues.slice(i + 1, initialValues.length));
    setInitialValues(newInitialValues);
    formApi.setInitialValue(field, newInitialValues);
  };

  const add = () => {
    keys.push(uuidv4());
    setKeys([...keys]);
  };

  const addWithInitialValue = (initialValue) => {
    keys.push(uuidv4());
    setKeys([...keys]);
    const newInitialValues = [...initialValues];
    newInitialValues[keys.length - 1] = initialValue;
    setInitialValues(newInitialValues);
  };

  const fields = keys.map((key, i) => ({
    key,
    field: `${field}[${i}]`,
    remove: () => remove(i),
    initialValue: initialValues && initialValues[i]
  }));

  return { fields, add, addWithInitialValue };
};

export default useArrayField;
