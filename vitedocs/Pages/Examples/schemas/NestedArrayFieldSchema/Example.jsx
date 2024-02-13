import { SchemaFields, Debug } from 'informed';
import { Form, Button } from 'YourComponents';

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
      'ui:before': [{ 'ui:control': 'add' }],
      'ui:props': {
        initialValue
      },
      'ui:component:remove': {
        'ui:control': 'remove'
      },
      items: {
        type: 'object',
        required: ['name', 'age'],
        properties: {
          name: {
            type: 'string',
            title: 'Sibling name',
            'ui:control': 'input'
          },
          age: {
            type: 'number',
            title: 'Sibling age',
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
            'ui:component:remove': {
              'ui:control': 'remove'
            },
            items: {
              type: 'object',
              required: ['name'],
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
  <Form schema={schema}>
    <SchemaFields />
    <Button type="submit">Submit</Button>
    <Debug />
  </Form>
);
export default Schema;
