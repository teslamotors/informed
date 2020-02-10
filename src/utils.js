import ObjectMap from './ObjectMap';

export const getChildDisplayName = WrappedComponent => {
  // fix for "memo" components
  if (WrappedComponent.type && WrappedComponent.type.name) {
    return WrappedComponent.type.name;
  }

  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export const yupToFormErrors = (yupError) => {
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