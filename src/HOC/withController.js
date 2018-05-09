import React from 'react'
import { FormContext } from '../Context';

const withController = ( Component ) => ( props ) => (
  <FormContext.Consumer>
    {( { controller } ) => <Component controller={controller} {...props} />}
  </FormContext.Consumer>
);

export default withController;
