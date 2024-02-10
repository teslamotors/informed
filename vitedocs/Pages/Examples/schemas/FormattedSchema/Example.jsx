import { FormField, Debug, Scope } from 'informed';
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
    <h5>Your Info:</h5>
    <FormField name="name" />
    <h5>Brothers Info:</h5>
    <Scope scope="brother">
      <FormField name="name" />
      <FormField name="age" />
    </Scope>
    <Button type="submit">Submit</Button>
    <Debug />
  </Form>
);
export default Schema;
