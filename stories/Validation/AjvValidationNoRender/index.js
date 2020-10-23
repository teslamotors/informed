import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';
import Ajv from 'ajv';

import { Form, Text } from '../../../src';

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
    onSubmit={values => window.alert(JSON.stringify(values, null, 2))}>
    <button type="submit">Submit</button>
    <Text field="name" label="First name:" />
    <Text field="age" label="Age:" type="number" />
    <Text field="friend" label="Friend:" />
    <FormState errors />
  </Form>
);

export default withDocs(readme, Schema);
