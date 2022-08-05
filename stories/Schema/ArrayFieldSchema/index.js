import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Ajv from 'ajv';

import { Form, SchemaFields, Debug } from '../../../src';

const initialValue = [
  {
    name: 'Joe',
    age: '26'
  },
  {
    name: 'Elon',
    age: '49'
  }
];

// const defaultValue = [
//   {
//     name: 'foo',
//     age: '100'
//   },
//   {
//     name: 'Bar',
//     age: '100'
//   }
// ];

// const initialValues = {
//   siblings: initialValue
// };

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
      'ui:props': {
        // initialValue
        // initialValue: defaultValue
        // defaultValue
        initialValue
      },
      'ui:before': [{ 'ui:control': 'add' }],
      items: {
        type: 'object',
        required: ['name', 'age'],
        properties: {
          name: {
            type: 'string',
            title: 'Sibling name',
            'ui:control': 'input'
          },
          age: {
            type: 'number',
            title: 'Sibling age',
            minimum: 0,
            'ui:control': 'input',
            'ui:props': {
              type: 'number'
            }
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
          'ui:component:remove': { 'ui:control': 'remove' }
        }
      }
    }
  }
};

const Schema = () => (
  <Form
    ajv={Ajv}
    schema={schema}
    // initialValues={initialValues}
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
