import React, { useEffect, useState, useMemo } from 'react';
import { FormController } from '../FormController';
import {
  FormControllerContext,
  FormApiContext,
  FormStateContext
} from '../Context';

export const useForm = ({
  onSubmit,
  onReset,
  initialValues,
  formApiRef,
  ...userProps
}) => {
  const formControllerOptions = {
    initialValues
  };

  // Create form controller
  const [formController] = useState(
    () => new FormController(formControllerOptions)
  );

  // Register for events
  useEffect(
    () => {
      const onResetHandler = () => onReset && onReset();
      const onSubmitHandler = () =>
        onSubmit && onSubmit(formController.getFormState().values);

      // Register for events
      formController.on('reset', onResetHandler);
      formController.on('submit', onSubmitHandler);

      // Unregister events
      return () => {
        formController.removeListener('reset', onResetHandler);
        formController.removeListener('submit', onSubmitHandler);
      };
    },
    [onReset, onSubmit]
  );

  // Form state will be used to trigger rerenders
  const [formState, setFormState] = useState(() =>
    formController.getFormState()
  );

  // Register for events for ALL fields!
  useEffect(() => {
    const listener = () => {
      setFormState({ ...formController.getFormState() });
    };

    formController.emitter.on('field', listener);

    // Need initial state
    setFormState({ ...formController.getFormState() });

    return () => {
      formController.emitter.removeListener('field', listener);
    };
  }, []);

  // YES! this is important! Otherwise it would get a new formApi object every render
  /// That would cause unessissarry re-renders! so do not remove useMemeo!
  const formApi = useMemo(() => {
    if (formApiRef) {
      formApiRef.current = formController.getFormApi();
    }
    return formController.getFormApi();
  }, []);

  const render = children => (
    <FormControllerContext.Provider value={formController}>
      <FormApiContext.Provider value={formApi}>
        <FormStateContext.Provider value={formState}>
          {children}
        </FormStateContext.Provider>
      </FormApiContext.Provider>
    </FormControllerContext.Provider>
  );

  return { formApi, formState, formController, render, userProps };
};
