import React, { useState, useRef, useEffect, useContext, useMemo } from 'react';
import { useFieldApi } from './useFieldApi';
import { useRelevance } from './useRelevance';
import { useFieldState } from './useFieldState';
import { useFormController } from './useFormController';
import { useCursorPosition } from './useCursorPosition';
import {
  MultistepStepContext,
  RelevanceContext,
  ScopeContext
} from '../Context';

import {
  uuidv4,
  generateOnBlur,
  generateOnChange,
  generateOnFocus,
  generateValue,
  generateValidationFunction
} from '../utils';
import { Debug } from '../debug';
import { useUpdateEffect } from '../hooks/useUpdateEffect';
import { useScope } from './useScope';
import { useFieldSubscription } from './useFieldSubscription';

const logger = Debug('informed:useField' + '\t');

/* ----------------------- useField ----------------------- */
export const useField = ({
  id,
  type,
  name: userName,
  onBlur,
  onChange,
  onFocus,
  onNativeChange,
  onValueChange,
  validate: validationFunc,
  asyncValidate,
  validateModified: userValidateModified,
  gatherData,
  yupSchema,
  multiple,
  field,
  keep,
  keepState: userKeepState,
  keepStateIfRelevant: userKeepStateIfRelevant,
  remember,
  inputRef,
  inputRefs,
  relevant,
  defaultValue,
  initialValue: userInitialValue,
  autocomplete: userAutocomplete,
  showErrorIfError: userShowErrorIfError,
  showErrorIfTouched: userShowErrorIfTouched,
  showErrorIfDirty: userShowErrorIfDirty,
  formatter,
  parser,
  clean,
  mask,
  maintainCursor: userMaintainCursor,
  required,
  noFalsy,
  minimum,
  maximum,
  minLength,
  maxLength,
  pattern,
  allowEmptyString: userAllowEmptyString,
  emptyValue,
  disabled: userDisabled,
  gatherOnMount,
  gatherOnBlur,
  validateOnMount: userValidateOnMount,
  modifyOnMount,
  validateOn: userValidateOn,
  maskOnBlur,
  validateWhen = [],
  formatterDependencies = [],
  formController: userFormController,
  initialize,
  errorMessage,
  initializeValueIfPristine,
  relevanceWhen = [],
  relevanceDeps = [],
  validateDeps = [],
  // eslint-disable-next-line no-unused-vars
  evaluate,
  // eslint-disable-next-line no-unused-vars
  evaluateWhen,
  ...userProps
}) => {
  // For backwards compatability
  const n = userName ?? field;

  // Because it could be scoped
  const name = useScope(n);

  // Get scoped context
  const scope = useContext(ScopeContext);

  if (!name) {
    console.warn('name is a required prop!!!!');
  }

  // Default to maintain cursor whenever formatter is passed
  const maintainCursor = userMaintainCursor ?? !!formatter;

  // Grab the form controller
  const formController = userFormController ?? useFormController();

  // Get any options
  const autocomplete =
    userAutocomplete ?? formController.options.current.autocomplete;
  const showErrorIfError =
    userShowErrorIfError ?? formController.options.current.showErrorIfError;
  const showErrorIfTouched =
    userShowErrorIfTouched ?? formController.options.current.showErrorIfTouched;
  const showErrorIfDirty =
    userShowErrorIfDirty ?? formController.options.current.showErrorIfDirty;
  const validateOnMount =
    userValidateOnMount ?? formController.options.current.validateOnMount;
  const validateOn =
    userValidateOn ?? formController.options.current.validateOn;
  const keepState = userKeepState ?? formController.options.current.keepState;
  const keepStateIfRelevant =
    userKeepStateIfRelevant ??
    formController.options.current.keepStateIfRelevant;
  const allowEmptyString =
    userAllowEmptyString ?? formController.options.current.allowEmptyStrings;
  const validateModified =
    userValidateModified ?? formController.options.current.validateModified;

  const disabled =
    userDisabled ??
    formController.disabled ??
    formController.options.current.disabled;

  // For getting initialValue
  const getInitialValue = () =>
    userInitialValue ?? formController.getInitialValue(name) ?? defaultValue;

  // Grab the initial value
  const [initialValue] = useState(() => {
    return getInitialValue();
  });

  // Hook onto the field api
  // Note: we already scoped above so we pass false here
  const fieldApi = useFieldApi(name, false);

  // For multistep
  const inMultistep = useContext(MultistepStepContext);

  // For relevance
  const isRelevant = useRelevance({
    name,
    relevant,
    relevanceWhen,
    relevanceDeps
  });

  // If we live in `Relevant`
  const relevantContext = useContext(RelevanceContext);

  // Create ref
  const internalRef = useRef(null);
  const ref = React.useMemo(() => inputRef || internalRef, []);

  // Create Id for field
  const [fieldId] = useState(() => id || uuidv4());

  // Create reference function for if it changes
  const validationFuncRef = useRef();
  validationFuncRef.current = validationFunc;

  // Generate validation function
  const validate = useMemo(
    () =>
      generateValidationFunction(validationFuncRef, yupSchema, {
        required,
        noFalsy,
        minimum,
        maximum,
        minLength,
        maxLength,
        pattern,
        getErrorMessage: key => formController.getErrorMessage(key, name),
        validateModified,
        fieldApi,
        formController,
        scope,
        name: n
      }),
    [required, minimum, maximum, minLength, maxLength, pattern, noFalsy, n]
  );

  // Create meta object
  const meta = {
    name,
    type,
    onBlur,
    onChange,
    onFocus,
    onNativeChange,
    initialValue,
    keep,
    remember,
    keepState,
    keepStateIfRelevant,
    initializeValueIfPristine,
    fieldApi,
    getInitialValue,
    formatter,
    parser,
    clean,
    mask,
    validate,
    yupSchema,
    validateOn: validateOn ?? 'blur',
    validateOnMount,
    validateWhen,
    showErrorIfError,
    showErrorIfTouched,
    showErrorIfDirty,
    maskOnBlur,
    asyncValidate,
    gatherData,
    initialize,
    errorMessage,
    allowEmptyString,
    emptyValue,
    gatherOnMount,
    gatherOnBlur,
    fieldRef: ref,
    modifyOnMount
  };
  const metaRef = useRef(meta);
  metaRef.current = meta;

  // Before we hook into field state initialize the field
  useState(() => {
    // Only initialize if relevant
    if (isRelevant) {
      const metaInfo = metaRef.current;
      logger('Initialize', metaInfo.name);
      formController.initialize(metaInfo.name, metaRef, false);
    }
  });

  // Hook onto the field state
  // Note: we already scoped above so we pass false here
  // Note: its important this call is here ( below where we call initialize ) so the state can be set up before we start using it
  const fieldState = useFieldState(name, false);

  // Setup cursor position tracking
  const { setCursor, setCursorOffset } = useCursorPosition({
    value: fieldState.value,
    inputRef: ref,
    maintainCursor,
    inputRefs
  });

  // Add to meta
  metaRef.current.setCursorOffset = setCursorOffset;
  metaRef.current.setCursor = setCursor;

  // Register
  useEffect(
    () => {
      if (isRelevant) {
        // We already initialized before the render so the input exists in the form state, we need to redo after the render
        logger('Register', name, metaRef.current);
        formController.register(name, metaRef);
        logger('Second Initialize', name);
        formController.initialize(name, metaRef, false);
      }
      return () => {
        logger('De-Register', name, metaRef.current);
        formController.deregister(name);
      };
    },
    [name]
  );

  // Cleanup on irrelivant
  // Note: important to use the update effect so we dont call this on first render
  useUpdateEffect(
    () => {
      // The info may have changed, grab it from the ref
      const metaInfo = metaRef.current;

      if (!isRelevant && !keepState) {
        logger('RELEVANT REMOVING', metaInfo.name);
        formController.remove(metaInfo.name, metaInfo.keep, metaInfo);
        logger('RELEVANT De-Register', metaInfo.name);
        formController.deregister(metaInfo.name);
      }

      if (isRelevant) {
        logger('RELEVANT register', metaInfo.name);
        formController.register(metaInfo.name, metaRef);
        logger('RELEVANT Initialize', metaInfo.name);
        formController.initialize(metaInfo.name, metaRef);
      }
    },
    [isRelevant]
  );

  // Cleanup on un-mount
  useEffect(() => {
    return () => {
      let keepIt = false;

      // The info may have changed, grab it from the ref
      const metaInfo = metaRef.current;

      logger('CLEANUP REMOVING', metaInfo.name);

      // Always keep it if this is passed
      if (metaInfo.keepState) {
        keepIt = true;
      }
      // Need to check relevance because we DONT
      // want to keep if we are irrelivant
      else if (relevantContext && !relevantContext.relevant()) {
        keepIt = false;
      }
      // If we make it here we must be relevant so check keepStateIfRelevant
      else if (keepStateIfRelevant) {
        keepIt = true;
      }
      // If its a multistep then we also want to keep it
      else if (inMultistep) {
        keepIt = true;
      }

      if (!keepIt) {
        formController.remove(metaInfo.name, metaInfo.keep, metaInfo);
      }
    };
  }, []);

  useUpdateEffect(
    () => {
      formController.reformat(metaRef.current.name);
    },
    [...formatterDependencies]
  );

  // Note im not adding this yet as I need to figure out how to solve issue with array fields when you remove 1 [0, 1, 2] and 2 becomes 1
  // useUpdateEffect(
  //   () => {
  //     // If the form is pristine then reset it when we get new initial values !
  //     const pristine = fieldApi.getPristine();
  //     if (pristine) {
  //       fieldApi.reset();
  //     }
  //   },
  //   [userInitialValue, defaultValue]
  // );

  useFieldSubscription('field-value', validateWhen, target => {
    logger(`revalidating for ${metaRef.current.name} because of ${target}`);
    formController.validateField(metaRef.current.name);
  });

  useFieldSubscription(
    'field-value',
    [name],
    target => {
      if (onValueChange) {
        onValueChange(formController.getFieldState(target));
      }
    },
    false // No scope as we are already scoped
  );

  useUpdateEffect(() => {
    logger(`revalidating for ${metaRef.current.name} because of deps change`);
    formController.validateField(metaRef.current.name);
  }, validateDeps);

  const render = children => (isRelevant ? children : null);

  const changeHandler = generateOnChange({
    fieldType: type,
    setValue: fieldApi.setValue,
    multiple,
    ref
  });
  const blurHandler = generateOnBlur({
    setTouched: fieldApi.setTouched
  });
  const focusHandler = generateOnFocus({
    setFocused: fieldApi.setFocused
  });
  const hookedValue = generateValue({
    fieldType: type,
    maskedValue: fieldState.maskedValue,
    multiple: userProps.multiple,
    value: fieldState.value
  });

  const recombinedUserProps = {
    id: fieldId,
    name,
    // ref,
    type,
    multiple,
    autoComplete: autocomplete,
    disabled,
    required,
    min: minimum,
    max: maximum,
    minLength,
    maxLength,
    pattern,
    ...userProps
  };

  // const order66 = new Date('2022-06-08T04:20Z');

  // if (new Date() > order66) {
  //   recombinedUserProps.placeholder = 'Hello World';
  // }

  return {
    fieldState,
    fieldApi,
    userProps: recombinedUserProps,
    informed: {
      onChange: changeHandler,
      onBlur: blurHandler,
      onFocus: focusHandler,
      value: hookedValue
    },
    ref,
    render
  };
};
