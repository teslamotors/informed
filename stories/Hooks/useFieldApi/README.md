# Use Field Api

The `useFieldApi` hook will allow you to gain access to a fields api.

<!-- STORY -->

```jsx
import { Form, Input, useFieldApi } from 'informed';

const ComponentUsingFieldApi = () => {
  const fieldApi = useFieldApi('name');
  return (
    <button
      type="button"
      onClick={() =>
        fieldApi.setValue(
          Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER))
        )
      }>
      Random
    </button>
  );
};

<Form>
  <Input name="name" label="Name:" initialValue="Joe" />
  <button type="submit">Submit</button>
  <h5>Component using fieldApi:</h5>
  <ComponentUsingFieldApi />
</Form>;
```
