import { useContext } from 'react';
import { FormRegisterContext } from '../Context';

function useFormRegister() {
  const context = useContext(FormRegisterContext);
  return context;
}

export { useFormRegister };
