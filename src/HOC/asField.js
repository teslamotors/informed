import React from 'react'
import Field from '../components/Field';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const asField = ( Component ) => {
  const displayName = getDisplayName( Component );
  Component.displayName = 'Wrapper';
  const AsField = ( props ) => (
    <Field component={Component} {...props} />
  )
  AsField.displayName = displayName;
  return AsField;
}

export default asField;
