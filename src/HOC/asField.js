import React from 'react'
import Field from '../components/Field';

const asField = ( Component ) => React.forwardRef(( props, ref ) => (
  <Field component={Component} forwardedRef={ref} {...props} />
));

export default asField;
