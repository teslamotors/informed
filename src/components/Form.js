import React, { Component } from 'react'
import { FormContext } from '../Context';
import withFormApi from '../HOC/withFormApi';
import Controller from '../Controller';

class Form extends Component {

  constructor(props) {
    super(props);
    this.controller = new Controller();
    console.log(this.formContext);
  }

  get formContext(){
    return {
      formApi: this.controller.api,
      formState: this.controller.state
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
