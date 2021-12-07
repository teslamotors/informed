import { useContext } from 'react';
import { RadioGroupContext } from '../Context';

function useRadioGroup() {
  return useContext(RadioGroupContext);
}

export { useRadioGroup };
