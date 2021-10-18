# Double Nested Array Fields

** Note: This is in beta and is subject to change! **

<!-- STORY -->

```jsx
import { Form, SchemaFields } from 'informed';
import Ajv from 'ajv';

const initialValue = [
  {
    name: 'Joe',
    age: '26',
    friends: [
      {
        name: 'Andres'
      }
    ]
  },
  {
    name: 'Elon',
    age: '49',
    friends: [
      {
        name: 'Kimbal'
      }
    ]
  }
];

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
        initialValue
      },
      items: {
        type: 'object',
        required: ['name', 'age'],
        properties: {
          'ui:after': [{ 'ui:control': 'remove' }],
          name: {
            type: 'string',
            title: 'Sibling name',
            'ui:control': 'input'
          },
          married: {
            type: 'string',
            title: 'Are you married?',
            enum: ['yes', 'no'],
            'ui:control': 'radio'
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
          friends: {
            type: 'array',
            minItems: 2,
            'ui:control': 'array',
            'ui:before': [{ 'ui:control': 'add' }],
            items: {
              type: 'object',
              'ui:after': [{ 'ui:control': 'remove' }],
              required: ['name', 'age'],
              properties: {
                name: {
                  type: 'string',
                  title: 'Friends name',
                  'ui:control': 'input'
                },
                married: {
                  type: 'string',
                  title: 'Married?',
                  enum: ['yes', 'no'],
                  'ui:control': 'radio'
                },
                spouse: {
                  type: 'string',
                  title: 'Spouse',
                  'ui:control': 'input',
                  'ui:props': {
                    relevant: ({ scope, formApi }) => {
                      const married = formApi.getValue(`${scope}.married`);
                      return married === 'yes';
                    },
                    keepState: true
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

const Schema = () => (
  <Form
    schema={schema}
    onSubmit={values => window.alert(JSON.stringify(values, null, 2))}>
    <SchemaFields />
    <button type="submit">Submit</button>
  </Form>
);
```
