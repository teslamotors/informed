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
      onSubmitFailure
    } = props
    this.controller = new FormController({
      hooks: {
        onSubmit,
        getApi,
        validate,
        preSubmit,
        onSubmitFailure
      },
      config: {
        dontPreventDefault
      }
    });
    // this.formContext = {
    //   formApi: this.controller.api,
    //   formState: this.controller.state,
    //   controller: this.controller
    // }
    this.controller.on('change', () => this.forceUpdate() );
    this.controller.on('change', (state) => {
      if( props.onChange ){
        props.onChange(state);
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
    return (
      <FormContext.Provider value={this.formContext}>
        {this.content}
      </FormContext.Provider>
    )
  }
}

export default Form;
