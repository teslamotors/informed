import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, SchemaFields, Debug } from '../../../src';

const schema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input'
    },
    married: {
      type: 'string',
      title: 'Are you married?',
      enum: ['yes', 'no'],
      'ui:control': 'radio'
    }
    // 'ui:spouce': {},
    // lastName: {
    //   type: 'string',
    //   title: 'Last name',
    //   'ui:control': 'input'
    // }
  },
  allOf: [
    {
      // $id: 'spouce',
      if: {
        properties: {
          married: { const: 'yes' }
        },
        required: ['married']
      },
      then: {
        properties: {
          spouse: {
            type: 'string',
            title: 'Spouse name',
            'ui:control': 'input'
          }
        }
      }
    }
  ]
};

const Schema = () => (
  <Form schema={schema}>
    <SchemaFields />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default withDocs(readme, Schema);
