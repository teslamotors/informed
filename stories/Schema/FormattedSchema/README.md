# Formatted Schema

Sometimes you want to control where the fields will end up in the dom.

** Note: This is in beta and is subject to change! **

<!-- STORY -->

```jsx
import { Form, SchemaFields } from '../../../src';

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
          'input:props': {
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
    <FormField field="name" />
    <br />
    <h5>Brothers Info:</h5>
    <Scope scope="brother">
      <FormField field="name" />
      <FormField field="age" />
    </Scope>
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);
```
