# AJV Validation

You can pass a JSON schema to the form but manually render the fields. ( Validation Only )

** Note: This is in beta and is subject to change! **

<!-- STORY -->

```jsx
import { Form, SchemaFields } from 'informed';
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
    onSubmit={values => window.alert(JSON.stringify(values, null, 2))}>
    <button type="submit">Submit</button>
    <Text field="name" label="First name:" />
    <Text field="age" label="Age:" type="number" />
    <Text field="friend" label="Friend:" />
    <FormState errors values />
  </Form>
);
```
