import React from 'react';

const FormRegisterContext = React.createContext({
  register: () => { },
  deregister: () => { },
  setValue: () => { },
  setTouched: () => { },
  setError: () => { },
  update: () => { },
  getField: () => { },
  expectRemoval: () => { },
});

const FormStateContext = React.createContext({});
const FormApiContext = React.createContext({
  getFullField: () => { },
  getValues: () => { },
  getOptions: () => ({}),
  setInitialValue: () => { },
  getInitialValue: () => { },
  getDerrivedValue: () => { },
  getSavedValue: () => { },
  removeSavedState: () => { }
});
const GroupContext = React.createContext();
const SelectContext = React.createContext();

export { FormRegisterContext, FormStateContext, FormApiContext, GroupContext, SelectContext };
