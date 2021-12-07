import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, SchemaFields, Debug } from '../../../src';

const schema = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      'ui:control': 'select',
      title: 'Would you like a car or truck?',
      oneOf: [
        { const: 'car', title: 'Car' },
        { const: 'truck', title: 'Truck' }
      ],
      'ui:props': {
        initialValue: 'car'
      }
    },
    product: {
      type: 'string',
      'ui:control': 'select',
      title: 'Product'
    }
  },
  allOf: [
    {
      if: { properties: { type: { const: 'car' } }, required: ['type'] },
      then: {
        properties: {
          product: {
            oneOf: [
              { const: '', title: '- Select -' },
              { const: 'modelS', title: 'Model S' },
              { const: 'modelX', title: 'Model X' },
              { const: 'model3', title: 'Model 3' }
            ]
          }
        }
      }
    },
    {
      if: { properties: { type: { const: 'truck' } }, required: ['type'] },
      then: {
        properties: {
          product: {
            oneOf: [
              { const: '', title: '- Select -' },
              { const: 'semi', title: 'Semi Truck' },
              { const: 'cyber', title: 'Cyber Truck' }
            ]
            // 'ui:props': {
            //   disabled: true
            // }
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
