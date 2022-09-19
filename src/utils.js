import { ObjectMap } from './ObjectMap';
import { Debug } from './debug';
const debug = Debug('informed:utils' + '\t');

// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getParentPath = name => {
  // Example friends >>>> friends
  // Example father.name >>>> father
  // Example friends[0] >>>> friends
  // Example friends[0].father.name >>>> friends[0].father
  // Example friends[0].father.siblings[1].name >>>> friends[0].father.siblings[1]
  const parentArrayPath = name.replace(/(.*)[.[].*/, '$1');

  return parentArrayPath;
};

export function debounceByName(func, timeout = 300) {
  let timers = {};
  return (...args) => {
    const name = args[0];
    clearTimeout(timers[name]);
    // console.log('CLEARING', name);
    timers[name] = setTimeout(() => {
      // console.log('APPLYING', name);
      func.apply(this, args);
    }, timeout);
  };
}

export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

// Example debounce
// function saveInput(){
//   console.log('Saving data');
// }
// const processChange = debounce(() => saveInput());

// Elon -----------
export class Elon {
  // Static functions
  static inspect(validators) {
    // Create validation funciton
    return (value, values) => {
      for (let i = 0; i < validators.length; i++) {
        // get validator
        const validator = validators[i];
        // call validator
        const res = validator(value, values);
        // If we have error return it ( exit early )
        if (res) return res;
      }
    };
  }
}

// Is Child
export const isChild = (parent, child) => {
  // console.log(
  //   'PARENT',
  //   parent,
  //   'CHILD',
  //   child,
  //   'RES',
  //   child.slice(0, parent.length) === parent
  // );

  // Example1
  // parent = "friends[1]"
  // child = "friends[1].foo"
  // child.startsWith(`${parent}.`)
  // "friends[1].foo".startsWith("friends[1]")
  // ==> true

  // Example2
  // parent = "friends[1].foo.friends[1]"
  // child = "friends[1].foo"
  // child.startsWith(`${parent}.`)
  // "friends[1].foo".startsWith("friends[1].foo.friends[1]")
  // ==> false

  return child.startsWith(`${parent}.`);
};

export const generateOnChange = ({ fieldType, setValue, multiple, ref }) => {
  let setter = e => setValue(e);

  if (
    fieldType === 'text' ||
    fieldType === 'textArea' ||
    fieldType === 'number'
  ) {
    setter = e => {
      setValue(e.target.value, e);
    };
  }

  if (fieldType === 'select') {
    setter = e => {
      let selected = Array.from(ref.current)
        .filter(option => option.selected)
        .map(option => option.value);

      setValue(multiple ? selected : selected[0] || '', e);
    };
  }

  if (fieldType === 'checkbox') {
    setter = e => {
      setValue(e.target.checked, e);
    };
  }

  return e => {
    setter(e);
  };
};

export const generateOnBlur = ({ setTouched }) => {
  return e => {
    setTouched(true, e);
  };
};

export const generateOnFocus = ({ setFocused }) => {
  return e => {
    setFocused(true, e);
  };
};

export const generateValue = ({ fieldType, maskedValue, multiple, value }) => {
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

// https://stackoverflow.com/questions/52367849/remove-empty-null-values-from-nested-object-es6-clean-nested-objects
export const sanitize = obj => {
  if (!obj) return obj;
  Object.keys(obj).forEach(
    key =>
      (obj[key] && typeof obj[key] === 'object' && sanitize(obj[key])) ||
      (obj[key] === undefined && delete obj[key])
  );
  return obj;
};

/* -------------------------- Error Utils ----------------------------- */

export const yupToFormErrors = yupError => {
  const errors = {};
  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      // console.log(yupError.path);
      ObjectMap.set(errors, yupError.path, yupError.message);
      return;
    }
    for (let err of yupError.inner) {
      if (!ObjectMap.get(errors, err.path)) {
        // console.log(errors, err.path, err.message);
        ObjectMap.set(errors, err.path, err.message);
      }
    }
  }
  return errors;
};

