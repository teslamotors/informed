import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useContext,
  useMemo
} from 'react';
import { useFieldApi } from './useFieldApi';
import { useRelevance } from './useRelevance';
import { useFieldState } from './useFieldState';
import { useFormController } from './useFormController';
import { useCursorPosition } from './useCursorPosition';
import { MultistepStepContext, RelevanceContext } from '../Context';
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
  validate: validationFunc,
  asyncValidate,
  yupSchema,
  multiple,
  field,
  keepState,
  keepStateIfRelevant,
  debug,
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
  maintainCursor: userMaintainCursor,
  required,
  minimum,
  maximum,
  minLength,
  maxLength,
  pattern,
  validateOnMount: userValidateOnMount,
  validateOn: userValidateOn,
  validateWhen = [],
  formatterDependencies = [],
  formController: userFormController,
  initialize,
  errorMessage,
  ...userProps
}) => {
  // For backwards compatability
  const n = userName ?? field;

  // Because it could be scoped
  const name = useScope(n);

  if (!name) {
    console.warn('name is a required prop!!!!');
  }

  // Default to maintain cursor whenever formatter is passed
  const maintainCursor = userMaintainCursor ?? !!formatter;

  // Grab the form controller
  const formController = userFormController ?? useFormController();

  // Get any options
  const autocomplete = userAutocomplete ?? formController.options.autocomplete;
  const showErrorIfError =
    userShowErrorIfError ?? formController.options.showErrorIfError;
  const showErrorIfTouched =
    userShowErrorIfTouched ?? formController.options.showErrorIfTouched;
  const showErrorIfDirty =
    userShowErrorIfDirty ?? formController.options.showErrorIfDirty;
  const validateOnMount =
    userValidateOnMount ?? formController.options.validateOnMount;
  const validateOn = userValidateOn ?? formController.options.validateOn;

  // For getting initialValue
  const getInitialValue = () =>
    userInitialValue ?? formController.getInitialValue(name) ?? defaultValue;

  // Grab the initial value
  const [initialValue] = useState(() => getInitialValue());

  // Hook onto the field state
  // Note: we already scoped above so we pass false here
  const fieldState = useFieldState(name, false);

  // Hook onto the field api
  // Note: we already scoped above so we pass false here
  const fieldApi = useFieldApi(name, false);

  // For multistep
  const inMultistep = useContext(MultistepStepContext);

  // For relevance
  const isRelevant = useRelevance({ name, relevant });

  // If we live in `Relevant`
  const relevantContext = useContext(RelevanceContext);

  // Create ref
  const internalRef = useRef(null);
  const ref = React.useMemo(() => inputRef || internalRef, []);

  // Create Id for field
  const [fieldId] = useState(() => id || uuidv4());

  // Setup cursor position tracking
  const { setCursor, setCursorOffset } = useCursorPosition({
    value: fieldState.value,
    inputRef: ref,
    maintainCursor,
    inputRefs
  });

  // Generate validation function
  const validate = useMemo(
    () =>
      generateValidationFunction(validationFunc, yupSchema, {
        required,
        minimum,
        maximum,
        minLength,
        maxLength,
        pattern,
        getErrorMessage: key => formController.getErrorMessage(key, name)
      }),
    []
  );

  // Create meta object
  const meta = {
    name,
    type,
    onBlur,
    onChange,
    onFocus,
    initialValue,
    keepState,
    keepStateIfRelevant,
    fieldApi,
    getInitialValue,
    formatter,
    parser,
    setCursorOffset,
    setCursor,
    validate,
    yupSchema,
    validateOn: validateOn ?? 'blur',
    validateOnMount,
    validateWhen,
    showErrorIfError,
    showErrorIfTouched,
    showErrorIfDirty,
    asyncValidate,
    initialize,
    errorMessage
  };
  const metaRef = useRef(meta);
  metaRef.current = meta;

  // Register
  useEffect(
    () => {
      formController.register(name, metaRef);
      return () => {
        formController.deregister(name);
      };
    },
    [name]
  );

  // Initialize
  useEffect(() => {
    formController.initialize(name, metaRef);
  }, []);

  // Cleanup on irrelivant
  useEffect(
    () => {
      // The info may have changed, grab it from the ref
      const metaInfo = metaRef.current;

      if (!isRelevant && !keepState) {
        logger('RELEVNAT REMOVING', metaInfo.name);
        formController.remove(metaInfo.name);
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
        formController.remove(metaInfo.name);
      }
    };
  }, []);

  useUpdateEffect(
    () => {
      formController.reformat(metaRef.current.name);
    },
    [...formatterDependencies]
  );

  useFieldSubscription('field-value', validateWhen, target => {
    logger(`revalidating for ${metaRef.current.name} because of ${target}`);
    formController.validateField(metaRef.current.name);
  });

  useLayoutEffect(() => {
    if (debug && ref && ref.current) {
      ref.current.style.background = 'orange';
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.background = 'grey';
        }
      }, 300);
    }
  });

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
    ref,
    type,
    multiple,
    autoComplete: autocomplete,
    required,
    min: minimum,
    max: maximum,
    minLength,
    maxLength,
    pattern,
    ...userProps
  };

  return {
    fieldState,
    fieldApi,
    userProps: recombinedUserProps,
    informed: {
      ...recombinedUserProps,
      onChange: changeHandler,
      onBlur: blurHandler,
      onFocus: focusHandler,
      value: hookedValue
    },
    ref,
    render
  };
};
