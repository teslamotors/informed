import React, { useState, useEffect, useContext, useRef, useMemo } from 'react';
import { FormRegisterContext, MultistepStepContext } from '../Context';
import useFormApi from './useFormApi';
import useStateWithGetter from './useStateWithGetter';
import { validateYupField, uuidv4, informedFormat } from '../utils';

import Debug from '../debug';
import useLayoutEffect from './useIsomorphicLayoutEffect';
import ObjectMap from '../ObjectMap';
import useCursorPosition from './useCursorPosition';
import useUpdateEffect from './useUpdateEffect';
const logger = Debug('informed:useField' + '\t');

// localStorage.debug = 'informed:.*' << HOW to enable debuging

const initializeValue = (value, mask, formatter, parser, initialize) => {
  if (value != null) {
    // Call users initialize if it was passed
    if (initialize) {
      return initialize(value);
    }
    // Call mask if it was passed
    if (mask) {
      return mask(value);
    }
    if (formatter && !parser) {
      const res = informedFormat(value, formatter);
      return res.value;
    }
    return value;
  }
  // Not needed but called out specifically
  return undefined;
};

const initializeMask = (value, format, parse, formatter) => {
  // Call format and parse if they were passed
  if (format && parse) {
    return format(value);
  }

  // Call formatter
  if (formatter) {
    const res = informedFormat(value, formatter);
    return res.value;
  }

  return value;
};

const generateValidationFunction = (
  validationFunc,
  validationSchema,
  { required }
) => {
  // We dont want a validation function if there was nothing passed
  if (validationFunc || validationSchema) {
    return (val, values) => {
      if (validationSchema) {
        return validateYupField(validationSchema, val);
      }
      if (validationFunc) {
        return validationFunc(val, values);
      }
    };
  }
  if (required) {
    return val => {
      return validateRequired(val, required);
    };
  }
};

const generateOnChange = ({ fieldType, setValue, onChange, multiple, ref }) => {
  let setter = e => setValue(e);

  if (
    fieldType === 'text' ||
    fieldType === 'textArea' ||
    fieldType === 'number'
  ) {
    setter = e => setValue(e.target.value, e);
  }

  if (fieldType === 'select') {
    setter = () => {
      let selected = Array.from(ref.current)
        .filter(option => option.selected)
        .map(option => option.value);

      setValue(multiple ? selected : selected[0] || '');
    };
  }

  if (fieldType === 'checkbox') {
    setter = e => {
      setValue(e.target.checked);
      if (onChange) {
        onChange(e);
      }
    };
  }

  return e => {
    setter(e);
  };
};

const generateOnBlur = ({ setTouched, onBlur }) => {
  return e => {
    setTouched(true);
    if (onBlur) {
      onBlur(e);
    }
  };
};

const generateValue = ({ fieldType, maskedValue, multiple, value }) => {
  switch (fieldType) {
    case 'text':
    case 'number':
      return !maskedValue && maskedValue !== 0 ? '' : maskedValue;
    case 'textArea':
      return !maskedValue ? '' : maskedValue;
    case 'select':
      return value || (multiple ? [] : '');
    case 'checkbox':
      return !!value;
    default:
      return value;
  }
};

const generateFieldType = fieldType => {
  switch (fieldType) {
    case 'text':
      return fieldType;
    case 'number':
      return fieldType;
    case 'checkbox':
      return fieldType;
    default:
      return;
  }
};

const validateRequired = (value, required) => {
  if (required && (value == null || value === '')) {
    return typeof required === 'string' ? required : 'This field is required';
  }
};