export const validateYupSchema = (schema, values) => {
  try {
    schema.validateSync(values, { abortEarly: false });
  } catch (e) {
    const formErrors = yupToFormErrors(e);
    return formErrors;
  }
};

export const yupToFormError = yupError => {
  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return;
    }
    const err = yupError.inner[0];
    return err.message;
  }
};

export const validateYupField = (schema, value) => {
  try {
    schema.validateSync(value, { abortEarly: false });
  } catch (e) {
    return yupToFormError(e);
  }
};

export const validateAjvSchema = (validate, data) => {
  validate(data);
  const errors = {};
  if (validate.errors) {
    validate.errors.forEach(({ message, dataPath, keyword, params }) => {
      let path = dataPath;

      // Special case for required
      if (keyword === 'required') {
        path = `${path}.${params.missingProperty}`;
      }

      // Get rid of leading dot
      path = path.replace('.', '');
      // console.log('PATH', path, message);
      // TODO get message from informed if present
      ObjectMap.set(errors, path, message);
    });
  }
  return errors;
};

export const validateRequired = (value, required, getErrorMessage) => {
  if (required && (value == null || value === '')) {
    return typeof required === 'string'
      ? required
      : getErrorMessage('required') || 'This field is required';
  }
};

export const validateMax = (value, max, getErrorMessage) => {
  if (max != null && value > max) {
    return (
      getErrorMessage('maximum') || `This field should NOT be more than ${max}`
    );
  }

  return undefined;
};

export const validateMin = (value, min, getErrorMessage) => {
  if (min != null && value < min) {
    return (
      getErrorMessage('minimum') || `This field should NOT be less than ${min}`
    );
  }

  return undefined;
};

export const validateMaxLength = (value, maxLength, getErrorMessage) => {
  if (maxLength != null && value?.length > maxLength) {
    return (
      getErrorMessage('maxLength') ||
      `This field should NOT be more than ${maxLength} characters`
    );
  }
  return undefined;
};

export const validateMinLength = (value, minLength, getErrorMessage) => {
  if (minLength != null && value?.length < minLength) {
    return (
      getErrorMessage('minLength') ||
      `This field should NOT be shorter than ${minLength} characters`
    );
  }
  return undefined;
};

const validatePattern = (value, pattern, getErrorMessage) => {
  if (pattern != null && !new RegExp(pattern).test(value) && value) {
    return (
      getErrorMessage('pattern') ||
      `This field should match pattern "${pattern}";`
    );
  }

  return undefined;
};

export const generateValidationFunction = (
  validationFunc,
  yupSchema,
  {
    required,
    minimum,
    maximum,
    minLength,
    maxLength,
    pattern,
    getErrorMessage,
    validateModified,
    fieldApi,
    formController,
    scope
  }
) => (val, values) => {
  let error;

  if (validateModified && fieldApi.getModified() === undefined) {
    return;
  }

  if (required) {
    error = validateRequired(val, required, getErrorMessage);
    if (error !== undefined) return error;
  }
  if (minimum != null) {
    error = validateMin(val, minimum, getErrorMessage);
    if (error !== undefined) return error;
  }
  if (maximum != null) {
    error = validateMax(val, maximum, getErrorMessage);
    if (error !== undefined) return error;
  }
  if (minLength != null) {
    error = validateMinLength(val, minLength, getErrorMessage);
    if (error !== undefined) return error;
  }
  if (maxLength != null) {
    error = validateMaxLength(val, maxLength, getErrorMessage);
    if (error !== undefined) return error;
  }
  if (pattern) {
    error = validatePattern(val, pattern, getErrorMessage);
    if (error !== undefined) return error;
  }
  if (yupSchema) {
    error = validateYupField(yupSchema, val);
    if (error !== undefined) return error;
  }
  if (validationFunc) {
    error = validationFunc(val, values, {
      formState: formController.getFormState(),
      formApi: formController.getFormApi(),
      scope
    });
    if (error !== undefined) return error;
  }

  return error;
};

/** --------------------------------------------------------------------------------------------
 * Helper function for getFormatter
 * @param {*} formatter
 * @returns
 */
