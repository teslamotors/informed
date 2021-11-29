import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Ajv from 'ajv';

import { Form, SchemaFields, Debug } from '../../../src';

const initialValue = [
  {
    name: 'Joe',
    age: '26',
    friends: [
      {
        name: 'Andres'
      }
    ]
  },
  {
    name: 'Elon',
    age: '49',
    friends: [
      {
        name: 'Kimbal'
      }
    ]
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
      'ui:before': [
        { 'ui:control': 'add', 'ui:props': { text: 'Add Sibling' } }
      ],
      'ui:props': {
        initialValue
      },
      items: {
        type: 'object',
        required: ['name', 'age'],
        properties: {
          'ui:component:remove': {
            'ui:control': 'remove',
            'ui:props': { text: 'Remove Sibling' }
          },
          name: {
            type: 'string',
            title: 'Sibling name',
            'ui:control': 'input'
          },
          age: {
            type: 'number',
            title: 'Sibling age',
            'ui:control': 'input'
          },
          married: {
            type: 'string',
            title: 'Are you married?',
            enum: ['yes', 'no'],
            'ui:control': 'radio'
            // 'ui:props': {
            //   notify: ['spouse']
            // }
          },
          spouse: {
            type: 'string',
            title: 'Spouse name',
            'ui:control': 'input',
            'ui:props': {
              relevant: ({ scope, formApi }) => {
                const married = formApi.getValue(`${scope}.married`);
                return married === 'yes';
              }
            }
          },
          friends: {
            type: 'array',
            minItems: 2,
            'ui:control': 'array',
            'ui:before': [
              { 'ui:control': 'add', 'ui:props': { text: 'Add Friend' } }
            ],
            items: {
              type: 'object',
              // 'ui:after': [{ 'ui:control': 'remove' }],
              required: ['name'],
              properties: {
                'ui:component:remove': {
                  'ui:control': 'remove',
                  'ui:props': { text: 'Remove Friend' }
                },
                name: {
                  type: 'string',
                  title: 'Friends name',
                  'ui:control': 'input'
                  // 'ui:props': {
                  //   style: { marginLeft: '200px' }
                  // }
                },
                married: {
                  type: 'string',
                  title: 'Married?',
                  enum: ['yes', 'no'],
                  'ui:control': 'radio'
                  // 'ui:props': {
                  //   notify: ['spouse']
                  // }
                },
                spouse: {
                  type: 'string',
                  title: 'Spouse',
                  'ui:control': 'input',
                  'ui:props': {
                    relevant: ({ scope, formApi }) => {
                      const married = formApi.getValue(`${scope}.married`);
                      return married === 'yes';
                    },
                    keepState: true
                  }
                }
              }
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
