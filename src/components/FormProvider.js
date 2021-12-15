import React from 'react';
import { Debug } from '../debug';
import { useForm } from '../hooks/useForm';

const debug = Debug('informed:Form' + '\t\t');

export const FormProvider = ({ children, ...rest }) => {
  debug('Render Form Provider');

  const { formApi, formState, render } = useForm(rest);

  const getContent = () => {
    const props = {
      formState,
      formApi
    };
    if (typeof children === 'function') {
      return children(props);
    }
    return children;
  };

  /* --- Render Content --- */
  return render(<>{getContent()}</>);
};
