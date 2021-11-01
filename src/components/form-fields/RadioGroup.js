/* eslint-disable indent */
import React from 'react';
import { RadioGroupContext } from '../../Context';
import { useField } from '../../hooks/useField';
import { Radio } from './Radio';

export const RadioGroup = props => {
  const { fieldApi, fieldState, userProps } = useField(props);

  const groupContext = {
    radioGroupApi: fieldApi,
    radioGroupState: fieldState,
    ...props
  };

  const { label, id, options, children } = userProps;
  const { showError, error } = fieldState;

  return (
    <RadioGroupContext.Provider value={groupContext}>
      <fieldset aria-describedby={`${id}-error`}>
        {label ? <legend>{label}</legend> : null}
        {options
          ? options.map(option => (
              <label key={option.value}>
                {option.label} <Radio value={option.value} />
              </label>
            ))
          : children}
        {showError ? (
          <small role="alert" id={`${id}-error`}>
            {error}
          </small>
        ) : null}
      </fieldset>
    </RadioGroupContext.Provider>
  );
};
