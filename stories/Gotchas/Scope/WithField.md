# Scope

Scope is a very useful tool for simplifying your code but you can easily make
mistakes when using it.

## useFieldState:

Below is an example where you could misuse the `useFieldState`.

Type into the field and Note how the text below to `color:` gets updated while nothing changes next to `favorite.color:`

<!-- STORY -->

Why? Lets take a look at the code below:

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, Input, Scope, useFieldState } from 'informed';

const ScopedFieldState = ({ name }) => {
  const { value } = useFieldState(name);
  return (
    <pre>
      <code>{JSON.stringify(value, null, 2)}</code>
    </pre>
  );
};

const UnScopedFieldState = ({ name }) => {
  const { value } = useFieldState(name, false); // << Note the false here
  return (
    <pre>
      <code>{JSON.stringify(value, null, 2)}</code>
    </pre>
  );
};

const ScopeGotcha = () => (
  <div>
    <Form>
      <Scope scope="favorite">
        <Input field="color" />
        <h5>favorite.color: ( scoped )</h5>
        <ScopedFieldState name="favorite.color" />
        <h5>color: ( scoped )</h5>
        <ScopedFieldState name="color" />
        <h5>favorite.color: ( un-scoped )</h5>
        <UnScopedFieldState name="favorite.color" />
      </Scope>
      <h5>Form State</h5>
      <Debug values />
    </Form>
  </div>
);
```

<br/>

Remember that the result of the `useField` hooks is affected just like `Input` fields. In other words when you write:

```jsx
<Input name="color" />
```

<br/>

Within A:

```jsx
<Scope scope="favorite" />
```

<br/>

The result in the values is `favorite.color`. Putting a component that uses `useFieldState` or `useFieldApi` is affected in the exact same way!

To opt out of this. Pass `false` as a second parameter.