const formatterFromString = formatter => {
  return formatter.split('').map(char => {
    if (char === '#') {
      return /\d/;
    }

    if (char === '*') {
      return /[\w]/;
    }

    return char;
  });
};

/* -------------------------- Formatter ----------------------------- */

const getFormatter = (formatter, value, full) => {
  // If mask is a string turn it into an array;
  if (typeof formatter === 'string') {
    return formatterFromString(formatter);
  }

  // If mask is a function use it to genreate current mask
  if (typeof formatter === 'function') {
    const frmtr = formatter(value, full);

    if (typeof frmtr === 'string') {
      return formatterFromString(frmtr);
    }
    return frmtr;
  }

  if (Array.isArray(formatter)) {
    return formatter;
  }

  // Should never make it here throw
  throw new Error('Formatter must be string, array, or function');
};

const matchingIndex = (a, b) => {
  let i = 0;
  let mi = -1;
  let matching = true;
  // a = "+1 "
  // b = "+12"
  while (matching && i < a.length) {
    if (a[i] == b[i]) {
      mi = i;
    } else {
      matching = false;
    }

    i = i + 1;
  }

  return mi;
};

export const informedParse = (val, parser) => {
  // Our parser is an object! so we must parse for each key
  // Example:
  //
  // formatter: {
  //   a: formatter,
  //   b: formatter
  // }
  if (typeof parser === 'object' && !Array.isArray(parser)) {
    const parsedVal = {};
    Object.keys(val).forEach(key => {
      // parser['foo'] = val['foo']
      // Only try to parse if we have parser for this key!!!
      if (parser[key]) {
        const value = parser[key](val[key]);
        parsedVal[key] = value;
      } else {
        parsedVal[key] = val[key];
      }
    });
    return parsedVal;
  }
  // Simply pass along if its a flat formatter
  return parser(val);
};

export const informedFormat = (val, frmtr, old) => {
  // Our formatter is an object! so we must format for each key
  // Example:
  //
  // formatter: {
  //   a: formatter,
  //   b: formatter
  // }
  if (typeof frmtr === 'object' && !Array.isArray(frmtr)) {
    const formattedVal = {};
    const formattedOffset = {};
    Object.keys(val).forEach(key => {
      // Only try to format if we have formatter for this key!!!
      if (frmtr[key]) {
        // console.log('Old', old);
        const { value, offset } = informedFormatter(
          val[key],
          frmtr[key],
          old ? old[val] : undefined,
          val
        );
        formattedVal[key] = value;
        formattedOffset[key] = offset;
      } else {
        formattedVal[key] = val[key];
        formattedOffset[key] = 0;
      }
    });
    return {
      value: formattedVal,
      offset: formattedOffset
    };
  }
  // Simply pass along if its a flat formatter
  return informedFormatter(val, frmtr, old, val);
};

