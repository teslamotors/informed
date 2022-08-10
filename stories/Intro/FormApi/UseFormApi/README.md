### Form Api ??

**Yes what a beautiful segue into the formApi!**

Informed also gives you access to a `formApi`. This api allows you to grab
and manipulate values using getters and setters. In the previous example, we
actually used a prop called `formApiRef` in order to getAccess to informed's api
externally. Then we used the `getFormState` function to log out the state when
our external button was clicked.

Below is an example where you can access the formApi via hooks. Then use it
to change the value of the field when the random button is clicked!

**Note: for a full list of the available functions within formApi go to the
formApi section of these docs**

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
