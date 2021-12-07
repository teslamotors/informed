import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Ajv from 'ajv';

import { Form, SchemaFields, Debug } from '../../../src';

const initialValue = [
  {
    name: 'Joe',
    age: 26
  },
  {
    name: 'Elon',
    age: 49
  }
];

const schema = {
  type: 'object',
  required: ['name', 'siblings'],
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input'
    },
    siblings: {
      type: 'array',
      minItems: 2,
      'ui:control': 'array',
      'ui:before': [{ 'ui:control': 'add' }],
      'ui:props': {
        initialValue,
        relevant: ({ formState }) => {
          const { name } = formState.values;
          return !name || name.length < 10;
        }
      },
      items: {
        type: 'object',
        required: ['name', 'age'],
        properties: {
          'ui:component:remove': { 'ui:control': 'remove' },
          name: {
            type: 'string',
            title: 'Sibling name',
            'ui:control': 'input',
            'ui:props': {
              keepState: true
            }
          },
          age: {
            type: 'number',
            title: 'Sibling age',
            minimum: 0,
            'ui:control': 'input',
            'ui:props': {
              keepState: true,
              type: 'number'
            }
          },
          married: {
            type: 'string',
            title: 'Are you married?',
            enum: ['yes', 'no'],
            'ui:control': 'radio',
            'ui:props': {
              keepState: true
            }
          },
          spouse: {
            type: 'string',
            title: 'Spouse name',
            'ui:control': 'input',
            'ui:props': {
              relevant: ({ scope, formApi }) => {
                const married = formApi.getValue(`${scope}.married`);
                return married === 'yes';
              },
              keepStateIfRelevant: true
            }
          }
        }
      }
    }
  }
};

const Schema = () => (
  <Form
    ajv={Ajv}
    schema={schema}
    onSubmit={({ values }) => window.alert(JSON.stringify(values, null, 2))}>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <SchemaFields />
        <button type="submit">Submit</button>
      </div>
      <div style={{ flex: '1' }}>
        <Debug errors values />
      </div>
    </div>
  </Form>
);

export default withDocs(readme, Schema);
