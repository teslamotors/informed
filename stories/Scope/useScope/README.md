# useScope

Sometimes you need to scope specific fields ( group them ). This is easily achieved with the use of `Scope`. But then, you may also want to access that scopes you are in, this can be done with `useScope`.

Note: you can also use this to scope a given string!

<!-- STORY -->

```jsx
import { Form, Input, Scope, useScope } from 'informed';

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

const WhereAmI = () => {
  const scope = useScope();
  return (
    <div style={{ margin: '1rem' }}>
      You are within <strong>{scope}</strong>s scope.
    </div>
  );
};

const ScopeThis = ({ name }) => {
  const scopedName = useScope(name);
  return (
    <div style={{ margin: '1rem' }}>
      Scoped name <strong>{scopedName}</strong>.
    </div>
  );
};

const ScopeComonent = () => (
  <Form initialValues={initialValues}>
    <h3>Your Info</h3>
    <Input name="name" label="First name:" />
    <Input name="age" label="Age:" type="number" />
    <WhereAmI />
    <ScopeThis name="hello" />
    <Scope scope="spouse">
      <h3>Spouses Info</h3>
      <Input name="name" label="First name:" />
      <Input name="age" label="Age:" type="number" />
      <WhereAmI />
      <ScopeThis name="hello" />
    </Scope>
    <br />
    <Scope scope="mother">
      <h3>Mothers Info</h3>
      <Input name="name" label="First name:" />
      <Input name="age" label="Age:" type="number" />
      <WhereAmI />
      <ScopeThis name="hello" />
    </Scope>
  </Form>
);
```
