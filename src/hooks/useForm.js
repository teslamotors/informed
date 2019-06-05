import React, { useState, useLayoutEffect, useEffect, useMemo } from 'react';
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

  // Generate form controller options 
  const formControllerOptions = useMemo(()=>({
    dontPreventDefault,
    initialValues,
    validate,
    validateFields,
    allowEmptyStrings,
    preventEnter,
  }), [dontPreventDefault, initialValues, validate, validateFields, allowEmptyStrings, preventEnter]);

  // Create form controller
  const [formController] = useState(()=> new FormController(formControllerOptions));

  // Update the options when they change
  useEffect(()=>{
    formController.setOptions(formControllerOptions);
  }, [formControllerOptions]);

  // Form state will be used to trigger rerenders
  const [ formState, setFormState ] = useState( () => formController.getFormState() );

  // Register for events
  useLayoutEffect(()=>{

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
      formController.removeListener('change', onChangeHandler);
      formController.removeListener('submit', onSubmitHandler);
      formController.removeListener('value', onValueHandler);
      formController.removeListener('failure', onFailureHandler);
    };
  }, [onChange, onSubmit, onValueChange, onSubmitFailure ]);

  // Initialize code like constructor but not muhahah
  useState(()=>{
    // Update the form state to trigger rerender!
    const onChangeHandlerRerender = () => setFormState( formController.getFormState() );
    formController.on('change', onChangeHandlerRerender);
    // Give access to api outside
    if (getApi) {
      getApi(formController.getFormApi());
    }
  });

  // We dont want this to happen on every render so thats why useState is used here
  const [ formApi ] = useState( ()=> formController.getFormApi() );

  return { formApi, formState, formController };
};

export default useForm;
