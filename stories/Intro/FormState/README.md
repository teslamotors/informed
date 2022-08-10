## Form State

**"Ok so informed takes care of state so I dont have to.. but how do i get my hands
on this 'awesome stuff'??"**

Thats a great question! There are many ways so lets take a look at a few!

Below is a similar example, except this time, we show you how to access
the form state and render out the values that are changing.

**Note: for a full list of the available values within formState go to the
formState section of these docs**

<!-- STORY -->

```jsx
import { Form, Input, useFormState, Debug } from 'informed';

const FormState = () => {
  const formState = useFormState();

  return (
    <pre>
      <code>{JSON.stringify(formState, null, 2)}</code>
    </pre>
  );
};

const Example = () => {
  return (
    <Form>
      <Input name="name" label="First Name" />
      <button type="submit">Submit</button>
      <Debug />
    </Form>
  );
};
```

### Ok so what if i need the state outside of the `<Form />` ??

Don't fret! This is also very simple. You have two options:

1. Use the Forms `onChange` prop.

```jsx
<Form onChange={formState => console.log(formState)}>
  <Input name="hello" />
  <button type="submit">Submit</button>
</Form>
```

<br/>
2) Use the Forms `formApiRef` prop, and then use the apis `getFormState` function.

```jsx
import React, { useRef } from 'react';
import { Form, Input } from 'informed';

const MyAwesomeForm = () => {
  const formApiRef = useRef();

  const handleClick = () => {
    console.log(apiRef.current.getFormState());
  };

  return (
    <div>
      <Form formApiRef={formApiRef}>
        <Input name="hello" />
        <button type="submit">Submit</button>
      </Form>
      <button onClick={handleClick}>Print Form State</button>
    </div>
  );
};
```

<br />
