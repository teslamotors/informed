import React, { useState } from 'react';
import useFormApi from '../hooks/useFormApi';

// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const useArrayField = ({ field, initialValue }) => {

  const formApi = useFormApi();

  const initialVals = formApi.getInitialValue(field) || initialValue || [];

  // TODO throw error if initial value and its not array

  const [initialValues, setInitialValues] = useState(initialVals);

  const initialKeys = initialValues ? initialValues.map(() => uuidv4()) : [];

  const [keys, setKeys] = useState(initialKeys);

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
