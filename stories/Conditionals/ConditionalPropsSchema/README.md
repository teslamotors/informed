# Conditional Props

Sometimes you need to conditionally change the props.

<!-- STORY -->

```jsx
import { Form, SchemaFields, Debug } from 'informed';

const conditional = ({ formState }) => {
  if (!formState.values.age || formState.values.age < 16) {
    return { disabled: true };
  }
  return { disabled: false };
};

const schema = {
  type: 'object',
  properties: {
    age: {
      type: 'number',
      title: 'First name',
      'ui:control': 'input',
      'ui:props': {
        type: 'number'
      }
    },
    model: {
      type: 'string',
      title: 'Model',
      'ui:control': 'select',
      oneOf: [
        { const: 'ms', title: 'Model S' },
        { const: 'm3', title: 'Model 3' },
        { const: 'mx', title: 'Model X' },
        { const: 'my', title: 'Model Y' }
      ],
      default: null,
      'ui:props': {
        conditional,
        evaluateWhen: ['age']
      }
    }
  }
};
```
