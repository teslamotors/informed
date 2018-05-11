import React from 'react';
import withFormApi from './withFormApi';
import withController from './withController';

const buildFieldApi = ( formApi, field ) => ({
    getValue: () => formApi.getValue(field),
    setValue: (value) => formApi.setValue(field, value),
    getTouched: () => formApi.getTouched(field),
    setTouched: (value) => formApi.setTouched(field, value),
    getError: () => formApi.getError(field),
    setError: (value) => formApi.setError(field, value),
  }
);

const buildFieldState = ( formApi, field ) => {
  return {
    value: formApi.getValue(field)
  }
};

const withFieldApi = ( field ) => ( Component ) => withFormApi(( formApi, ...props ) => (
  <Component
    fieldApi={buildFieldApi( formApi, field )}
    {...props} />
));

const withFieldState = ( field ) => ( Component ) => withFormApi(( formApi, ...props ) => (
  <Component
    fieldState={buildFieldState( formApi, field )}
    {...props} />
));

const bindToField = ( Component ) => withController(withFormApi( class extends React.PureComponent {

  constructor(props){
    super(props);
    const {
      formApi,
      field,
      controller,
      validate
    } = props;

    this.state = buildFieldState( formApi, field );
    this.fieldApi = buildFieldApi( formApi, field );
    // Rebuild state only when this field changes
    controller.on('field', ( name ) => {
      if( name === formApi.getFullField(field) ){
        this.setState(buildFieldState( formApi, field ));
      }
    });
    // Register our api with the controller so he can do fun stuff with it :)
    controller.register( formApi.getFullField(field), {
      validate,
      ...this.fieldApi
    });
  }

  render(){
    const {
      formApi,
      formState,
      controller,
      validate,
      ...rest
    } = this.props;

    return (
      <Component
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
