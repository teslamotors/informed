import { Debug, SchemaFields } from 'informed';
import { Form, Button } from 'YourComponents';

const schema = {
  type: 'object',
  required: ['name'],
  properties: {
    age: {
      type: 'number',
      title: 'your age?',
      'ui:props': {
        initialValue: 20
      }
    }
  },
  allOf: [
    {
      if: {
        properties: {
          age: { minimum: 21, maximum: 30 }
        },
        required: ['age']
      },
      then: {
        properties: {
          favoriteDrink: {
            type: 'string',
            title: 'Favorite drink?',
            'ui:props': {
              defaultValue: 'Tesla Tequila'
            }
          }
        }
      }
    }
  ]
};

const Example = () => {
  return (
    <Form schema={schema}>
      <SchemaFields />
      <Button type="submit">Submit</Button>
      <Debug values />
    </Form>
  );
};

export default Example;
