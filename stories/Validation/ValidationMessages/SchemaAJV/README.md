# Schema With AJV

<!-- STORY -->

```jsx
import { Form, SchemaFields, Debug } from 'informed';
import Ajv from 'ajv';

const schema = {
  type: 'object',
  required: ['name', 'brother'],
  errorMessage: {
    _: 'name default error message',
    required: 'name is required',
    minLength: 'name must be longer',
    maxLength: 'name must be shorter',
    pattern: 'name match the pattern'
  },
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input',
      minLength: 6,
      maxLength: 6,
      pattern: '^[0-9]{4}[a-zA-Z]{2}$'
    },
    brother: {
      type: 'object',
      required: ['name', 'age'],
      errorMessage: {
        _: 'brothers name default error message',
        required: 'brothers name is required',
        minLength: 'brothers name must be longer',
        maxLength: 'brothers name must be shorter',
        pattern: 'brother name match the pattern'
      },
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
          },
          minLength: 6,
          maxLength: 6,
          pattern: '^[0-9]{4}[a-zA-Z]{2}$',
          errorMessage: {
            _: 'brothers age default error message',
            required: 'brothers age is required',
            minLength: 'brothers age must be longer',
            maxLength: 'brothers age must be shorter',
            pattern: 'brother age match the pattern'
          }
        }
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
