import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text, withFormApi } from '../../../src';

const SomeComponent = props => (
  <button type="button" onClick={()=>
    props.formApi.setValue(
      'name', 
      Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)))}>
    Random
  </button>
);

const ComponentWithFormApi = withFormApi(SomeComponent);

const WithFormApi = () => (
  <Form id="withFormApi-form">
    <div>
      <label htmlFor="withFormApi-name">Name:</label>
      <Text field="name" id="withFormApi-name" />
      <button type="submit">Submit</button>
      <h5>Component with formApi:</h5>
      <ComponentWithFormApi />
    </div>
  </Form>
);

export default withDocs(readme, WithFormApi);
