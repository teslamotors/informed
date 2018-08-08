import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text, withFieldState } from '../../../src';

const SomeComponent = props => (
  <pre>
    <code>{JSON.stringify(props.fieldState, null, 2)}</code>
  </pre>
);

const ComponentWithFieldState = withFieldState('name')(SomeComponent);

const WithFieldState = () => (
  <Form id="withFieldState-form">
    <label htmlFor="withFieldState-name">Name:</label>
    <Text field="name" id="withFieldState-name" />
    <button type="submit">Submit</button>
    <h5>Component with fieldState:</h5>
    <ComponentWithFieldState />
  </Form>
);

export default withDocs(readme, WithFieldState);
