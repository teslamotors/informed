import React, { useState } from 'react';
import useFormApi from '../hooks/useFormApi';

const ScopeArrayField = ({ field, children }) => {
  const formApi = useFormApi();

  var initialValues = formApi.getInitialValue(field)

  if (!initialValues) {
    throw(new Error("initialValue required for ScopeArrayField " + field))
  }
  if (!Array.isArray(initialValues)) {
    throw(new Error("initialValue should be an array for ScopeArrayField " + field))
  }

  const initialKeys = initialValues.map((v, index) => index);
  // state is used to force render on update
  const [keys, setKeys] = useState(initialKeys);

  const remove = i => {
    initialValues.splice(i, 1);
    const prevValues = formApi.getState().values[field]
    var newValues
    if (prevValues) {
      newValues = prevValues.slice()
      newValues.splice(i, 1)
    } else {
      newValues = []
    }
    var set = {}
    set[field] = newValues
    formApi.setValues(set)

    // state is used to force render on update
    const newKeys = initialValues.map((v, index) => index);
    setKeys(newKeys)
  };

  const add = (value) => {
    if (!value) {
      value = {}
    }

    initialValues.push(value)

    const prevValues = formApi.getState().values[field]
    var newValues
    if (prevValues) {
      newValues = prevValues.slice()
    } else {
      newValues = []
    }
    newValues.push(value)

    var set = {}
    set[field] = newValues
    formApi.setValues(set)

    // state is used to force render on update
    const newKeys = initialValues.map((v, index) => index);
    setKeys(newKeys)
  };

  const fields = initialValues.map((value, i) => {
    return {
      key: i,
      field: `${field}[${i}]`,
      remove: () => remove(i),
    }
  });

  return children({ fields, add });
};

export default ScopeArrayField;
