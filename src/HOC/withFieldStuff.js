import React from 'react';
import withFormApi from './withFormApi';
import withController from './withController';
import FieldController from '../Controller/FieldController';

const buildFieldApi = ( formApi, field ) => ({
    getValue: () => formApi.getValue(field),
    setValue: (value) => formApi.setValue(field, value),
    getTouched: () => formApi.getTouched(field),
    setTouched: (value) => formApi.setTouched(field, value),
    getError: () => formApi.getError(field),
    setError: (value) => formApi.setError(field, value)
  }
);

const buildFieldState = ( formApi, field ) => {
  return {
    value: formApi.getValue(field),
    touched: formApi.getTouched(field),
    error: formApi.getError(field)
  }
};

const withFieldApi = ( field ) => ( Component ) => withFormApi(({formApi, ...props}) => (
  <Component
    fieldApi={buildFieldApi( formApi, field )}
    {...props} />
));

const withFieldState = ( field ) => ( Component ) => withFormApi(({ formApi, ...props }) => (
  <Component
    fieldState={buildFieldState( formApi, field )}
    {...props} />
));

const bindToField = ( Component ) => withController(withFormApi( class extends React.PureComponent {

  constructor(props){
    super(props);
    const {
      // Comes from withFormApi
      formApi,
      // Comes from withController
      controller,
      // Comes from user props
      field,
      validate,
      validateOnBlur,
      validateOnChange,
      initialValue
    } = props;

    this.state = buildFieldState( formApi, field );
    this.fieldApi = buildFieldApi( formApi, field );

    // Rebuild state when field changes
    controller.on('field', ( name ) => {
      if( name === formApi.getFullField(field) ){
        this.setState(buildFieldState( formApi, field ));
      }
    });

    // Rebuild state when controller emits update
    // this happens on events such as submission
    controller.on('update', () => {
      this.setState(buildFieldState( formApi, field ));
    })

    this.register = () => {
      // Register our field with the controller so he can do fun stuff with it :)
      controller.register( formApi.getFullField(field), new FieldController(
        formApi.getFullField(field),
        this.fieldApi,
        {
          validateOnBlur,
          validateOnChange,
          validate,
          initialValue
        }
      ));
    }

    this.deregister = () => {
      controller.deregister(formApi.getFullField(field));
    }

    this.register = this.register.bind(this);
    this.deregister = this.deregister.bind(this);
  }

  render(){
    const {
      formApi,
      formState,
      controller,
      validate,
      validateOnBlur,
      validateOnChange,
      ...rest
    } = this.props;

    return (
      <Component
        register={this.register}
        deregister={this.deregister}
        fieldApi={this.fieldApi}
        fieldState={this.state}
        {...rest} />
    )
  }
}));

export {
  withFieldApi,
  withFieldState,
  bindToField
}
