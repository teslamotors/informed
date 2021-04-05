import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, FormField, RelevantFields } from '../../../src';

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
    },
    ofAge: {
      type: 'string',
      title: 'Are you over 21?',
      enum: ['yes', 'no'],
      'ui:control': 'radio'
    }
  },
  allOf: [
    {
      relevant: 'married',
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
    },
    {
      relevant: 'over21',
      if: {
        properties: {
          ofAge: { const: 'yes' }
        },
        required: ['ofAge']
      },
      then: {
        properties: {
          age: {
            type: 'number',
            title: 'Age',
            'ui:control': 'input',
            'input:props': {
              type: 'number'
            }
          },
          drink: {
            type: 'string',
            title: 'What do you want to drink?',
            'ui:control': 'input'
          }
        }
      }
    }
  ]
};

const Component = () => {
  return (
    <Form schema={schema}>
      <FormField field="name" />
      <label>Are you married?</label>
      <FormField field="married" />
      <RelevantFields relevant="married">
        <FormField field="spouse" />
      </RelevantFields>
      <label>Are you over21?</label>
      <FormField field="ofAge" />
      <RelevantFields relevant="over21">
        <FormField field="age" />
        <FormField field="drink" />
      </RelevantFields>
      <button type="submit">Submit</button>
      <FormState />
    </Form>
  );
};

export default withDocs(readme, Component);
