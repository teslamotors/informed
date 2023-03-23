import { Debug, SchemaFields } from 'informed';
import { Form, Button } from 'YourComponents';

const schema = {
  type: 'object',
  required: ['age', 'bio', 'authorize', 'color', 'model', 'cars'],
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input',
      'ui:props': {
        validate: v => (v == null ? 'Required' : undefined)
      }
    },
    age: {
      type: 'number',
      title: 'Age',
      'ui:control': 'number'
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
      ]
    },
    cars: {
      type: 'array',
      title: 'Cars',
      'ui:control': 'checkbox_group',
      'ui:props': {
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
    },
    siblings: {
      type: 'array',
      'ui:control': 'array',
      'ui:props': {
        initialValue: [
          {
            name: 'Joe',
            age: '28'
          },
          {
            name: 'Elon',
            age: '51'
          }
        ]
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
            minimum: 0,
            'ui:control': 'input',
            'ui:props': {
              type: 'number'
            }
          }
        }
      }
    }
  }
};

const Example = () => {
  return (
    <Form schema={schema}>
      <SchemaFields />
      <Button type="submit">Submit</Button>
      <Debug values errors invalid />
    </Form>
  );
};

export default Example;