export const informedFormatter = (val, frmtr, old, full) => {
  // console.log('Formatting', val);
  debug('Formatting', val);
  debug('Full Value', full);

  // Null check
  if (!val) {
    return {
      value: val,
      offset: 0
    };
  }

  const value = `${val}`;

  // Generate formatter array
  const formatter = getFormatter(frmtr, value, full);

  // Start to fill in the array
  // Example: phone formatter
  // formatter =['+', '1', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  // value examples:
  // "1231231234 ----> +1 123-123-1234
  // "+" 				 ----> +
  // "+1" 			 ----> +1
  // "+2"				 ----> +1 2
  // "1"				 ----> +1 1
  // "1234"			 ----> +1 123-4
  // "123a"      ----> +1 123

  // console.log('New', value);
  // console.log('Old', old);
  // console.log('Formatter', formatter);

  // Determine prefix length and suffix start
  const prefixLength = formatter.findIndex(v => typeof v != 'string');
  const suffixStart =
    formatter.length -
    [...formatter].reverse().findIndex(v => typeof v != 'string');

  // Formatted value
  let formatted = [];

  // The characters from the current value
  const chars = value.split('');

  // To track the value index during itteration
  let vIndex = 0;

  let start = 0;

  // If the value matches part of the prefix take it out
  // Example prefix = "+1 " value = ["+1 123-123-1234", "+12", "+2"]
  const matchIndex = matchingIndex(
    formatter.slice(0, prefixLength),
    chars.slice(0, prefixLength)
  );
  // console.log('Matching index', matchIndex);
  if (matchIndex > -1) {
    //vIndex = prefixLength;
    vIndex = matchIndex + 1;
    formatted = formatted.concat(formatter.slice(0, matchIndex + 1));
    start = matchIndex + 1;
  }
  // Example prefix = "+1 " value=["1", "1234"]
  if (matchIndex < 0) {
    // Start past the prefix
    formatted = formatted.concat(formatter.slice(0, prefixLength));
    start = prefixLength;
  }

  // console.log('start', start, formatted);
  // console.log('PREFIX_LENGTHT', prefixLength);
  // console.log('SUFIX_START', suffixStart);
  // console.log('FORMATTER_LENGTH', formatter.length);

  // To track if we have made it past the prefix
  let pastPrefix = false;

  // Fill in the stuff
  for (let i = start; i < formatter.length; i++) {
    // Get current formatter location matcher
    const matcher = formatter[i];

    // We get past the prefix if matcher is not a string
    if (!pastPrefix && typeof matcher != 'string') {
      pastPrefix = true;
    }

    // Chec to see if there is more value to look at
    if (vIndex != chars.length) {
      // Get the current value character
      const curChar = chars[vIndex];

      // Special case for function
      if (typeof matcher === 'function') {
        formatted.push(matcher(curChar));
        vIndex = vIndex + 1;
      } else {
        // If type is string normal compare otherwise regex compare
        const match =
          typeof matcher === 'string'
            ? matcher === curChar
            : matcher.test(curChar);

        // If the current character of the value matches and matcher is a string
        // "1" === "1"
        if (match && typeof matcher === 'string') {
          formatted.push(matcher);
          //if( pastPrefix ){
          vIndex = vIndex + 1;
          //}
        }
        // If the current character does not match and matcher is a stirng
        // "1" != "+"
        else if (!match && typeof matcher === 'string') {
          // Special check for 123a ---> dont want "+1 123-"
          // Special check for 1234 ---> DO want "+1 123-4"
          if (vIndex != chars.length) formatted.push(matcher);
        }
        // If the current character matches and the matcher is not a string
        // /\d/.test("2")
        else if (match && typeof matcher != 'string') {
          formatted.push(curChar);
          vIndex = vIndex + 1;
        }
        // If the current character does NOT match and the matecer is regex
        // /\d/.test("a")
        else if (!match && typeof matcher != 'string') {
          // Throw out this value
          vIndex = vIndex + 1;
          i = i - 1;
        }
      }
    } else {
      // If mattcher is a string and we are at suffix keep going
      if (typeof matcher === 'string' && i >= suffixStart) {
        formatted.push(matcher);
      } else {
        // Otherwise we want to break out
        break;
      }
    }
  }

  // console.log('FORMATTEDARR', formatted);
  // console.log('VALUE', value, value.length);
  let formattedString = formatted.join('');
  // console.log('FORMATTED', formattedString, formattedString.length);

  let offset = value ? formattedString.length - value.length : 0;

  // console.log('OFFSET', offset);

  // Special case,
  // Suffix is '-'
  // user typed backspace
  // +1 123-123-1234-|
  // +1 123-123-1234|-
  //                ^
  //           suffixStart (15)
  // New: +1 123-123-1234
  // Old: +1 123-123-1234-
  //
  // New length is less than old length
  // And length of new is greater than or equal two suffix start
  if (
    value &&
    old &&
    value.length < old.length &&
    value.length >= suffixStart
  ) {
    offset = 0;
    // console.log('OFFSET OVERRIDE', offset);
    // Special case, we want to diable keeping suffix on backspace in react native
    if (
      typeof navigator !== 'undefined' &&
      navigator.product === 'ReactNative'
    ) {
      // I'm in react-native
      formattedString = formattedString.slice(0, suffixStart);
    }
  }

  return {
    value: formattedString,
    offset
  };
};

