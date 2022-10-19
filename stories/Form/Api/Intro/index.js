import React from 'react';
import readme from './README.md';
import withDocs from '../../../utils/withDocs';

import { Form, Input, Debug } from '../../../../src';

const FormApi = () => (
  <Form id="form-api-form">
    {({ formApi }) => (
      <div>
        <Input name="name" label="First name:" />
        <button type="button" onClick={() => formApi.setValue('name', 'Joe')}>
          Set Name to "Joe"
        </button>
        <button
          type="button"
          onClick={() => formApi.setValueQuietly('name', 'Kevin')}>
          Set Name to "Kevin" Quietly
        </button>
        <button type="button" onClick={() => formApi.reset()}>
          Reset
        </button>
        <button type="button" onClick={() => formApi.setValue('foo', 'Bar')}>
          Set Foo to "Bar"
        </button>
        <button type="button" onClick={() => formApi.disable()}>
          Disable
        </button>
        <button type="button" onClick={() => formApi.enable()}>
          Enable
        </button>
        <button type="submit">Submit</button>
        <Debug />
      </div>
    )}
  </Form>
);

export default withDocs(readme, FormApi);
