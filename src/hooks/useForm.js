import React, { useState, useEffect } from 'react';
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
  const [formController] = useState(new FormController({
    dontPreventDefault,
    initialValues,
    validate,
    validateFields,
    allowEmptyStrings,
    preventEnter,
  }));

  // Form state will be used to trigger rerenders
  const [ formState, setFormState ] = useState( formController.getFormState() );

  // Register for events
  useEffect(()=>{

    // Update the form state to trigger rerender!
    const onChangeHandlerRerender = () => setFormState( formController.getFormState() );
    formController.on('change', onChangeHandlerRerender);

    const onChangeHandler = () => onChange && onChange( formController.getFormState() );
    const onSubmitHandler = () => onSubmit && onSubmit( formController.getFormState().values );
    const onValueHandler = () => onValueChange && onValueChange( formController.getFormState().values );
    const onFailureHandler = () => onSubmitFailure && onSubmitFailure( formController.getFormState().errors );

    // Register for events
    formController.on('change', onChangeHandler);
    formController.on('submit', onSubmitHandler);
    formController.on('value', onValueHandler);
    formController.on('failure', onFailureHandler);

    // Unregister events
    return () => {
      formController.removeListener('change', onChangeHandlerRerender);
      formController.removeListener('change', onChangeHandler);
      formController.removeListener('submit', onSubmitHandler);
      formController.removeListener('value', onValueHandler);
      formController.removeListener('failure', onFailureHandler);
    };
  }, [onChange, onSubmit, onValueChange, onSubmitFailure ]);

  useState(()=>{
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
