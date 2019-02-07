import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Text, useFormApi } from '../../../src';

const RandomSetterButton = () => {
  const formApi = useFormApi();
  return (
    <button type="button" onClick={()=>
      formApi.setValue(
        'name', 
        Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)))}>
      Random
    </button>
  );
};

const FormApi = () => (
  <Form id="state-form">
    <div>
      <label>First name:<Text field="name"/></label>
      <RandomSetterButton />
      <button type="submit">Submit</button>
    </div>
  </Form>
);

export default withDocs(readme, FormApi);
