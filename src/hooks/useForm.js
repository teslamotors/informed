import React, { useState, useEffect, useMemo } from 'react';
import Debug from '../debug';
import { debounce } from '../utils';
import FormController from '../FormController';
import FormProvider from '../components/FormProvider';
import FormFields from '../components/FormFields';
import useLayoutEffect from './useIsomorphicLayoutEffect';

const logger = Debug('informed:useForm' + '\t\t');

const useForm = ({
  dontPreventDefault,
  initialValues,
  validate,
  validateFields,
  allowEmptyStrings,
  preventEnter,
  getApi,
  apiRef,
  onChange,
  onSubmit,
  onValueChange,
  onSubmitFailure,
  validationSchema,
  schema,
  ajv,
  fieldMap,
  onlyValidateSchema,
  ...userProps
}) => {
  logger('Render useForm');

  // Generate form controller options
  const formControllerOptions = useMemo(
    () => ({
      dontPreventDefault,
      initialValues,
      validate,
      validateFields,
      allowEmptyStrings,
      preventEnter,
      validationSchema,
      schema,
      ajv,
      fieldMap
    }),
    [
      dontPreventDefault,
      initialValues,
      validate,
      validateFields,
      allowEmptyStrings,
      preventEnter,
      validationSchema,
      schema,
      ajv,
      fieldMap
    ]
  );

  // Create form controller
  const [formController] = useState(
    () => new FormController(formControllerOptions)
  );

  // Update the options when they change
  useEffect(
    () => {
      formController.setOptions(formControllerOptions);
    },
    [formControllerOptions]
  );

  // Form state will be used to trigger rerenders
  const [formState, setFormState] = useState(() =>
    formController.getFormState()
  );

  // Register for events
  useLayoutEffect(
    () => {
      const onChangeHandler = () =>
        onChange && onChange(formController.getFormState());
      const onSubmitHandler = () =>
        onSubmit && onSubmit(formController.getFormState().values);
      const onValueHandler = () =>
        onValueChange && onValueChange(formController.getFormState().values);
      const onFailureHandler = () =>
        onSubmitFailure &&
        onSubmitFailure(formController.getFormState().errors);

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
    },
    [onChange, onSubmit, onValueChange, onSubmitFailure]
  );

  // Initialize code like constructor but not muhahah
  useState(() => {
    // Update the form state to trigger rerender!
    const onChangeHandlerRerender = () =>
      setFormState(formController.getFormState());
    // const debounced = debounce(onChangeHandlerRerender, 250);
    formController.on('change', onChangeHandlerRerender);
    // Give access to api outside
    if (getApi) {
      getApi(formController.getFormApi());
    }
    if (apiRef) {
      apiRef.current = formController.getFormApi();
    }
  });

  // We dont want this to happen on every render so thats why useState is used here
  const [formApi] = useState(() => formController.getFormApi());

  // TODO technically speaking this can be unsafe as there is circular dependency
  // between form provider and useForm.. Its ok because anyone that in theory
  // Uses a form provider and a use form hook themselves will never call the render
  // function created here... that being said I will look into fixing that warning
  // at some point :)
  const render = children => (
    <FormProvider
      formApi={formApi}
      formState={formState}
      formController={formController}>
      <>
        {!children ? (
          <FormFields schema={schema} onlyValidateSchema={onlyValidateSchema} />
        ) : (
          children
        )}
      </>
    </FormProvider>
  );

  return { formApi, formState, formController, render, userProps };
};

export default useForm;
