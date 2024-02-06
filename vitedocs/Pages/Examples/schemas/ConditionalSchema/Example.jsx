import { SchemaFields, Debug } from 'informed';
import { Form, Button } from 'YourComponents';

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

const Example = () => (
  <Form schema={schema}>
    <SchemaFields />
    <Button type="submit">Submit</Button>
    <Debug />
  </Form>
);

export default Example;
