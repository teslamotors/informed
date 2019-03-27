import React from 'react';

const FormRegisterContext = React.createContext({
  register: () => {},
  deregister: () => {},
  setValue: () => {},
  setTouched: () => {}, 
  setError: () => {},
  update: () => {}, 
});

const FormStateContext = React.createContext({});
const FormApiContext = React.createContext({
  getFullField: () => {},
  getValues: () => {},
});
const GroupContext = React.createContext();
const SelectContext = React.createContext();

export { FormRegisterContext, FormStateContext, FormApiContext, GroupContext, SelectContext };
