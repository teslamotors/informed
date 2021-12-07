import React from 'react';
import withDocs from '../../../utils/withDocs';
import readme from './README.md';

import { Form, SchemaFields, Debug } from '../../../../src';

const schema = {
  type: 'object',
  required: ['name', 'brother'],
  errorMessage: {
    _: 'name default error message',
    required: 'name is required',
    minLength: 'name must be longer',
    maxLength: 'name must be shorter',
    pattern: 'name match the pattern',
    maximum: 'must be smaller than that!'
  },
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input',
      minLength: 6,
      maxLength: 6,
      pattern: '^[0-9]{4}[a-zA-Z]{2}$'
    },
    brother: {
      type: 'object',
      required: ['name', 'age', 'height', 'sameError'],
      errorMessage: {
        _: 'brothers field default error message',
        required: 'brothers field is required',
        minLength: 'brothers field must be longer',
        maxLength: 'brothers field must be shorter',
        pattern: 'brother field match the pattern'
      },
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
          'ui:props': {
            type: 'number'
          },
          minLength: 6,
          maxLength: 6,
          pattern: '^[0-9]{4}[a-zA-Z]{2}$',
          errorMessage: {
            _: 'brothers age default error message',
            required: 'brothers age is required',
            minLength: 'brothers age must be longer',
            maxLength: 'brothers age must be shorter',
            pattern: 'brother age match the pattern'
          }
        },
        height: {
          type: 'string',
          title: 'Brother Height',
          'ui:control': 'input',
          'ui:props': {
            type: 'number'
          },
          maximum: 8
        },
        sameError: {
          type: 'string',
          title: 'Same Error',
          'ui:control': 'input',
          minLength: 6,
          maxLength: 6,
          pattern: '^[0-9]{4}[a-zA-Z]{2}$',
          errorMessage: 'Ahhh!!!!!!'
        }
      }
    }
  }
};

const Schema = () => (
  <Form
    schema={schema}
    onSubmit={({ values }) => window.alert(JSON.stringify(values, null, 2))}>
    <SchemaFields />
    <button type="submit">Submit</button>
    <Debug errors values />
  </Form>
);

export default withDocs(readme, Schema);
