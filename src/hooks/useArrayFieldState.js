import { useContext } from 'react';
import { ArrayFieldStateContext } from '../Context';

function useArrayFieldState() {
  return useContext(ArrayFieldStateContext);
}

export { useArrayFieldState };
