import React from 'react';
import { RadioGroupContext } from '../../Context';
import { useField } from '../../hooks/useField';
import { Radio } from './Radio';

export const RadioGroup = ({ options, children, ...props }) => {
  const { fieldApi, fieldState } = useField(props);

  const groupContext = {
    radioGroupApi: fieldApi,
    radioGroupState: fieldState,
    ...props
  };

  return (
    <RadioGroupContext.Provider value={groupContext}>
      {options
        ? options.map(option => (
          <label key={option.value}>
            {option.label} <Radio value={option.value} />
          </label>
        ))
        : children}
    </RadioGroupContext.Provider>
  );
};
