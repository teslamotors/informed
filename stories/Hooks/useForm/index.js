import React from 'react';
import withDocs from '../../utils/withDocs';
import FormState from '../../utils/FormState';
import readme from './README.md';

import { Text, useForm } from '../../../src';

const CustomForm = ({ 
  children, 
  ...rest }) => {

  const { 
    formController,
    render,
    userProps
  } = useForm(rest);

  /* --- Render Content --- */
  return render(
    <form
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}
      onKeyDown={formController.keyDown}>
      {children}
    </form>  
  );
};

const UseFormExample = () => (
  <CustomForm>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, marginRight: '2rem' }}>
        <label>
            First name:
          <Text field="name"/>
        </label>
        <button type="submit">Submit</button>
      </div>
      <div style={{ flex: 2, minWidth: '300px' }}>
        <FormState />
      </div>
    </div>
  </CustomForm>
);

export default withDocs(readme, UseFormExample);
