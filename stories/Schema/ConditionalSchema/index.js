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
  },
  allOf: [
    {
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

// const schema = {
//   properties: {
//     'ui:foo_wrapper': {}
//   },
//   allOf: [
//     {
//       $id: 'foo_wrapper',
//       'ui:control': 'DivComp',
//       type: 'object',
//       properties: {
//         firstName: {
//           type: 'string',
//           title: 'First name',
//           'ui:control': 'input'
//         },
//         lastName: {
//           type: 'string',
//           title: 'Last name',
//           'ui:control': 'input'
//         }
//       }
//     }
//   ]
// };

// const schema = {
//   type: 'object',
//   required: ['name'],
//   properties: {}
// };

// for (let i = 0; i < 500; i++) {
//   schema.properties[`name${i}`] = {
//     type: 'string',
//     title: 'Last name',
//     'ui:control': 'input'
//   };
// }

const DivComp = ({ children }) => {
  return (
    <div>
      <h3>Hello World</h3>
      {children}
    </div>
  );
};

const Schema = () => (
  <Form schema={schema} components={{ DivComp }}>
    <SchemaFields />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default withDocs(readme, Schema);
