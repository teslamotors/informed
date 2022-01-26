import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, SchemaFields, FormField, Debug } from '../../../src';

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input',
      'ui:props': {
        validate: v => (v == null ? 'Required' : undefined)
      },
      'informed:validate': {}
    },
    age: {
      type: 'number',
      title: 'Age',
      'ui:control': 'input',
      'ui:props': {
        type: 'number'
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
          'ui:props': {
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
      'ui:props': {
        initialValue: 'm3'
      }
    },
    cars: {
      type: 'array',
      title: 'Cars',
      'ui:control': 'select',
      'ui:props': {
        multiple: true,
        style: { height: '100px', width: '200px' },
        initialValue: ['jeep', 'tesla']
      },
      items: {
        oneOf: [
          { const: 'tesla', title: 'Tesla' },
          { const: 'volvo', title: 'Volvo' },
          { const: 'audi', title: 'Audi' },
          { const: 'jeep', title: 'Jeep' }
        ]
      }
    }
  }
};

const onSubmit = ({ values }) => console.log(values);

// const schema2 = {
//   type: 'object',
//   required: ['name'],
//   properties: {
//     name: {
//       type: 'string',
//       title: 'First name',
//       'ui:control': 'input'
//     },
//     married: {
//       type: 'string',
//       title: 'Are you married?',
//       enum: ['yes', 'no'],
//       'ui:control': 'radio'
//     }
//   },
//   allOf: [
//     {
//       if: {
//         properties: {
//           married: { const: 'yes' }
//         },
//         required: ['married']
//       },
//       then: {
//         properties: {
//           spouse: {
//             type: 'string',
//             title: 'Spouse name',
//             'ui:control': 'input'
//           }
//         }
//       }
//     }
//   ]
// };

// function App() {
//   return (
//     <Form onSubmit={onSubmit} autocomplete="off" schema={schema2}>
//       <FormField name="name" />
//       <FormField name="spouse" />
//       <FormField name="married" />
//       <button type="submit">Submit</button>
//     </Form>
//   );
// }

const Schema = () => (
  <Form schema={schema}>
    <SchemaFields />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default withDocs(readme, Schema);
