import { ObjectMap } from './ObjectMap';

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

export const isChild = (parent, child) => {
  // Example1
  // parent = "friends[1]"
  // child = "friends[1].foo"
  // child.slice(0, parent.length)
  // ==> "friends[1]"
  // "friends[1]" === "friends[1]"
  // ==> true

  // Example2
  // parent = "friends[1].foo.friends[1]"
  // child = "friends[1].foo"
  // child.slice(0, parent.length)
  // ==> "friends[1].foo"
  // "friends[1].foo" === "friends[1]"
  // ==> false

  return child.slice(0, parent.length) === parent;
};

export const generateOnChange = ({
  fieldType,
  setValue,
  onChange,
  multiple,
  ref
}) => {
  let setter = e => setValue(e);

  if (
    fieldType === 'text' ||
    fieldType === 'textArea' ||
    fieldType === 'number'
  ) {
    setter = e => {
      setValue(e.target.value, e);
      if (onChange) {
        onChange(e);
      }
    };
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

export const generateOnBlur = ({ setTouched, onBlur }) => {
  return e => {
    setTouched(true);
    if (onBlur) {
      onBlur(e);
    }
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

export const validateRequired = (value, required) => {
  if (required && (value == null || value === '')) {
    return typeof required === 'string' ? required : 'This field is required';
  }
};

export const generateValidationFunction = (
  validationFunc,
  validationSchema,
  { required }
) => (val, values) => {
  let error;

  if (required) {
    error = validateRequired(val, required);
    if (error !== undefined) return error;
  }
  if (validationSchema) {
    error = validateYupField(validationSchema, val);
    if (error !== undefined) return error;
  }
  if (validationFunc) {
    error = validationFunc(val, values);
    if (error !== undefined) return error;
  }

  return error;
};

/* -------------------------- Formatter ----------------------------- */

const getFormatter = (formatter, value) => {
  // If mask is a string turn it into an array;
  if (typeof formatter === 'string') {
    return formatter.split('').map(char => {
      if (char === '#') {
        return /\d/;
      }

      if (char === '*') {
        return /[\w]/;
      }

      return char;
    });
  }

  // If mask is a function use it to genreate current mask
  if (typeof formatter === 'function') {
    return formatter(value);
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

export const informedFormat = (val, frmtr) => {
  // console.log('Formatting', val);

  // Null check
  if (!val) {
    return {
      val,
      offset: 0
    };
  }

  const value = `${val}`;

  // Generate formatter array
  const formatter = getFormatter(frmtr, value);

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

  return {
    value: formatted.join(''),
    offset: value ? formatted.length - value.length : 0
  };
};
