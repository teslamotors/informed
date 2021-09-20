import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useContext
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
  generateValue
} from '../utils';
import { Debug } from '../debug';

const logger = Debug('informed:useField' + '\t');

/* ----------------------- useField ----------------------- */
export const useField = ({
  id,
  type,
  name: userName,
  onBlur,
  onChange,
  multiple,
  field,
  keepState,
  debug,
  inputRef,
  relevant,
  defaultValue,
  initialValue: userInitialValue,
  formatter,
  parser,
  maintainCursor,
  ...userProps
}) => {
  // For backwards compatability
  const name = userName ?? field;

  if (!name) {
    console.warn('name is a required prop!!!!');
  }

  // Grab the form controller
  const formController = useFormController();

  // For getting initialValue
  const getInitialValue = () =>
    userInitialValue ?? formController.getInitialValue(name) ?? defaultValue;

  // Grab the initial value
  const [initialValue] = useState(() => getInitialValue());

  // Hook onto the field state
  const fieldState = useFieldState(name);

  // Hook onto the field api
  const fieldApi = useFieldApi(name);

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
    maintainCursor
  });

  // Create meta object
  const meta = {
    name,
    type,
    initialValue,
    keepState,
    fieldApi,
    getInitialValue,
    formatter,
    parser,
    setCursorOffset,
    setCursor
  };
  const metaRef = useRef(meta);
  metaRef.current = meta;

  useLayoutEffect(() => {
    if (debug && ref && ref.current) {
      ref.current.style.background = 'orange';
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.background = 'white';
        }
      }, 300);
    }
  });

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

      // Always keep it if this is passed
      if (metaInfo.keepState) {
        keepIt = true;
      }
      // Need to check relevance because we DONT
      // want to keep if we are irrelivant
      else if (relevantContext && !relevantContext.relevant()) {
        keepIt = false;
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

  const render = children => (isRelevant ? children : null);

  const changeHandler = generateOnChange({
    fieldType: type,
    setValue: fieldApi.setValue,
    onChange,
    multiple,
    ref
  });
  const blurHandler = generateOnBlur({
    setTouched: fieldApi.setTouched,
    onBlur
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
    onBlur,
    onChange,
    multiple,
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
      value: hookedValue
    },
    ref,
    render
  };
};