/* --------------------------------------- createIntlNumberFormatter --------------------------------------- */

export const createIntlNumberFormatter = (locale, opts = {}) => {
  const numberFormatter = new Intl.NumberFormat(locale, opts);
  const numberFormatterWithoutOpts = new Intl.NumberFormat(locale, opts);
  const decimalChar =
    numberFormatterWithoutOpts
      .formatToParts(0.1)
      .find(({ type }) => type === 'decimal')?.value ?? '.';

  // console.log('-1 number parts', numberFormatter.formatToParts(-1));

  // Try to find minus sign
  let minusChar = numberFormatter
    .formatToParts(-1)
    .find(({ type }) => type === 'minusSign')?.value;

  // special case if we did not find it then look one more time but for a literal ( accounting will lead to this case where "(" is neg symbol )
  if (!minusChar) {
    minusChar =
      numberFormatter.formatToParts(-1).find(({ type }) => {
        return type === 'literal';
      })?.value ?? '-';
  }

  function isRegexEqual(x, y) {
    return (
      x instanceof RegExp &&
      y instanceof RegExp &&
      x.source === y.source &&
      x.global === y.global &&
      x.ignoreCase === y.ignoreCase &&
      x.multiline === y.multiline
    );
  }

  function findLastIndex(arr, predicate) {
    let l = arr.length;
    // eslint-disable-next-line no-plusplus
    while (l--) {
      if (predicate(arr[l])) return l;
    }
    return -1;
  }

  function insert(arr, index, value) {
    const nextArr = [...arr];

    if (Array.isArray(value)) {
      nextArr.splice(index, 0, ...value);
    } else {
      nextArr.splice(index, 0, value);
    }

    return nextArr;
  }

  function stripNonNumeric(str) {
    return `${str}`.replace(/\D/g, '');
  }

  function toNumberString(str, decimalChar = '.') {
    // Special case if user types the decimal char
    if (str === decimalChar) {
      return '';
    }

    // If its a number we always use dot notation
    if (typeof str === 'number') {
      return `${str}`
        .split('.')
        .map(splitStr => stripNonNumeric(splitStr))
        .join('.');
    }

    return `${str}`
      .split(decimalChar)
      .map(splitStr => stripNonNumeric(splitStr))
      .join('.');
  }

  function toFloat(str, decimalChar = '.') {
    if (typeof str === 'number') {
      return str;
    }

    const float = parseFloat(toNumberString(str, decimalChar));

    // console.log('ISNAN', Number.isNaN(float));
    return !Number.isNaN(float) ? float : undefined;
  }

  function mask(value, ogValue) {
    // console.log('--------------\n');

    // value = -3000.25
    // console.log('decChar', decimalChar);
    // console.log('minusChar', minusChar);
    // console.log('VAL', value);

    const isNegative =
      `${value}`.includes(minusChar) || `${value}`.includes('-');

    // In case the value is a number from initial value we want to pass the OG value ( not the one we turned into a string in informedFormatter )
    const float = toNumberString(ogValue, decimalChar);

    // float = 3000.25
    // console.log('float', float);

    const fraction = `${float}`.split('.')[1];

    // fraction = 25
    // console.log('fraction', fraction);

    const number = isNegative ? -Number(float) : Number(float);

    const numberParts = numberFormatter.formatToParts(number);

    // Special case, if number parts does not contain a "decimal" than we want to throw out the decimal from the value
    const hasDecimal = numberParts.find(part => part.type === 'decimal');

    // number-parts =
    // 0: {type: 'minusSign', value: '-'}
    // 1: {type: 'currency', value: '$'}
    // 2: {type: 'integer', value: '3'}
    // 3: {type: 'group', value: ','}
    // 4: {type: 'integer', value: '000'}
    // 5: {type: 'decimal', value: '.'}
    // 6: {type: 'fraction', value: '25'}
    // console.log('number-parts', numberParts);

    if (fraction === '0') {
      numberParts.push(
        { type: 'decimal', value: decimalChar },
        { type: 'fraction', value: fraction }
      );
    }

    let maskArray = numberParts.reduce((pv, { type, value: partValue }) => {
      // PV [] minusSign -
      // PV ['-'] currency $
      // PV ['-', '$'] integer 3
      // PV ['-', '$', /\d/] group ,
      // PV ['-', '$', /\d/, ','] integer 000
      // PV ['-', '$', /\d/, ',', /\d/, /\d/, /\d/] decimal .
      // PV ['-', '$', /\d/, ',', /\d/, /\d/, /\d/, '.'] fraction 25
      // console.log('PV', pv, type, partValue);

      if (['decimal', 'fraction'].includes(type) && fraction == null) {
        return pv;
      }

      if (['integer', 'fraction'].includes(type)) {
        return [
          ...pv,
          ...partValue
            .split('')
            .filter(
              (_, index) =>
                type === 'fraction' ? index < fraction.length : true
            )
            .map(() => /\d/)
        ];
      }

      if (type === 'currency' || type === 'minusSign') {
        return [...pv, ...partValue.split('')];
      }

      return [...pv, partValue];
    }, []);

    // console.log('PV', maskArray);

    let lastDigitIndex = findLastIndex(maskArray, maskChar => {
      return isRegexEqual(maskChar, /\d/);
    });

    // console.log('lastDigitIndex', lastDigitIndex);

    if (
      maskArray.indexOf(decimalChar) === -1 &&
      `${value}`.indexOf(decimalChar) !== -1 &&
      hasDecimal
    ) {
      maskArray = insert(maskArray, lastDigitIndex + 1, [decimalChar]);
      lastDigitIndex += 2; // we want to insert a new number after the decimal
    }

    const endOfMask = maskArray.slice(lastDigitIndex + 1).join('');
    maskArray = [...maskArray.slice(0, lastDigitIndex + 1), endOfMask];

    return maskArray;
  }

  const parser = value => {
    if (value == null) {
      return undefined;
    }

    const isNegative = `${value}`.includes(minusChar);

    // console.log('TOPARSE', value);

    return isNegative
      ? -toFloat(value, decimalChar)
      : toFloat(value, decimalChar);
  };

  return { formatter: mask, parser };
};

