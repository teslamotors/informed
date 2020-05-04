import React, { useContext, useState } from 'react';
import useArrayField from '../hooks/useArrayField';
import {
  ArrayFieldStateContext,
  ArrayFieldItemApiContext,
  ArrayFieldItemStateContext,
  FormRegisterContext
} from '../Context';

const ArrayField = ({ children, ...props }) => {
  const { render, arrayFieldState, arrayFieldApi } = useArrayField(props);

  if (typeof children === 'function') {
    return render(
      children({
        arrayFieldApi,
        arrayFieldState,
        // Make it easier for user
        ...arrayFieldApi,
        ...arrayFieldState
      })
    );
  }

  return render(children);
};

const ArrayFieldItem = ({
  arrayFieldItemState,
  arrayFieldItemApi,
  children
}) => {
  // Grab the form register context
  const updater = useContext(FormRegisterContext);

  // Keep track of fields that belong to this array field
  const [fieldsById] = useState(new Map());

  // Resets all fields in this item
  const reset = () => {
    fieldsById.forEach(fld => {
      fld.fieldApi.reset();
    });
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
    }
  };

  const arrayFieldItemApiValue = {
    ...arrayFieldItemApi,
    reset,
  };

  if (typeof children === 'function') {
    return (
      <FormRegisterContext.Provider value={wrappedUpdator}>
        <ArrayFieldItemApiContext.Provider value={arrayFieldItemApiValue}>
          <ArrayFieldItemStateContext.Provider value={arrayFieldItemState}>
            {children({
              arrayFieldItemApi: arrayFieldItemApiValue,
              arrayFieldItemState,
              // Make it easier for user
              ...arrayFieldItemApiValue,
              ...arrayFieldItemState
            })}
          </ArrayFieldItemStateContext.Provider>
        </ArrayFieldItemApiContext.Provider>
      </FormRegisterContext.Provider>
    );
  }

  return (
    <FormRegisterContext.Provider value={wrappedUpdator}>
      <ArrayFieldItemApiContext.Provider value={arrayFieldItemApiValue}>
        <ArrayFieldItemStateContext.Provider value={arrayFieldItemState}>
          {children}
        </ArrayFieldItemStateContext.Provider>
      </ArrayFieldItemApiContext.Provider>
    </FormRegisterContext.Provider>
  );
};

ArrayField.Items = ({ children }) => {
  const { fields } = useContext(ArrayFieldStateContext);
  return fields.map(({ arrayFieldItemState, arrayFieldItemApi }) => {
    const { key } = arrayFieldItemState;
    return (
      <ArrayFieldItem
        key={key}
        arrayFieldItemApi={arrayFieldItemApi}
        arrayFieldItemState={arrayFieldItemState}>
        {children}
      </ArrayFieldItem>
    );
  });
};

export default ArrayField;
