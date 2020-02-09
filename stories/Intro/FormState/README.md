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
import { Form, Text } from 'informed';

<Form>
  {({ formState }) => (
    <div>
      <label>
        First name:
        <Text field="name"/>
      </label>
      <button type="submit">Submit</button>
      <label>Values:</label>
      <code>{JSON.stringify(formState.values)}</code>
      <label>Touched:</label>
      <code>{JSON.stringify(formState.touched)}</code>
    </div>
  )}
</Form>;
```

---

### What is this magic?

Its not magic, its a Function As A Child, or otherwise known as [render props](https://reactjs.org/docs/render-props.html)

There are five ways you can get access to `Informed`s form state.

1) By accessing the `formState` as a parameter to a child render function.

```jsx
<Form>
  {({ formState }) => (
    <div>
      <Text field="hello" />
      <button type="submit">Submit</button>
      <label>Values:</label>
      <code>{JSON.stringify(formState.values)}</code>
      <label>Touched:</label>
      <code>{JSON.stringify(formState.touched)}</code>
    </div>
  )}
</Form>
```

<br/>
2) By accessing the `formState` as a parameter to a render prop.

```jsx
<Form
  render={({ formState }) => (
    <div>
      <Text field="hello" />
      <button type="submit">Submit</button>
      <label>Values:</label>
      <code>{JSON.stringify(formState.values)}</code>
      <label>Touched:</label>
      <code>{JSON.stringify(formState.touched)}</code>
    </div>
  )}
/>
```

<br/>
3) By accessing the `formState` as a prop to a component prop.

```jsx
const FormContent = ({ formState }) => (
  <div>
    <Text field="hello" />
    <button type="submit">Submit</button>
    <label>Values:</label>
    <code>{JSON.stringify(formState.values)}</code>
    <label>Touched:</label>
    <code>{JSON.stringify(formState.touched)}</code>
  </div>
);

<Form component={FormContent} />;
```

<br/>
4) By accessing the `formState` as a prop via a HOC ( High Order Component ).

```jsx
const FormState = withFormState(({ formState }) => (
  <label>Values:</label>
  <code>{JSON.stringify(formState.values)}</code>
  <label>Touched:</label>
  <code>{JSON.stringify(formState.touched)}</code>
));

<Form>
  <div>
    <Text field="hello" />
    <button type="submit">Submit</button>
    <FormState />
  </div>
</Form>
```

<br/>
5) By accessing the `formState` via Hooks!

```jsx
const FormState = () => {
  const formState = useFormState();
  return (
    <label>Values:</label>
    <code>{JSON.stringify(formState.values)}</code>
    <label>Touched:</label>
    <code>{JSON.stringify(formState.touched)}</code>
  );
};

<Form>
  <div>
    <Text field="hello" />
    <button type="submit">Submit</button>
    <FormState />
  </div>
</Form>
```
<br/>
So if you do need access to the form state, any of these methods will work.

---

### Ok so what if i need the state outside of the `<Form />` ??

Don't fret! This is also very simple. You have two options:

1) Use the Forms `onChange` prop.

```jsx
<Form onChange={formState => console.log(formState)}>
  <Text field="hello" />
  <button type="submit">Submit</button>
</Form>
```

<br/>
2) Use the Forms `apiRef` prop, and then use the apis `getState` function.

```jsx
import React, { useRef } from 'react';
import { Form, Text } from 'informed';

const MyAwesomeForm = () => {

  const apiRef = useRef();

  const handleClick = () => {
    console.log(apiRef.current.getState());
  };

  return (
    <div>
      <Form apiRef={apiRef}>
        <Text field="hello" />
        <button type="submit">Submit</button>
      </Form>
      <button onClick={handleClick}>Print Form State</button>
    </div>
  );

};
```

---

