# Conditional Props

Sometimes you need to conditionally change the props.

<!-- STORY -->

```jsx
import { Form, SchemaFields, Debug } from 'informed';

const evaluate = ({ formState, formApi }) => {
  if (!formState.values.age || formState.values.age < 16) {
    formApi.clearValue('car');
    return { disabled: true };
  }
  return { disabled: false };
};

const schema = {
  type: 'object',
  properties: {
    age: {
      type: 'number',
      title: 'Age',
      'ui:control': 'input',
      'ui:props': {
        type: 'number'
      }
    },
    car: {
      type: 'string',
      title: 'Car',
      'ui:control': 'select',
      oneOf: [
        { const: 'ms', title: 'Model S' },
        { const: 'm3', title: 'Model 3' },
        { const: 'mx', title: 'Model X' },
        { const: 'my', title: 'Model Y' }
      ],
      default: null,
      'ui:props': {
        evaluate,
        evaluateWhen: ['age']
      }
    }
  }
};
```
