# Array Field in Schema !!!

** Note: This is in beta and is subject to change! **

<!-- STORY -->

```jsx
import { Form, SchemaFields } from 'informed';
import Ajv from 'ajv';

const initialValue = [
  {
    name: 'Joe',
    age: '26'
  },
  {
    name: 'Elon',
    age: '49'
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
        initialValue,
        relevant: values => {
          const { name } = values;
          return !name || name.length < 10;
        },
        keepState: true
      },
      items: {
        type: 'object',
        'ui:after': [{ 'ui:control': 'remove' }],
        required: ['name', 'age'],

        properties: {
          name: {
            type: 'string',
            title: 'Sibling name',
            'ui:control': 'input',
            'ui:props': {
              keepState: true
            }
          },
          age: {
            type: 'number',
            title: 'Sibling age',
            minimum: 0,
            'ui:control': 'input',
            'ui:props': {
              type: 'number'
            },
            'ui:props': {
              keepState: true
            }
          },
          married: {
            type: 'string',
            title: 'Are you married?',
            enum: ['yes', 'no'],
            'ui:control': 'radio',
            'ui:props': {
              keepState: true
            }
          },
          spouse: {
            type: 'string',
            title: 'Spouse name',
            'ui:control': 'input',
            'ui:props': {
              relevant: (values, { parentPath, get }) => {
                const married = get(values, `${parentPath}.married`);
                return married === 'yes';
              },
              keepStateIfRelevant: true
            }
          }
        }
      }
    }
  }
};

const Schema = () => (
  <Form
    ajv={Ajv}
    schema={schema}
    onSubmit={values => window.alert(JSON.stringify(values, null, 2))}>
    <SchemaFields />
    <button type="submit">Submit</button>
  </Form>
);
```
