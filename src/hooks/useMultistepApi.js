import { useContext } from 'react';
import { MultistepApiContext } from '../Context';

function useMultistepApi() {
  return useContext(MultistepApiContext);
}

export { useMultistepApi };
