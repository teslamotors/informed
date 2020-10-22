import React from 'react';
import withDocs from '../utils/withDocs';
import readme from './README.md';
import FormState from '../utils/FormState';

import { Form } from '../../src';

const schema = {
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input',
      'informed:props': {
        validate: v => (v == null ? 'Required' : undefined)
      }
    },
    bio: {
      type: 'string',
      title: 'Bio',
      'ui:control': 'textarea'
    },
    authorize: {
      type: 'string',
      title: 'Authorize',
      'ui:control': 'checkbox'
    },
    color: {
      type: 'string',
      title: 'Color',
      'ui:control': 'select',
      oneOf: [
        {
          const: '',
          title: '- Select -',
          'input:props': {
            disabled: true
          }
        },
        { const: 'red', title: 'Red' },
        { const: 'black', title: 'Black' },
        { const: 'white', title: 'White' }
      ]
    },
    model: {
      type: 'string',
      title: 'Model',
      'ui:control': 'radio',
      oneOf: [
        { const: 'ms', title: 'Model S' },
        { const: 'm3', title: 'Model 3' },
        { const: 'mx', title: 'Model X' },
        { const: 'my', title: 'Model Y' }
      ],
      default: null,
      'informed:props': {
        initialValue: 'm3'
      }
    }
  }
};

const Schema = () => (
  <Form schema={schema}>
    <FormState errors />
    <button type="submit">Submit</button>
  </Form>
);

export default withDocs(readme, Schema);
