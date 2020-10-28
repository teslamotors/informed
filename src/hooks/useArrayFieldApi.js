import React, { useContext } from 'react';
import { ArrayFieldApiContext } from '../Context';

function useArrayFieldApi() {
  return useContext(ArrayFieldApiContext);
}

export default useArrayFieldApi;
