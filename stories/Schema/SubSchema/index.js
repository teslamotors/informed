import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, FormFields } from '../../../src';

const schema1 = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'Name',
      'ui:control': 'input'
    },
    age: {
      type: 'number',
      title: 'Age',
      'ui:control': 'input',
      'ui:props': {
        type: 'number'
      }
    }
  }
};

const schema2 = {
  type: 'object',
  properties: {
    brother: {
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
      }
    }
  }
};

const Schema = () => (
  <Form>
    <FormFields schema={schema1} />
    <FormFields schema={schema2} />
  </Form>
);

export default withDocs(readme, Schema);
