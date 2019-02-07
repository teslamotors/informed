# Use Field State

The `useFieldState` hook will allow you to gain access to a fields state.

<!-- STORY -->

```jsx
import { Form, Text, useFieldState } from 'informed';

const ComponentUsingFieldState = () => {
  const fieldState = useFieldState('name');
  return (
    <pre>
      <code>{JSON.stringify(fieldState, null, 2)}</code>
    </pre>
  );
};

<Form>
  <label>Name:<Text field="name"/></label>
  <button type="submit">Submit</button>
  <h5>Component using fieldState:</h5>
  <ComponentUsingFieldState />
</Form>
```