/* --------------------------------------- Schema Shit --------------------------------------- */

// Examples
// field = "name" ---> properties.name
// field = "brother.name" ---> properties.brother.properties.name
// field = "brother.siblings[1].friend.name" ---> properties.brother.properties.siblings.items.properties.friend.properties.name
export const getSchemaPathFromJsonPath = jsonPath => {
  // Convert
  let schemaPath = jsonPath
    .replace(/\./g, '.properties.')
    .replace(/\[\d+\]/g, '.items');
  // Add first properties
  schemaPath = `properties.${schemaPath}`;
  return schemaPath;
};

export const computeFieldFromProperty = (propertyName, property, prefix) => {
  const {
    'ui:control': uiControl,
    'ui:props': inputProps,
    'ui:before': uiBefore,
    'ui:after': uiAfter,
    oneOf,
    items,
    enum: schemaEnum,
    title: label,
    minimum,
    maximum,
    minLength,
    maxLength,
    pattern,
    required,
    type,
    properties: subProperties,
    allOf,
    propertyOrder,
    errorMessage
  } = property;

  // Set Id if not passed
  let id = uuidv4();
  if (inputProps && inputProps.id) {
    id = inputProps.id;
  }

  const field = {
    // componentType: uiControl ?? (oneOf && 'select') ?? type,
    componentType: uiControl ?? type,
    name: prefix ? `${prefix}.${propertyName}` : propertyName,
    type,
    uiBefore,
    uiAfter,
    properties: type === 'object' ? subProperties : undefined,
    allOf: type === 'object' ? allOf : undefined,
    propertyOrder: type === 'object' ? propertyOrder : undefined,
    items: type === 'array' ? items : undefined,
    propertyName,
    required,
    props: {
      label: label,
      id,
      minimum,
      maximum,
      minLength,
      maxLength,
      pattern,
      errorMessage,
      ...inputProps
    }
  };

  // console.log('NAME', propertyName, inputProps);

  if (oneOf) {
    const options = property.oneOf.map(option => {
      const { 'ui:props': inputProps = {} } = option;
      return {
        value: option.const,
        label: option.title,
        ...inputProps
      };
    });
    field.props.options = options;
  }

  if (schemaEnum) {
    const options = property.enum.map(val => {
      return {
        value: val,
        label: val
      };
    });
    field.props.options = options;
  }

  if (items && items.oneOf) {
    const options = items.oneOf.map(option => {
      const { 'ui:props': inputProps = {} } = option;
      return {
        value: option.const,
        label: option.title,
        ...inputProps
      };
    });
    field.props.options = options;
  }

  return field;
};

