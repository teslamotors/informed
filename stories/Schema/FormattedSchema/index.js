import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, FormField, Scope } from '../../../src';

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input'
    },
    brother: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          title: 'Brother name',
          'ui:control': 'input'
        },
        age: {
          type: 'number',
          title: 'Brother age',
          'ui:control': 'input',
          'input:props': {
            type: 'number'
          }
        }
      }
    }
  }
};

const Schema = () => (
  <Form schema={schema}>
    <h5>Your Info:</h5>
    <FormField field="name" />
    <br />
    <h5>Brothers Info:</h5>
    <Scope scope="brother">
      <FormField field="name" />
      <FormField field="age" />
    </Scope>
    <button type="submit">Submit</button>
    <FormState />
  </Form>
);

export default withDocs(readme, Schema);
