import { SchemaFields, Debug } from 'informed';
import { Form, Button } from 'YourComponents';
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
      'ui:props': {
        initialValue
      },
      'ui:before': [{ 'ui:control': 'add' }],
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
            minimum: 0,
            'ui:control': 'input',
            'ui:props': {
              type: 'number'
            }
          },
          married: {
            type: 'string',
            title: 'Are you married?',
            enum: ['yes', 'no'],
            'ui:control': 'radio',
            'ui:props': {
              notify: ['spouse']
            }
          },
          spouse: {
            type: 'string',
            title: 'Spouse name',
            'ui:control': 'input',
            'ui:props': {
              relevant: ({ formApi, scope }) => {
                return formApi.getValue(`${scope}.married`) == 'yes';
              }
            }
          }
        }
      },
      'ui:component:remove': { 'ui:control': 'remove' }
    }
  }
};

const Schema = () => (
  <Form ajv={Ajv} schema={schema}>
    <SchemaFields />
    <Button type="submit">Submit</Button>
    <Debug />
  </Form>
);

export default Schema;
