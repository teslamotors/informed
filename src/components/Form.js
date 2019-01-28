import React from 'react';
import { FormContext, FormRegisterContext } from '../Context';
import FormController from '../FormController';
import Debug from 'debug';
const debug = Debug('informed:Form' + '\t\t');
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new FormController({
      dontPreventDefault: props.dontPreventDefault
    });
    this.controller.on('change', () => this.forceUpdate());
    this.controller.on('change', () => this.props.onChange && this.props.onChange( this.controller.getFormState() ));
    this.controller.on('submit', () => this.props.onSubmit && this.props.onSubmit( this.controller.getFormState().values ) );
    this.controller.on('value', () => this.props.onValueChange && this.props.onValueChange( this.controller.getFormState().values ) );
    this.controller.on('failure', () => this.props.onSubmitFailure && this.props.onSubmitFailure( this.controller.getFormState().errors ) );
    if (this.props.getApi) {
      this.props.getApi(this.controller.getFormApi());
    }
  }

  get content() {
    const { children, component, render } = this.props;

    const props = {
      formState: this.controller.getFormState(),
      formApi: this.controller.getFormApi()
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
    debug('Render FORM');
    /* ----------- Destructure props ----------- */
    const { children, getApi, onChange, onSubmit, onValueChange, dontPreventDefault, ...rest } = this.props;

    const formContext = {
      formState: this.controller.getFormState(),
      formApi: this.controller.getFormApi()
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
