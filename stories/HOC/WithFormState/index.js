import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, Text, withFormState } from '../../../src';

const SomeComponent = props => (
 <pre>
   <code>
     {JSON.stringify(props.formState, null, 2)}
   </code>
 </pre>
);

const ComponentWithFormState = withFormState(SomeComponent);

const WithFormState = () => (
  <Form id="withFormState-form">
    <label htmlFor="withFormState-name">Name:</label>
    <Text field="name" id="withFormState-name" />
    <button type="submit">
      Submit
    </button>
    <h5>Component with formState:</h5>
    <ComponentWithFormState />
  </Form>
);

export default withDocs( readme, WithFormState );
