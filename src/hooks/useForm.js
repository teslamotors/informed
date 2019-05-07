import React, { useState } from 'react';
import Debug from '../debug';
import FormController from '../FormController';

const debug = Debug('informed:useForm' + '\t\t');

const useForm = ({
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
}) => {

  debug('Render useForm');

  // Create form controller
  const [ formController ] = useState(new FormController({
    dontPreventDefault, 
    initialValues,
    validate,
    validateFields,
    allowEmptyStrings,
    preventEnter,
  }));

  // Form state will be used to trigger rerenders
  const [ formState, setFormState ] = useState( formController.getFormState() );

  // Initialize form stuff ( hack for constructor code muhahaha )
  useState(()=>{

    // Update the form state to trigger rerender!
    formController.on('change', () => {
      setFormState( formController.getFormState() );
    });

    // Register for events
    formController.on('change', () => onChange && onChange( formController.getFormState() ));
    formController.on('submit', () => onSubmit && onSubmit( formController.getFormState().values ) );
    formController.on('value', () => onValueChange && onValueChange( formController.getFormState().values ) );
    formController.on('failure', () => onSubmitFailure && onSubmitFailure( formController.getFormState().errors ) );

    // Give access to api outside
    if (getApi) {
      getApi(formController.getFormApi());
    }
  });

  // We dont want this to happen on every render so thats why useState is used here
  const [ formApi ] = useState( formController.getFormApi() );

  return { formApi, formState, formController };
};

export default useForm;