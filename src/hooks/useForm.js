import React, { useEffect, useState, useMemo, useRef } from 'react';
import { FormController } from '../FormController';
import {
  FormControllerContext,
  FormApiContext,
  FormStateContext
} from '../Context';
import { useUpdateEffect } from './useUpdateEffect';
import { useInformed } from './useInformed';
// import { SchemaFields } from '../components/SchemaFields';
import { Debug } from '../debug';
const logger = Debug('informed:useForm' + '\t');

export const useForm = ({
  onSubmit,
  onReset,
  onChange,
  onSubmitFailure,
  onValueChange,
  onValueSet,
  onValid,
  onInvalid,
  onValueModified,
  initialValues: userInitialValues,
  validateFields,
  autocomplete,
  showErrorIfError,
  showErrorIfTouched,
  showErrorIfDirty,
  validateOn,
  validateOnMount,
  formApiRef,
  dontPreventDefault,
  yupSchema,
  allowEmptyStrings,
  disabled,
  preventEnter,
  validateModified,
  schema,
  ajv,
  ajvErrors,
  // onlyValidateSchema,
  components,
  errorMessage,
  fieldMap,
  adapter,
  name,
  keepState,
  keepStateIfRelevant,
  focusOnInvalid,
  ...userProps
}) => {
  // Register this controler by name if we are in global context
  const informed = useInformed();

  const initialValues = useMemo(
    () => {
      if (informed && name) {
        logger('Checking for saved values', informed.getSavedValues(name));
        return informed.getSavedValues(name) ?? userInitialValues;
      }
      return userInitialValues;
    },
    [userInitialValues]
  );

  const formControllerOptions = {
    initialValues,
    validateFields,
    autocomplete,
    showErrorIfError,
    showErrorIfTouched: showErrorIfTouched ?? true,
    showErrorIfDirty,
    validateOn,
    validateOnMount,
    // NEW STUFF
    dontPreventDefault,
    yupSchema,
    allowEmptyStrings,
    disabled,
    preventEnter,
    schema,
    ajv,
    ajvErrors,
    components,
    errorMessage,
    fieldMap,
    adapter,
    keepState,
    keepStateIfRelevant,
    validateModified,
    focusOnInvalid
  };

  const optionsRef = useRef();
  optionsRef.current = formControllerOptions;

  // Create form controller
  const [formController] = useState(() => new FormController(optionsRef));

  // Register for events
  useEffect(
    () => {
      const onChangeHandler = () =>
        onChange && onChange(formController.getFormState());
      const onResetHandler = () =>
        onReset && onReset(formController.getFormState());
      const onSubmitHandler = () =>
        onSubmit && onSubmit(formController.getFormState());
      const onFailureHandler = () =>
        onSubmitFailure && onSubmitFailure(formController.getFormState());
      const onValueChangeHandler = n =>
        onValueChange && onValueChange(formController.getFormState(), n);
      const onValueModifiedHandler = n =>
        onValueModified && onValueModified(formController.getFormState(), n);
      const onValueSetHandler = n =>
        onValueSet && onValueSet(formController.getFormState(), n);
      const onValidHandler = () =>
        onValid && onValid(formController.getFormState());
      const onInvalidHandler = () =>
        onInvalid && onInvalid(formController.getFormState());

      // Register for events
      formController.on('field', onChangeHandler);
      formController.on('reset', onResetHandler);
      formController.on('submit', onSubmitHandler);
      formController.on('failure', onFailureHandler);
      formController.on('field-value', onValueChangeHandler);
      formController.on('field-modified', onValueModifiedHandler);
      formController.on('field-value-set', onValueSetHandler);
      formController.on('valid', onValidHandler);
      formController.on('invalid', onInvalidHandler);

      // Unregister events
      return () => {
        formController.removeListener('field', onChangeHandler);
        formController.removeListener('reset', onResetHandler);
        formController.removeListener('submit', onSubmitHandler);
        formController.removeListener('failure', onFailureHandler);
        formController.removeListener('field-value', onValueChangeHandler);
        formController.removeListener('field-modified', onValueModifiedHandler);
      };
    },
    [
      onChange,
      onReset,
      onSubmit,
      onSubmitFailure,
      onValueChange,
      onValueModified
    ]
  );

  // Form state will be used to trigger rerenders
  const [formState, setFormState] = useState(() =>
    formController.getFormState()
  );

  // Register for events for ALL fields!
  useEffect(() => {
    const listener = target => {
      setFormState({ ...formController.getFormState() });
      if (informed) {
        informed.inform(name, target);
      }
    };

    formController.emitter.on('field', listener);

    // Need initial state
    setFormState({ ...formController.getFormState() });

    //Register this form if we need to
    if (name && informed) {
      informed.register(name, formController);
    }

    return () => {
      formController.emitter.removeListener('field', listener);
      if (name && informed) {
        // informed.deregister(name);
        informed.setSavedValues(name, formController.getFormState().values);
      }
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

  useUpdateEffect(
    () => {
      // If the form is pristine then reset it when we get new initial values !
      const { pristine } = formApi.getFormState();
      if (pristine) {
        formApi.reset();
      }
    },
    [initialValues]
  );

  useEffect(() => {
    logger('Mount');
    formController.lockRemoval(false);
    return () => {
      // Important so we dont clear values!!!
      formController.lockRemoval(true);
      logger('Un-Mount');
    };
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
