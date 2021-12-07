import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Ajv from 'ajv';

import { Form, Input, Debug } from '../../../src';

const schema = {
  type: 'object',
  required: ['name', 'age', 'friend'],
  properties: {
    name: {
      type: 'string',
      title: 'First name'
    },
    age: {
      type: 'number',
      title: 'Age',
      minimum: 0
    },
    friend: {
      type: 'string',
      title: 'Friend',
      oneOf: [{ const: 'Elon' }, { const: 'Kimbal' }]
    }
  }
};

const Schema = () => (
  <Form
    schema={schema}
    ajv={Ajv}
    onlyValidateSchema
    onSubmit={({ values }) => window.alert(JSON.stringify(values, null, 2))}>
    <Input name="name" label="First name:" />
    <Input name="age" label="Age:" type="number" />
    <Input name="friend" label="Friend:" />
    <button type="submit">Submit</button>
    <Debug errors values />
  </Form>
);

export default withDocs(readme, Schema);
