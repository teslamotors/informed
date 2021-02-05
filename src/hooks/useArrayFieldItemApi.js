import React, { useContext } from 'react';
import { ArrayFieldItemApiContext } from '../Context';

function useArrayFieldItemApi() {
  return useContext(ArrayFieldItemApiContext);
}

export default useArrayFieldItemApi;
