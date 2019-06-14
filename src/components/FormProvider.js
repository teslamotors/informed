import React from 'react';
import { FormStateContext, FormApiContext, FormRegisterContext } from '../Context';
import Debug from '../debug';
import useForm from '../hooks/useForm';

const logger = Debug('informed:FormProvider' + '\t\t');

const FormProvider = ({ 
  children, 
  formApi, 
  formController,
  formState, 
  ...rest
}) => {

  logger('Render FormProvider');

  if( formApi ){
    logger('Render FormProvider with given values');
    /* --- Create Provider with given values and render Content --- */
    return (
      <FormRegisterContext.Provider value={formController.updater}>
        <FormApiContext.Provider value={formApi}>
          <FormStateContext.Provider value={formState}>
            {children}
          </FormStateContext.Provider>
        </FormApiContext.Provider>
      </FormRegisterContext.Provider>
    );
  } 

  logger('Render FormProvider with generated values');
  /* --- User did not pass values so create them --- */
  const value = useForm(rest);

  return (
    <FormRegisterContext.Provider value={value.formController.updater}>
      <FormApiContext.Provider value={value.formApi}>
        <FormStateContext.Provider value={value.formState}>
          {children}
        </FormStateContext.Provider>
      </FormApiContext.Provider>
    </FormRegisterContext.Provider>
  );
  
};

export default FormProvider;
