# Scope Component

Sometimes you need to scope specific fields ( group them ). This is easily achieved with the use of `Scope`.

<!-- STORY -->

```jsx
import { Form, Input, Scope } from 'informed';

const initialValues = {
  name: 'Elon',
  age: 50,
  spouse: {
    name: 'Talulah',
    age: 36
  }
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
    </Scope>
    <Debug values />
  </Form>
);
```
