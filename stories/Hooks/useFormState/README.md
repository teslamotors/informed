# Use Form State

The `useFormState` hook will allow you to gain access to the formState.

<!-- STORY -->

```jsx
import { Form, Input, useFormState } from 'informed';

const ComponentUsingFormState = () => {
  const formState = useFormState();
  return (
    <pre>
      <code>{JSON.stringify(formState, null, 2)}</code>
    </pre>
  );
};

<Form>
  <Input name="name" label="Name:" />
  <button type="submit">Submit</button>
  <h5>Component using formState:</h5>
  <ComponentUsingFormState />
</Form>;
```
