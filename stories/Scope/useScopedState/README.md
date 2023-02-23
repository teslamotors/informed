# useScopedState

Sometimes you need to scope specific fields ( group them ). This is easily achieved with the use of `Scope`. But then, you may also want to access that scopes state, this can be done with `useScopedState`.

<!-- STORY -->

```jsx
import { Form, Input, Scope, useScopedState } from 'informed';

const initialValues = {
  name: 'Elon',
  age: 50,
  spouse: {
    name: 'Talulah',
    age: 36
  },
  mother: {
    name: 'Maye',
    age: 74
  }
};

const ComponentUsingScopedState = () => {
  const state = useScopedState();
  return (
    <pre>
      <code>{JSON.stringify(state, null, 2)}</code>
    </pre>
  );
};

const ScopeComonent = () => (
  <Form initialValues={initialValues}>
    <h3>Your Info</h3>
    <Input name="name" label="First name:" />
    <Input name="age" label="Age:" type="number" />
    <Scope scope="spouse">
      <h3>Spouses Info</h3>
      <Input name="name" label="First name:" />
      <Input name="age" label="Age:" type="number" />
      <ComponentUsingScopedState />
    </Scope>
    <br />
    <Scope scope="mother">
      <h3>Mothers Info</h3>
      <Input name="name" label="First name:" />
      <Input name="age" label="Age:" type="number" />
      <ComponentUsingScopedState />
    </Scope>
  </Form>
);
```
