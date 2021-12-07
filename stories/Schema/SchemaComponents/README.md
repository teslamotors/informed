# Schema Components

Informed 5.0 added the ability to add custom components to schema based forms, using special property names in the form of ui:[$id].

```js
{
  "properties": {
    "ui:myId": {}
  }
}
```

<br />

When wanting to render fields as children of your component, you should add these inside an allOf[] in the parent of the properties object. The entry in allOf[] should have an $id property to be able to reference those fields.

```js
{
  "allOf": [
    {
      "$id": "myId",
      "properties": {
        "myField": {
          "type": "string",
          "title": "My field"
        }
      }
    }
  ]
}
```

<!-- STORY -->

```jsx
import { Form, SchemaFields } from 'informed';

const schema = {
  properties: {
    'ui:fullName_wrapper': {},
    favorite: {
      'ui:control': 'PurpleBorder',
      type: 'object',
      properties: {
        color: {
          type: 'string',
          title: 'Favorite color',
          'ui:control': 'input'
        },
        food: {
          type: 'string',
          title: 'Favorite Food',
          'ui:control': 'input'
        }
      }
    }
  },
  allOf: [
    {
      $id: 'fullName_wrapper',
      'ui:control': 'PurpleBorder',
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
          title: 'First name',
          'ui:control': 'input'
        },
        lastName: {
          type: 'string',
          title: 'Last name',
          'ui:control': 'input'
        }
      }
    }
  ]
};

const PurpleBorder = ({ children }) => {
  return (
    <div style={{ border: '3px solid purple', padding: '1rem' }}>
      {children}
    </div>
  );
};

const Schema = () => (
  <Form schema={schema} components={{ PurpleBorder }}>
    <SchemaFields />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);
```
