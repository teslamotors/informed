import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, SchemaFields } from '../../../src';

const schema = {};

const Schema = () => (
  <Form schema={schema}>
    <SchemaFields />
    <button type="submit">Submit</button>
    <FormState />
  </Form>
);

export default withDocs(readme, Schema);
