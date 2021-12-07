You can also get access to `Informed`s form api via `useFormApi`

<!-- STORY -->

```jsx
import { Form, Input, useFormApi } from 'informed';

const RandomSetterButton = () => {
  const formApi = useFormApi();
  return (
    <button
      type="button"
      onClick={() =>
        formApi.setValue(
          'name',
          Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER))
        )
      }>
      Random
    </button>
  );
};

<Form>
  <Input name="name" label="First Name:" />
  <button type="submit">Submit</button>
  <RandomSetterButton />
</Form>;
```

<br />
