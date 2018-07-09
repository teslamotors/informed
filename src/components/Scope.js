import React, { Component } from 'react';
import { FormContext } from '../Context';
import withFormApi from '../HOC/withFormApi';
import withFormState from '../HOC/withFormState';
import withController from '../HOC/withController';

const buildScopedContext = ( scope, formApi, formState, controller ) => {
  return {
    formApi: {
      ...formApi,
      getValue: ( field ) => formApi.getValue(`${scope}.${field}`),
      setValue: ( field, value ) => formApi.setValue(`${scope}.${field}`, value),
      getTouched: ( field ) => formApi.getTouched(`${scope}.${field}`),
      setTouched: ( field, value ) => formApi.setTouched(`${scope}.${field}`, value),
      getError: ( field ) => formApi.getError(`${scope}.${field}`),
      setError: ( field, value ) => formApi.setError(`${scope}.${field}`, value),
      getFullField: ( field ) => `${formApi.getFullField(scope)}.${field}`
    },
    formState,
    controller
  };
}
/*
  Nested Scope case:
  <Scope scope="Foo">
    getFullField = ('Bar.Baz') => `${formApi.getFullField('Foo')}.'Bar.Baz'`
    <Scope scope="Bar">
      getFullField = ('Baz') => `${formApi.getFullField('Bar')}.'Baz'`
      <Text field="Baz">
        getFullField = getFullField('Baz');
      </Text>
    </Scope>
  </Scope>
*/

class Scope extends Component {

  constructor(props){
    super(props);
    const {
      scope,
      formApi,
      formState,
      controller
    } = props;
    this.formContext = buildScopedContext( scope, formApi, formState, controller )
  }

  render() {
    const {children} = this.props;
    return (
      <FormContext.Provider value={this.formContext}>
        {children}
      </FormContext.Provider>
    );
  }
}

export default withFormState( withController( withFormApi( Scope ) ) );
