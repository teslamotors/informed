import React from 'react';

const FormRegisterContext = React.createContext({
  register: () => {},
  deregister: () => {},
  setValue: () => {},
  setTouched: () => {}, 
  setError: () => {},
  //update: () => {}
});
const FormContext = React.createContext();
const GroupContext = React.createContext();
const SelectContext = React.createContext();

export { FormRegisterContext, FormContext, GroupContext, SelectContext };
