import React, { useContext, useState, useEffect } from 'react';
import ObjectMap from '../ObjectMap';
import useArrayField from '../hooks/useArrayField';
import useFormApi from '../hooks/useFormApi';
import useScopedApi from '../hooks/useScopedApi';
import Relevant from './Relevant';
import {
  ArrayFieldStateContext,
  ArrayFieldItemApiContext,
  ArrayFieldItemStateContext,
  FormRegisterContext
} from '../Context';

const ArrayField = ({ relevant, field, ...props }) => {
  // Need to get formApi to have consistant interface for relevant function
  const formApi = useFormApi();

  if (relevant) {
    const ff = formApi.getFullField(field);
    const args = {
      path: ff,
      parentPath: ff.replace(/(.*)[.[].*/, '$1'),
      get: (values, path) => ObjectMap.get(values, path)
    };

    const when = ({ values }) => {
      return relevant(values, args);
    };

    return (
      <Relevant when={when}>
        <ArrayFieldWrapper field={field} {...props} />
      </Relevant>
    );
  } else {
    return <ArrayFieldWrapper field={field} {...props} />;
  }
};

const ArrayFieldWrapper = ({ children, ...props }) => {
  const { render, arrayFieldState, arrayFieldApi, field } = useArrayField(
    props
  );

  if (typeof children === 'function') {
    return render(
      children({
        field,
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

  // Grab the form state
  const formApi = useFormApi();

  // A little trick I learned in nam to trigger rerender
  const [state, setState] = useState(0);

  // Keep track of fields that belong to this array field
  const [fieldsById] = useState(new Map());

  // Get this items field
  const { field } = arrayFieldItemState;

  // Create scoped api
  const scopedApi = useScopedApi(field);

  // State generation function
  const getState = () => {
    const { values, errors, touched } = formApi.getState();
    // Get this fields state
    const itemState = {
      values: ObjectMap.get(values, field),
      errors: ObjectMap.get(errors, field),
      touched: ObjectMap.get(touched, field)
    };
    return itemState;
  };

  // Register for events for rerenders!
  useEffect(
    () => {
      // Define event handler
      const onChangeHandler = fieldName => {
        // Example foo.bar.baz[3].baz >>>> foo.bar.baz[3]
        const magicValue = fieldName.slice(
          0,
          fieldName.lastIndexOf('[') != -1
            ? fieldName.lastIndexOf(']') + 1
            : fieldName.length
        );

        // This field updated so trigger rerender
        if (magicValue === field) {
          setState(Math.random());
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

  // Resets all fields in this item
  const reset = () => {
    fieldsById.forEach(fld => {
      fld.fieldApi.reset();
    });
  };

  // Generate the item state
  const itemState = getState();

  // Wrap the updater to update array fields references
  const wrappedUpdator = {
    ...updater,
    register: (id, fld, initialRender) => {
      fieldsById.set(id, fld);
      updater.register(id, fld, initialRender);
    },
    deregister: (id, ...args) => {
      fieldsById.delete(id);
      updater.deregister(id, ...args);
    }
  };

  const arrayFieldItemApiValue = {
    ...arrayFieldItemApi,
    ...scopedApi,
    reset
  };

  const arrayFieldItemStateValue = {
    ...arrayFieldItemState,
    ...itemState
  };

  if (typeof children === 'function') {
    return (
      <FormRegisterContext.Provider value={wrappedUpdator}>
        <ArrayFieldItemApiContext.Provider value={arrayFieldItemApiValue}>
          <ArrayFieldItemStateContext.Provider value={arrayFieldItemStateValue}>
            {children({
              arrayFieldItemApi: arrayFieldItemApiValue,
              arrayFieldItemState: arrayFieldItemStateValue,
              // Make it easier for user
              ...arrayFieldItemApiValue,
              ...arrayFieldItemStateValue
            })}
          </ArrayFieldItemStateContext.Provider>
        </ArrayFieldItemApiContext.Provider>
      </FormRegisterContext.Provider>
    );
  }

  return (
    <FormRegisterContext.Provider value={wrappedUpdator}>
      <ArrayFieldItemApiContext.Provider value={arrayFieldItemApiValue}>
        <ArrayFieldItemStateContext.Provider value={arrayFieldItemStateValue}>
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
