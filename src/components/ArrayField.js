import React, { useContext, useMemo, useState } from 'react';
import { Relevant } from './Relevant';
import { useArrayField } from '../hooks/useArrayField';
import {
  ArrayFieldStateContext,
  ArrayFieldItemApiContext,
  ArrayFieldItemStateContext,
  FormControllerContext
} from '../Context';
import { useFormController } from '../hooks/useFormController';
import { useFieldState } from '../hooks/useFieldState';
import { Debug } from '../debug';

const debug = Debug('informed:ArrayField' + '\t');

const ArrayField = ({ relevant, name, ...props }) => {
  if (relevant) {
    return (
      <Relevant when={relevant}>
        <ArrayFieldWrapper name={name} {...props} />
      </Relevant>
    );
  } else {
    return <ArrayFieldWrapper name={name} {...props} />;
  }
};

const ArrayFieldWrapper = ({ children, ...props }) => {
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
  const formController = useFormController();

  // Map will store all fields by name
  // Key => name
  // Val => fieldMetaRef
  // Why? so the array knows about all its field meta
  const [fieldsMap] = useState(() => new Map());

  // Register for child field updates
  const subState = useFieldState(arrayFieldItemState.name);

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
        // When the very last field from the array is removed unlock
        const lockedUntil = formController.getRemovalLocked();
        // console.log(
        //   "SIZE",
        //   fieldsMap.size,
        //   "INDEX",
        //   arrayFieldItemState.index,
        //   "LOCKEDUNTIL",
        //   lockedUntil
        // );
        if (
          fieldsMap.size === 0 &&
          lockedUntil != null &&
          lockedUntil.index === arrayFieldItemState.index &&
          lockedUntil.name === arrayFieldItemState.parent
        ) {
          debug('UNLOCKING');
          formController.unlockRemoval();
        }
      }
    };
  }, []);

  const arrayFieldStateValue = {
    ...arrayFieldItemState,
    values: subState.value,
    errors: subState.errors,
    touched: subState.touched
  };

  const memoizedChildren = useMemo(
    () => {
      console.log('Calling');
      return children({
        ...arrayFieldItemApi,
        name: arrayFieldItemState.name,
        index: arrayFieldItemState.index
      });
    },
    [arrayFieldItemState.name, arrayFieldItemState.index]
  );

  if (typeof children === 'function') {
    return (
      <FormControllerContext.Provider value={wrappedController}>
        <ArrayFieldItemApiContext.Provider value={arrayFieldItemApi}>
          <ArrayFieldItemStateContext.Provider value={arrayFieldStateValue}>
            {/* <h3>{arrayFieldItemState.key}</h3> */}
            {memoizedChildren}
          </ArrayFieldItemStateContext.Provider>
        </ArrayFieldItemApiContext.Provider>
      </FormControllerContext.Provider>
    );
  }

  return (
    <FormControllerContext.Provider value={wrappedController}>
      <ArrayFieldItemApiContext.Provider value={arrayFieldItemApi}>
        <ArrayFieldItemStateContext.Provider value={arrayFieldItemState}>
          {children}
        </ArrayFieldItemStateContext.Provider>
      </ArrayFieldItemApiContext.Provider>
    </FormControllerContext.Provider>
  );
};

ArrayField.Items = ({ children }) => {
  const { fields } = useContext(ArrayFieldStateContext);
  // console.log("FIELDS", fields);
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

export { ArrayField };
