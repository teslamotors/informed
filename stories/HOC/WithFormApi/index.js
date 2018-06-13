import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, Text, withFormApi } from '../../../src';

const SomeComponent = props => (
 <pre>
   <code>
     {JSON.stringify(props.formApi.getState(), null, 2)}
   </code>
 </pre>
);

const ComponentWithFormApi = withFormApi(SomeComponent);

const WithFormApi = () => (
  <Form id="withFormApi-form">
    {({ formState }) => (
      <div>
        <label htmlFor="withFormApi-name">Name:</label>
        <Text field="name" id="withFormApi-name" />
        <button type="submit">
          Submit
        </button>
        <h5>Component with formApi:</h5>
        <ComponentWithFormApi />
      </div>
    )}
  </Form>
);

export default withDocs( readme, WithFormApi );
