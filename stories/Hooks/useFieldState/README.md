# Use Field State

The `useFieldState` hook will allow you to gain access to a fields state. Note how one does not affect the others render!

<!-- STORY -->

```jsx
import { Form, Input, useFieldState } from 'informed';

const ComponentUsingFieldState = ({ name }) => {
  const fieldState = useFieldState(name);
  return (
    <>
      <h5>Component using fieldState: {name}</h5>
      Render: {Math.random()}
      <pre>
        <code>{JSON.stringify(fieldState, null, 2)}</code>
      </pre>
    </>
  );
};

<Form>
  <Input name="name" label="Name:" initialValue="Joe" />
  <Input field="age" label="Age:" type="number" />
  <button type="submit">Submit</button>
  <ComponentUsingFieldState name="name" />
  <ComponentUsingFieldState name="age" />
</Form>;
```
