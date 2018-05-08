import React from 'react'
import Field from '../components/Field';

const asField = ( Component ) => ( props ) => (
  <Field component={Component} {...props} />
)

export default asField;