function useField(fieldProps = {}, userRef) {
  // Pull props off of field props
  const {
    field,
    validate: validationFunc,
    asyncValidate,
    validationSchema,
    mask,
    maskWithCursorOffset,
    format,
    parse,
    formatter,
    parser,
    initialValue,
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    asyncValidateOnBlur,
    asyncValidateOnMount,
    maskOnBlur,
    allowEmptyString,
    onValueChange,
    notify,
    keepState,
    maintainCursor,
    debug,
    shadow,
    step,
    fieldType,
    multiple,
    onChange,
    onBlur,
    formController,
    relevant: userRelevant,
    required,
    keepStateIfRelevant,
    initialize,
    formatterDependencies = [],
    ...userProps
  } = fieldProps;

  // Create ref to a field id
  const [fieldId] = useState(uuidv4());

  // Grab the form register context
  let updater = useContext(FormRegisterContext);

  // Grab multistepContext
  const multistepContext = useContext(MultistepStepContext);
  const inMultistep = multistepContext || keepStateIfRelevant;

  // Grab the form api
  let formApi = useFormApi();

  // Create ref to fieldApi
  const fieldApiRef = useRef();

  // Create initial render ref
  const initialRenerRef = useRef(true);

  // Create ref to fieldObject
  const fieldObjectRef = useRef();

  // Create ref for pristine and dirty
  const valueTouched = useRef(false);

  // Getters for value ref
  const getPristine = () => {
    return !valueTouched.current;
  };

  const getDirty = () => {
    return valueTouched.current;
  };

  // If the form Controller was passed in then use that instead
  if (formController) {
    updater = formController.updater;
    formApi = formController.getFormApi();
  }

  // Generate validation function
  const validate = generateValidationFunction(
    validationFunc,
    validationSchema,
    { required }
  );

  // Grab possible initial value from form
  const [formInitialValue] = useState(() => updater.getInitialValue(field));

  // We might have keep state so check for it!
  const savedState = updater.getSavedValue(field);

  // Create Initial Values
  let initVal;
  let initTouched;

  // We do these checks because initial value could be false or zero!!
  if ((keepState || inMultistep) && savedState) {
    logger(`Setting field ${name}'s kept state`, savedState);
    initVal = savedState.value;
    initTouched = savedState.touched;
    // Remove the saved state
    formApi.removeSavedState(name);
  } else if (initialValue != undefined) {
    initVal = initialValue;
  } else {
    initVal = formInitialValue;
  }

  // Initialize state
  const [value, setVal, getTheVal] = useStateWithGetter(
    initializeValue(initVal, mask, formatter, parser, initialize)
  );

  const [error, setErr, getErr] = useStateWithGetter(
    validateOnMount ? validate(value) : undefined
  );
  const [touched, setTouch, getTouch] = useStateWithGetter(initTouched);

  const [maskedValue, setMaskedValue] = useState(() =>
    initializeMask(value, format, parse, formatter, parser)
  );

  const maskedValueRef = useRef();
  maskedValueRef.current = maskedValue;

  // Create then update refs to props
  const initialValueRef = useRef(initialValue);
  const fieldRef = useRef(field);
  const prevFieldRef = useRef();
  initialValueRef.current = initialValue;
  fieldRef.current = field;

  // Create ref to input
  const internalRef = useRef(null);

  const ref = React.useMemo(() => userRef || internalRef, []);

  // Setup cursor position tracking
  const { getCursor, setCursor, setCursorOffset } = useCursorPosition({
    value: value,
    inputRef: ref,
    maintainCursor: !!maintainCursor
  });

  // Default relevant function
  const relevantFunc = () => true;

  const relevant = params => {
    const rel = userRelevant || relevantFunc;
    const ff = formApi.getFullField(fieldRef.current) || fieldRef.current;
    const args = {
      path: ff,
      parentPath: ff.replace(/(.*)[.[].*/, '$1'),
      get: (values, path) => ObjectMap.get(values, path)
    };
    if (multistepContext && multistepContext.relevant) {
      return rel(params, args) && multistepContext.relevant(params, args);
    }
    return rel(params, args);
  };

  const [isRelevant, setIsRelevant, getIsRelevant] = useStateWithGetter(
    relevant(formApi.getValues())
  );

  const multistepRelevant = params => {
    if (multistepContext && multistepContext.relevant) {
      return multistepContext.relevant(params);
    }
    return true;
  };

  const checkRelevant = () => {
    const newRel = relevant(formApi.getValues());
    const curRel = getIsRelevant();

    if (newRel != curRel) {
      setIsRelevant(newRel);
    }
    return newRel;
  };

  useEffect(
    () => {
      // Reset if we dont have keep state and relevance changed.
      if (!isRelevant && !keepState) {
        fieldApiRef.current.reset();
      }
    },
    [isRelevant]
  );

  useEffect(
    () => {
      if (asyncValidate && asyncValidateOnMount) {
        asyncValidate(getVal(), formApi.getValues());
      }
    },
    [asyncValidateOnMount, asyncValidate]
  );

  // Special getter to support shadow fields
  const getVal = () => {
    return shadow ? formApi.getDerrivedValue(field) : getTheVal();
  };

  /* ---------------------- Setters ---------------------- */

  // ---- Define set error ----

  const setError = (val, { preventUpdate } = {}) => {
    // For multistep forms always set error to undefined when not at that step
    if (step && formApi.getStep() < step) {
      logger(
        `Setting ${field}'s error to undefined as we are not at that step`
      );
      setErr(undefined);
      updater.setError(fieldId, undefined, !preventUpdate);
    } else {
      logger(`Setting ${field}'s error to ${val}`);
      setErr(val);
      updater.setError(fieldId, val, !preventUpdate);
    }
  };

  // ---- Define set value ----
  const setValue = (v, e, options = {}) => {
    let val = v;

    // This value has now been modified
    valueTouched.current = true;

    logger(`Setting ${field} to ${val}`);

    // Set value may have been called externally
    // NOT from an inputs change event ( onChange )
    // Therefore, as a precausion, we call the initialize function to format it just in case
    if (initialize) {
      val = initialize(val);
    }

    // Get the most up to date options
    const formOptions = formApi.getOptions();

    // Initialize maked value
    let maskedVal = val;

    if (
      val === '' &&
      !allowEmptyString &&
      !options.allowEmptyString &&
      !formOptions.allowEmptyStrings
    ) {
      val = undefined;
    }

    // Turn string into number for number fields
    if (
      (fieldProps.type === 'number' || fieldType === 'number') &&
      val !== undefined
    ) {
      val = +val;
    }

    // Remember Cursor position!
    if (e && e.target && e.target.selectionStart) {
      setCursor(e.target.selectionStart);
    }

    // Call mask if it was passed
    if (mask && !maskOnBlur) {
      maskedVal = mask(val, getCursor());
      val = mask(val, getCursor());
    }

    // Call maskWithCursorOffset if it was passed
    if (maskWithCursorOffset && !maskOnBlur) {
      const res = maskWithCursorOffset(val, getCursor());
      maskedVal = res.value;
      val = res.value;
      setCursorOffset(res.offset);
    }

    // Call format and parse if they were passed
    if (format && parse) {
      // Masked value only differs from value when format and parse are used
      val = parse(val);
      maskedVal = format(val);
    }

    // Call formatter and parser if passed
    if (formatter) {
      const res = informedFormat(val, formatter);
      setCursorOffset(res.offset);
      maskedVal = res.value;
      val = maskedVal;
    }

    // // Only parse if parser was passed
    if (parser) {
      val = val != null ? parser(val) : val;
    }

    // We only need to call validate if the user gave us one
    // and they want us to validate on change && its not the initial validation
    if (validate && validateOnChange && !options.initial) {
      logger(`Validating after change ${field} ${val}`);
      setError(validate(val, formApi.getValues()));
    }

    // Now we update the value
    setVal(val);
    setMaskedValue(maskedVal);

    // If the user passed in onValueChange then call it!
    if (onValueChange) {
      onValueChange(val);
    }

    // Call the updater
    updater.setValue(fieldId, val, !options.preventUpdate);
  };

  useUpdateEffect(
    () => {
      fieldApiRef.current.setValue(maskedValueRef.current);
    },
    [...formatterDependencies]
  );

  // ---- Define set touched ----
  const setTouched = (val, reset, { preventUpdate } = {}) => {
    logger(`Field ${field} has been touched`);

    // We only need to call validate if the user gave us one
    // and they want us to validate on blur
    if (validate && validateOnBlur && !reset && val) {
      logger(`Validating after blur ${field} ${getVal()}`);
      setError(validate(getVal(), formApi.getValues()));
    }

    // Same for async
    if (asyncValidate && asyncValidateOnBlur && !reset && val) {
      logger(`Validating async after blur ${field} ${getVal()}`);
      asyncValidate(getVal(), formApi.getValues());
    }

    // Call mask if it was passed
    if (mask && maskOnBlur) {
      // Generate the masked value from the current value
      const maskedVal = mask(getVal());

      // Now we update the value
      setVal(maskedVal);
      setMaskedValue(maskedVal);

      // If the user passed in onValueChange then call it!
      if (onValueChange) {
        onValueChange(maskedVal);
      }

      // Call the updater
      updater.setValue(fieldId, maskedVal, !preventUpdate);
    }

    // Call maskWithCursorOffset if it was passed
    if (maskWithCursorOffset && maskOnBlur) {
      // Generate the mask and offset
      const res = maskWithCursorOffset(getVal());

      // Set the offset
      setCursorOffset(res.offset);

      // Now we update the value
      setVal(res.value);
      setMaskedValue(res.value);

      // If the user passed in onValueChange then call it!
      if (onValueChange) {
        onValueChange(res.value);
      }

      // Call the updater
      updater.setValue(fieldId, res.value, !preventUpdate);
    }

    // Finally we set touched and call the updater
    setTouch(val);
    updater.setTouched(fieldId, val, !preventUpdate);
  };

  // ---- Define reset ----
  const reset = ({ preventUpdate } = {}) => {
    const initVal = initializeValue(
      initialValueRef.current || updater.getInitialValue(fieldRef.current),
      mask,
      formatter,
      parser,
      initialize
    );
    // TODO support numbers
    setValue(initVal, null, { initial: true, preventUpdate });
    // Setting somthing to undefined will remove it
    setError(validateOnMount ? validate(initVal) : undefined, {
      preventUpdate
    });
    setTouched(undefined, true, { preventUpdate });

    if (asyncValidateOnMount && asyncValidate) {
      asyncValidate(getVal(), formApi.getValues());
    }

    // We are now at our initial state
    valueTouched.current = false;
  };

  // ---- Define validate ----

  // Note: it takes values as an optimization for when
  // the form controller calls it ( dont need to generate all values )
  // over and over :)
  const fieldValidate = values => {
    if (validate) {
      logger(`Field validating ${field} ${getVal()}`);
      setError(validate(getVal(), values || formApi.getValues()));
    }
  };

  const fieldAsyncValidate = values => {
    if (asyncValidate) {
      logger(`Field async validating ${field} ${getVal()}`);
      asyncValidate(getVal(), values || formApi.getValues());
    }
  };

  /* ----------------- Field Api && State ----------------- */

  // Build the field api
  const fieldApi = {
    setValue,
    setTouched,
    setError,
    reset,
    validate: fieldValidate,
    asyncValidate: fieldAsyncValidate,
    getValue: getVal,
    getTouched: getTouch,
    getError: getErr,
    getIsRelevant: getIsRelevant,
    getDirty,
    getPristine,
    getFieldState: () => ({
      value: getVal(),
      touched: getTouch(),
      dirty: getDirty(),
      pristine: getPristine()
    }),
    relevant,
    multistepRelevant,
    checkRelevant
  };
  fieldApiRef.current = fieldApi;

  // Build the field state
  let fieldState = {
    value,
    error,
    touched,
    maskedValue,
    isRelevant,
    dirty: valueTouched.current,
    pristine: !valueTouched.current
  };

  // Create shadow state if this is a shadow field
  if (shadow) {
    fieldState = {
      error,
      touched
    };
  }

  logger('Render', formApi.getFullField(field), fieldState);

  // We want to register and deregister this field
  useLayoutEffect(() => {
    const fullField = formApi.getFullField(fieldRef.current);
    logger('Register', fieldId, fieldRef.current);
    fieldObjectRef.current = {
      field: fullField,
      fieldId,
      fieldApi,
      fieldState,
      notify,
      keepState,
      inMultistep,
      shadow
    };
    updater.register(fieldId, fieldObjectRef.current);
    return () => {
      const fullField = formApi.getFullField(fieldRef.current);
      logger('Deregister', fieldId, fullField);
      updater.deregister(fieldId);
    };
  }, []);

  // We want to let the controller know of changes on this field when specific props change
  useEffect(
    () => {
      const fullField = formApi.getFullField(field);
      if (initialRenerRef.current) {
        initialRenerRef.current = false;
      } else {
        logger('Update', field, inMultistep);
        fieldObjectRef.current.field = fullField;
        updater.update(fieldId, fieldObjectRef.current, prevFieldRef.current);
      }
      return () => {
        prevFieldRef.current = fullField;
      };
    },
    [field]
  );

  // Maintain cursor position
  // useLayoutEffect(
  //   () => {
  //     if (maintainCursor && ref.current != null && getCursor())
  //       ref.current.selectionEnd = getCursor() + getCursorOffset();
  //   },
  //   [value]
  // );

  // for debugging
  useLayoutEffect(() => {
    if (debug && ref) {
      ref.current.style.border = '5px solid orange';
      setTimeout(() => {
        ref.current.style.borderWidth = '2px';
        ref.current.style.borderStyle = 'inset';
        ref.current.style.borderColor = 'initial';
        ref.current.style.borderImage = 'initial';
      }, 500);
    }
  });

  // This is an awesome optimization!!
  const shouldUpdate = [
    ...Object.values(fieldState),
    ...Object.values(fieldProps),
    ...Object.values(userProps)
  ];

  const render = children =>
    useMemo(() => (isRelevant ? children : null), [...shouldUpdate]);

  // const render = children => {
  //   // console.log('RENDER', field);
  //   return isRelevant ? children : null;
  // };

  // Build some setub fields so users can easily intagrate without any hookup code

  const name = field;
  const changeHandler = generateOnChange({
    fieldType,
    setValue,
    onChange,
    multiple,
    ref
  });
  const blurHandler = generateOnBlur({ setTouched, onBlur });
  const hookedValue = generateValue({
    fieldType,
    maskedValue,
    multiple,
    value
  });

  const type = generateFieldType(fieldType);

  return {
    fieldState,
    fieldApi,
    render,
    ref,
    userProps: {
      ...userProps,
      multiple, // WE NEED TO PUT THESE BACK!!
      onChange, // WE NEED TO PUT THESE BACK!!
      onBlur, // WE NEED TO PUT THESE BACK!!
      // required // WE NEED TO PUT THESE BACK!!
      id: userProps.id || fieldId // If user did not pass id we pass fields id
    },
    informed: {
      name,
      multiple,
      onChange: changeHandler,
      onBlur: blurHandler,
      value: hookedValue,
      ref,
      type,
      id: userProps.id || fieldId, // If user did not pass id we pass fields id
      ...userProps
    }
  };
}

export default useField;
