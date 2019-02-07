import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text, withFormState } from '../../../src';

const SomeComponent = props => (
  <pre>
    <code>{JSON.stringify(props.formState, null, 2)}</code>
  </pre>
);

const ComponentWithFormState = withFormState(SomeComponent);

const WithFormState = () => (
  <Form>
    <label>Name:<Text field="name"/></label>
    <button type="submit">Submit</button>
    <h5>Component with formState:</h5>
    <ComponentWithFormState />
  </Form>
);

export default withDocs(readme, WithFormState);
