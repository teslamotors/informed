import React, { useMemo } from 'react';
import { useField } from 'informed';
import { Item, ListBox } from '@adobe/react-spectrum';

const ListBoxInput = (props) => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'text',
    ...props,
  });

  const { required, options } = userProps;
  const { error, showError } = fieldState;

  const items = useMemo(() => {
    return options.map((op) => {
      return { name: op.value };
    });
  });

  return render(
    <ListBox
      ref={ref}
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      selectionMode="single"
      {...userProps}
      {...informed}
      // items={items}
      selectedKeys={[fieldState.value]}
      onSelectionChange={(v) => {
        fieldApi.setValue(v.currentKey);
      }}
    >
      {/* {(item) => <Item key={item.name}>{item.name}</Item>} */}
      {options.map((op) => {
        return <Item key={op.value}>{op.label}</Item>;
      })}
    </ListBox>
  );
};

export default ListBoxInput;
