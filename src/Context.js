import React from 'react';

const FormRegisterContext = React.createContext({
  register: () => {},
  deregister: () => {},
  setValue: () => {},
  setTouched: () => {},
  setInitial: () => {},
  setError: () => {},
  update: () => {}, 
});

const FormStateContext = React.createContext({});
const FormApiContext = React.createContext({
  getFullField: () => {}
});
const GroupContext = React.createContext();
const SelectContext = React.createContext();

export { FormRegisterContext, FormStateContext, FormApiContext, GroupContext, SelectContext };
