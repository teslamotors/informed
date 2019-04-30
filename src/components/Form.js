import React, { useMemo } from 'react';
import { FormStateContext, FormApiContext, FormRegisterContext } from '../Context';
import FormController from '../FormController';
import Debug from 'debug';
const debug = Debug('informed:Form' + '\t\t');
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new FormController({
      dontPreventDefault: props.dontPreventDefault, 
      initialValues: props.initialValues,
      validate: props.validate,
      validateFields: props.validateFields,
      allowEmptyStrings: props.allowEmptyStrings,
      preventEnter: props.preventEnter
    });
    this.formApi = this.controller.getFormApi();
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
    const { 
      children, 
      getApi, 
      onChange, 
      onSubmit, 
      onValueChange, 
      initialValues,
      onSubmitFailure,
      render,
      validate,
      validateFields,
      component,
      preventEnter,
      dontPreventDefault, ...rest } = this.props;

    const formState = this.controller.getFormState();

    /* --- Create Provider and render Content --- */
    return (
      <FormRegisterContext.Provider value={this.controller.updater}>
        <FormApiContext.Provider value={this.formApi}>
          <FormStateContext.Provider value={formState}>
            <form
              {...rest}
              onReset={this.controller.reset}
              onSubmit={this.controller.submitForm}
              onKeyDown={this.controller.keyDown}>
              {this.content}
            </form>
          </FormStateContext.Provider>
        </FormApiContext.Provider>
      </FormRegisterContext.Provider>
    );
  }
}

export default Form;
