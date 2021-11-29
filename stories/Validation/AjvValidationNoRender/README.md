# AJV Validation

You can pass a JSON schema to the form but manually render the fields. ( Validation Only )

<!-- STORY -->

```jsx
import { Form, Input, Debug } from 'informed';
import Ajv from 'ajv';

const schema = {
  type: 'object',
  required: ['name', 'age', 'friend'],
  properties: {
    name: {
      type: 'string',
      title: 'First name'
    },
    age: {
      type: 'number',
      title: 'Age',
      minimum: 0
    },
    friend: {
      type: 'string',
      title: 'Friend',
      oneOf: [{ const: 'Elon' }, { const: 'Kimbal' }]
    }
  }
};

const Schema = () => (
  <Form
    schema={schema}
    ajv={Ajv}
    onlyValidateSchema
    onSubmit={({ values }) => window.alert(JSON.stringify(values, null, 2))}>
    <button type="submit">Submit</button>
    <Input name="name" label="First name:" />
    <Input name="age" label="Age:" type="number" />
    <Input name="friend" label="Friend:" />
    <Debug errors values />
  </Form>
);
```
