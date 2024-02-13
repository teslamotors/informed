import { SchemaFields, Debug } from 'informed';
import { Form, Button } from 'YourComponents';

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input'
    },
    brother: {
      type: 'object',
      title: 'Brother',
      properties: {
        name: {
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
