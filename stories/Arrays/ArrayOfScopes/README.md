# Array of scopes

Scopes can also be associated with an array. Here is an example where you can input two friends.
where a friend consists of a first and last name.

<!-- STORY -->

```jsx
import { Form, Input, Scope, Debug } from 'informed';

const ArrayOfScopes = () => (
  <Form>
    <h5>Friend1</h5>
    <Scope scope="friends[0]">
      <Input name="firstName" label="First Name" />
      <Input name="lastName" label="Last Name" />
    </Scope>
    <h5>Friend2</h5>
    <Scope scope="friends[1]">
      <Input name="firstName" label="First Name" />
      <Input name="lastName" label="Last Name" />
    </Scope>
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);
```
