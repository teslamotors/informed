import { useContext } from 'react';
import { ArrayFieldItemStateContext } from '../Context';

function useArrayFieldItemState() {
  return useContext(ArrayFieldItemStateContext);
}

export { useArrayFieldItemState };