export const computeFieldsFromSchema = (schema, onlyValidateSchema) => {
  if (!schema || onlyValidateSchema) {
    return { properties: [], conditions: [], components: [] };
  }

  // Grab properties and items off of schema
  const { properties = {}, allOf, propertyOrder = [] } = schema;

  if (Object.keys(properties).length > 0) {
    // Attempt to generate fields from properties
    const fields = Object.keys(properties)
      .sort((a, b) => {
        const aIndex = propertyOrder.indexOf(a);
        const bIndex = propertyOrder.indexOf(b);

        return (
          (aIndex > -1 ? aIndex : propertyOrder.length + 1) -
          (bIndex > -1 ? bIndex : propertyOrder.length + 1)
        );
      })
      .map(propertyName => {
        return propertyName;
      });

    let conditions = [];
    let components = [];

    // Check for all of ( we have conditionals )
    if (allOf) {
      allOf.forEach(item => {
        if (item.if) {
          // Determine if the "then" properties are new or already in fields
          const newItem = { ...item };
          newItem.then = { ...item.then, properties: {} };
          newItem.thenProps = {};
          Object.keys(item.then.properties).forEach(name => {
            if (!fields.includes(name)) {
              // This is a completley new field!
              newItem.then.properties[name] = item.then.properties[name];
            } else {
              // This field has been spotted above, and therefore is just new properties based on conditional
              newItem.thenProps[name] = item.then.properties[name];
            }
          });
          conditions.push(newItem);
        } else {
          components.push(item);
        }
      });
    }

    return { properties: fields, conditions, components };
  }

  return { properties: [], conditions: [], components: [] };
};

export function checkCondition(condition, propertyValue) {
  // if (!isPlainObject(condition)) {
  //   return false;
  // }

  return Object.entries(condition).every(([keyword, value]) => {
    // console.log('KEYWORD', keyword, value, propertyValue);
    switch (keyword) {
      case 'const':
        if (Array.isArray(propertyValue) && value) {
          return propertyValue.sort().toString() == value.sort().toString();
        } else {
          return propertyValue === value;
        }
      case 'minimum':
        return propertyValue >= value;
      case 'exclusiveMinimum':
        return propertyValue > value;
      case 'maximum':
        return propertyValue <= value;
      case 'exclusiveMaximum':
        return propertyValue < value;
      case 'enum':
        if (Array.isArray(value) && !Array.isArray(propertyValue)) {
          return value.includes(propertyValue);
        }
        if (Array.isArray(value) && Array.isArray(propertyValue)) {
          return propertyValue.every(a => value.includes(a));
        }
        return false;
      case 'oneOf':
        if (Array.isArray(value) && !Array.isArray(propertyValue)) {
          return value.includes(propertyValue);
        }
        if (Array.isArray(value) && Array.isArray(propertyValue)) {
          return value.find(a => propertyValue.includes(a));
        }
        return false;
      case 'pattern':
        return new RegExp(value).test(propertyValue);
      // case 'properties':
      //   // eslint-disable-next-line no-use-before-define
      //   return checkProperties(value, values, propertyPath);
      case 'not':
        return propertyValue !== value;
      default:
        // not supported keywords return false
        return false;
    }
  });
}

// expose proxy utils
export { unwrap } from './proxy';
