import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, SchemaFields } from '../../../src';

const schema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input'
    },
    'component:marriedLabel': {
      'ui:control': 'label',
      title: 'Are you married?'
    },
    married: {
      type: 'string',
      title: 'Are you married?',
      enum: ['yes', 'no'],
      'ui:control': 'radio'
    },
    'conditional:married': {},
    'component:ofAgeLabel': {
      'ui:control': 'label',
      title: 'Are you over 21?'
    },
    ofAge: {
      type: 'string',
      title: 'Are you over 21?',
      enum: ['yes', 'no'],
      'ui:control': 'radio'
    },
    'conditional:over21': {}
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
      <SchemaFields />
      <button type="submit">Submit</button>
      <FormState />
    </Form>
  );
};

export default withDocs(readme, Component);
