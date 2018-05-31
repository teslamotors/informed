import React, { Component } from 'react'
import { FormContext } from '../Context';
import FormController from '../Controller/FormController';

class Form extends Component {

  constructor(props) {
    super(props);
    const {
      onSubmit,
      preSubmit,
      validate,
      getApi,
      dontPreventDefault,
      onSubmitFailure,
      initialValues,
    } = props
    this.controller = new FormController(
      {
        onSubmit,
        getApi,
        validate,
        preSubmit,
        onSubmitFailure
      },
      {
        dontPreventDefault,
        initialValues
      }
    );
    this.controller.on('change', () => this.forceUpdate() );
    this.controller.on('change', (state) => {
      if( props.onChange ){
        props.onChange(state);
      }
    })
    this.controller.on('values', (values) => {
      if( props.onValueChange ){
        props.onValueChange(values);
      }
    })
  }

  get formContext(){
    return {
      formApi: this.controller.api,
      formState: this.controller.state,
      controller: this.controller
    }
  }

  get content(){
    const {
      children,
      component,
      render,
    } = this.props

    const props = this.formContext;

    if (component) {
      return React.createElement(component, props, children)
    }
    if (render) {
      return render(props)
    }
    if (typeof children === 'function') {
      return children(props)
    }
    return children
  }

  render(){
    const {
      children,
      component,
      render,
      onSubmit,
      preSubmit,
      validate,
      getApi,
      dontPreventDefault,
      onSubmitFailure,
      initialValues,
      onValueChange,
      ...rest
    } = this.props
    return (
      <FormContext.Provider value={this.formContext}>
        <form {...rest} onSubmit={this.formContext.formApi.submitForm}>
          {this.content}
        </form>
      </FormContext.Provider>
    )
  }
}

export default Form;
