import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, SchemaFields, Debug } from '../../../src';

const schema = {};

const Schema = () => (
  <Form schema={schema}>
    <SchemaFields />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default withDocs(readme, Schema);
