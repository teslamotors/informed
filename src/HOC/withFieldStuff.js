import React from 'react'
import { FormContext } from '../Context';
import withFormApi from './withFormApi';
import withFormState from './withFormState';
import withController from './withController';

const buildFieldApi = ( formApi, field ) => ({
    getValue: () => formApi.getValue(field),
    setValue: (value) => {
      formApi.setValue(field, value)
    }
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
    this.state = buildFieldState( props.formApi, props.field );
    this.fieldApi = buildFieldApi( props.formApi, props.field );
    props.controller.on('field', ( field ) => {
      if( field === props.formApi.getFullField(props.field) ){
        this.setState(buildFieldState( props.formApi, props.field ));
      }
    })
  }

  render(){
    const {
      formApi,
      formState,
      controller,
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
