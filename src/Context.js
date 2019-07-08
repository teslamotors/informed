import React from 'react';

const FormRegisterContext = React.createContext({
  register: () => {},
  deregister: () => {},
  setValue: () => {},
  setTouched: () => {}, 
  setError: () => {},
  update: () => {}, 
  getField: () => {}
});

const FormStateContext = React.createContext({});
const FormApiContext = React.createContext({
  getFullField: () => {},
  getValues: () => {},
  getOptions: () => ({}),
});
const GroupContext = React.createContext();
const SelectContext = React.createContext();

export { FormRegisterContext, FormStateContext, FormApiContext, GroupContext, SelectContext };
