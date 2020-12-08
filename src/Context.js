import React from 'react';

const FormRegisterContext = React.createContext({
  register: () => {},
  deregister: () => {},
  setValue: () => {},
  setTouched: () => {},
  setError: () => {},
  update: () => {},
  getField: () => {},
  expectRemoval: () => {},
  getInitialValue: () => {}
});

const FormStateContext = React.createContext({});
const FormApiContext = React.createContext({
  getFullField: () => {},
  getValues: () => {},
  getOptions: () => ({}),
  setInitialValue: () => {},
  getInitialValue: () => {},
  getDerrivedValue: () => {},
  getSavedValue: () => {},
  removeSavedState: () => {}
});
const GroupContext = React.createContext();
const SelectContext = React.createContext();

const ArrayFieldStateContext = React.createContext();
const ArrayFieldApiContext = React.createContext();
const ArrayFieldItemApiContext = React.createContext();
const ArrayFieldItemStateContext = React.createContext();
const MultistepStateContext = React.createContext();
const MultistepApiContext = React.createContext();
const MultistepStepContext = React.createContext();

export {
  FormRegisterContext,
  FormStateContext,
  FormApiContext,
  GroupContext,
  SelectContext,
  ArrayFieldApiContext,
  ArrayFieldStateContext,
  ArrayFieldItemApiContext,
  ArrayFieldItemStateContext,
  MultistepStateContext,
  MultistepApiContext,
  MultistepStepContext
};
