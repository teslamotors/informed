import React from 'react';
import { useForm } from 'informed';
import { Form as AdobeForm } from '@adobe/react-spectrum';

import { adapter } from './AdobeAdapter';

const Form = ({ children, ...rest }) => {
  const { formController, render, userProps } = useForm({ ...rest, adapter });

  return render(
    <AdobeForm
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}
      onKeyDown={formController.keyDown}>
      {children}
    </AdobeForm>
  );
};

export default Form;
