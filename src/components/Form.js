import React from 'react';
import Debug from '../debug';
import useForm from '../hooks/useForm';

const debug = Debug('informed:Form' + '\t\t');

const Form = ({ 
  children, 
  render: renderProp,
  component,
  ...rest }) => {

  debug('Render FORM');

  const { 
    formApi, 
    formController,
    formState, 
    render,
    userProps
  } = useForm(rest);
    
  const getContent = () => {

    const props = {
      formState,
      formApi
    };

    if (component) {
      return React.createElement(component, props, children);
    }
    if (renderProp) {
      return renderProp(props);
    }
    if (typeof children === 'function') {
      return children(props);
    }
    return children;
  };

  /* --- Render Content --- */
  return render(
    <form
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}
      onKeyDown={formController.keyDown}>
      {getContent()}
    </form>  
  );
  
};

export default Form;
