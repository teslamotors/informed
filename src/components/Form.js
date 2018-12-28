import React from 'react';
import { FormContext, FormRegisterContext } from '../Context';
import FormController from '../FormController';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new FormController();
    this.state = this.controller.state;
    this.controller.on('change', () => this.forceUpdate());
    this.controller.on('change', () => this.props.onChange && this.props.onChange( this.state ));
    this.controller.on('submit', () => this.props.onSubmit && this.props.onSubmit( this.state.values ) );
    if (this.props.getApi) {
      this.props.getApi(this.controller.api);
    }
  }

  get content() {
    const { children, component, render } = this.props;

    const props = {
      formState: this.controller.getState(),
      formApi: this.controller.api
    };

    if (component) {
      return React.createElement(component, props, children);
    }
    if (render) {
      return render(props);
    }
    if (typeof children === 'function') {
      return children(props);
    }
    return children;
  }

  render() {
    console.log('Render FORM');
    /* ----------- Destructure props ----------- */
    const { children, getApi, onChange, onSubmit, ...rest } = this.props;

    const formContext = {
      formState: this.controller.getState(),
      formApi: this.controller.api
    };

    /* --- Create Provider and render Content --- */
    return (
      <FormRegisterContext.Provider value={this.controller.updater}>
        <FormContext.Provider value={formContext}>
          <form
            {...rest}
            onReset={this.controller.reset}
            onSubmit={this.controller.submitForm}
          >
            {this.content}
          </form>
        </FormContext.Provider>
      </FormRegisterContext.Provider>
    );
  }
}

export default Form;
