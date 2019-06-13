import React, { useState, useLayoutEffect, useMemo } from 'react';
import useFormApi from './useFormApi';
import useField from './useField';
import useStateWithGetter from './useStateWithGetter';
import Debug from '../debug';

const logger = Debug('informed:useArrayField'+ '\t');


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

  const initialVals = formApi.getInitialValue(field) || initialValue || [];

  // TODO throw error if initial value and its not array

  const [initialValues, setInitialValues] = useState(initialVals);

  const initialKeys = initialValues ? initialValues.map(() => uuidv4()) : [];

  const [keys, setKeys, getKeys] = useStateWithGetter(initialKeys);

  const validateWithLength = useMemo( () => ( value, values ) => { 
    const length = getKeys() == null ? 0 : getKeys().length;
    return validate ? validate( value, length, values ) : undefined;
  });

  const { fieldApi } = useField({ field, validate: validateWithLength, shadow: true, ...props });

  // Register for events
  useLayoutEffect(()=>{

    // Define event handler
    const onChangeHandler = ( fieldName  ) => {

      // Dont do anythign if we updated
      if( fieldName === field ){
        return;
      }
      
      logger(`${fieldName} changed`);

      // determine if one of our array children triggered this change 
      if( RegExp(`${field}\\[[0-9]+\\]`).test(fieldName) ) {
        // If it was than update the shadow field!!! 
        logger(`${field} changed`);
        const arrayFieldValue = formApi.getValue(field);
        fieldApi.setValue(arrayFieldValue);
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
    const newKeys = keys.slice(0, i).concat(keys.slice(i + 1, keys.length));
    setKeys(newKeys);
    const newInitialValues = initialValues.slice(0, i).concat(initialValues.slice(i + 1, initialValues.length));
    setInitialValues(newInitialValues);
  };

  const add = () => {
    keys.push(uuidv4());
    setKeys([...keys]);
  };

  const addWithInitialValue = ( initialValue ) => {
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
