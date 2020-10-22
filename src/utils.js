import ObjectMap from './ObjectMap';

export const getChildDisplayName = WrappedComponent => {
  // fix for "memo" components
  if (WrappedComponent.type && WrappedComponent.type.name) {
    return WrappedComponent.type.name;
  }

  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

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

// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const computeFieldsFromSchema = schema => {
  if (!schema) {
    return [];
  }
  const { properties = {}, propertyOrder = [] } = schema;
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
      const property = properties[propertyName];

      const {
        'ui:control': uiControl,
        'informed:props': informedProps,
        'input:props': inputProps,
        oneOf,
        title
      } = property;

      // Set Id if not passed
      let id = title;
      if (inputProps && inputProps.id) {
        id = inputProps.id;
      }

      const field = {
        componentType: uiControl,
        field: propertyName,
        props: { label: title, ...informedProps, ...inputProps, id }
      };

      if (oneOf) {
        const options = property.oneOf.map(option => {
          const { 'input:props': inputProps = {} } = option;
          return {
            value: option.const,
            label: option.title,
            ...inputProps
          };
        });
        field.props.options = options;
      }

      return field;
    });

  return fields;
};
