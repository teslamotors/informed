# AJV Validation

You can pass a JSON schema to the form to both build and validate the form!

<!-- STORY -->

```jsx
import { Form, SchemaFields, Debug } from 'informed';
import Ajv from 'ajv';

const schema = {
  type: 'object',
  required: ['name', 'friend', 'age', 'bio', 'color', 'model', 'cars'],
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input'
    },
    friend: {
      type: 'string',
      title: 'Friend',
      'ui:control': 'input',
      oneOf: [{ const: 'Elon' }, { const: 'Kimbal' }]
    },
    age: {
      type: 'number',
      title: 'Age',
      minimum: 0,
      'ui:control': 'input',
      'ui:props': {
        type: 'number'
      }
    },
    bio: {
      type: 'string',
      title: 'Bio',
      'ui:control': 'textarea',
      minLength: 10
    },
    authorize: {
      type: 'boolean',
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
      'ui:props': {
        initialValue: 'm3'
      }
    },
    cars: {
      type: 'array',
      title: 'Cars',
      minItems: 3,
      'ui:control': 'select',
      'ui:props': {
        multiple: true,
        style: { height: '100px', width: '200px' }
      },
      items: {
        oneOf: [
          { const: 'tesla', title: 'Tesla' },
          { const: 'volvo', title: 'Volvo' },
          { const: 'audi', title: 'Audi' },
          { const: 'jeep', title: 'Jeep' }
        ]
      },
      'ui:props': {
        initialValue: ['jeep', 'tesla']
      }
    }
  }
};

const Schema = () => (
  <Form
    schema={schema}
    ajv={Ajv}
    onSubmit={({ values }) => window.alert(JSON.stringify(values, null, 2))}>
    <SchemaFields />
    <button type="submit">Submit</button>
    <Debug errors values />
  </Form>
);
```
