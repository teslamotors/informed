import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './WithField.md';

import { Form, Input, Scope, Debug, useFieldState } from '../../../src';

const ScopedFieldState = ({ name }) => {
  const { value } = useFieldState(name);
  return (
    <pre>
      <code>{JSON.stringify(value, null, 2)}</code>
    </pre>
  );
};

const UnScopedFieldState = ({ name }) => {
  const { value } = useFieldState(name, false); // << Note the false here
  return (
    <pre>
      <code>{JSON.stringify(value, null, 2)}</code>
    </pre>
  );
};

const ScopeGotcha = () => (
  <div>
    <Form>
      <Scope scope="favorite">
        <Input field="color" />
        <h5>favorite.color: ( scoped )</h5>
        <ScopedFieldState name="favorite.color" />
        <h5>color: ( scoped )</h5>
        <ScopedFieldState name="color" />
        <h5>favorite.color: ( un-scoped )</h5>
        <UnScopedFieldState name="favorite.color" />
      </Scope>
      <h5>Form State</h5>
      <Debug values />
    </Form>
  </div>
);

export default withDocs(readme, ScopeGotcha);
