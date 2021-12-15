import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { FormProvider, Input, Debug, useFormApi } from '../../../src';

const onSubmit = ({ values }) => {
  window.alert(JSON.stringify(values, null, 2));
};

const SubmitButton = () => {
  const formApi = useFormApi();

  return <button onClick={formApi.submitForm}>Submit</button>;
};

const FormProviderExample = () => {
  return (
    <FormProvider onSubmit={onSubmit}>
      <Input field="name" label="First name:" />
      <SubmitButton />
      <Debug values />
    </FormProvider>
  );
};

export default withDocs(readme, FormProviderExample);
