import React from 'react';
import { Debug } from '../debug';
import { useForm } from '../hooks/useForm';

const debug = Debug('informed:Form' + '\t\t');

export const Form = ({ children, ...rest }) => {
  debug('Render FORM');

  const { formApi, formController, formState, render, userProps } = useForm(
    rest
  );

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
  return render(
    <form
      {...userProps}
      noValidate
      onReset={formController.reset}
      onSubmit={formController.submitForm}
      onKeyDown={formController.keyDown}>
      {getContent()}
    </form>
  );
};
