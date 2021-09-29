import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, SchemaFields, Debug } from '../../../src';

const schema = {
  properties: {
    'ui:fullName_wrapper': {},
    favorite: {
      'ui:control': 'PurpleBorder',
      type: 'object',
      properties: {
        color: {
          type: 'string',
          title: 'Favorite color',
          'ui:control': 'input'
        },
        food: {
          type: 'string',
          title: 'Favorite Food',
          'ui:control': 'input'
        }
      }
    }
  },
  allOf: [
    {
      $id: 'fullName_wrapper',
      'ui:control': 'PurpleBorder',
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
          title: 'First name',
          'ui:control': 'input'
        },
        lastName: {
          type: 'string',
          title: 'Last name',
          'ui:control': 'input'
        }
      }
    }
  ]
};

const PurpleBorder = ({ children }) => {
  return (
    <div
      style={{
        border: '3px solid purple',
        marginBottom: '1rem',
        padding: '1rem'
      }}>
      {children}
    </div>
  );
};

const Schema = () => (
  <Form schema={schema} components={{ PurpleBorder }}>
    <SchemaFields />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default withDocs(readme, Schema);
