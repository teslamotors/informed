import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Input, useForm, Debug } from '../../../src';

const CustomForm = ({ children, ...rest }) => {
  const { formController, render, userProps } = useForm(rest);

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
    <Input field="name" name="First name:" />
    <button type="submit">Submit</button>
    <Debug />
  </CustomForm>
);

export default withDocs(readme, UseFormExample);
