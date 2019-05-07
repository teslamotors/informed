import React from 'react';
import { FormStateContext, FormApiContext, FormRegisterContext } from '../Context';
import Debug from '../debug';
import useForm from '../hooks/useForm';

const debug = Debug('informed:FormProvider' + '\t\t');

const FormProvider = ({ 
  children, 
  getApi, 
  onChange, 
  onSubmit, 
  onValueChange, 
  initialValues,
  onSubmitFailure,
  validate,
  validateFields,
  preventEnter,
  dontPreventDefault,
  allowEmptyStrings,
  ...rest }) => {

  debug('Render FormProvider');

  const { 
    formApi, 
    formController,
    formState 
  } = useForm({
    dontPreventDefault,
    initialValues,
    validate,
    validateFields,
    allowEmptyStrings,
    preventEnter,
    getApi,
    onChange,
    onSubmit,
    onValueChange, 
    onSubmitFailure
  });

  /* --- Create Provider and render Content --- */
  return (
    <FormRegisterContext.Provider value={formController.updater}>
      <FormApiContext.Provider value={formApi}>
        <FormStateContext.Provider value={formState}>
          <form
            {...rest}
            onReset={formController.reset}
            onSubmit={formController.submitForm}
            onKeyDown={formController.keyDown}>
            {children}
          </form>
        </FormStateContext.Provider>
      </FormApiContext.Provider>
    </FormRegisterContext.Provider>
  );
  
};

export default FormProvider;
