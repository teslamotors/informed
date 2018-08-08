# Array of scopes

Scopes can also be associated with an array. Here is an example where you can input two friends.
where a friend consists of a first and last name.

<!-- STORY -->

```jsx
import { Form, Text, Scope } from 'informed';

<Form id="array-form">
  <h5>Friend1</h5>
  <Scope scope="friends[0]">
    <label htmlFor="friend-1-firstname">Firstname</label>
    <Text field="firstname" id="friend-1-firstname" />
    <label htmlFor="friend-1-lastname">Lastname</label>
    <Text field="lastname" id="friend-1-lastname" />
  </Scope>
  <h5>Friend2</h5>
  <Scope scope="friends[1]">
    <label htmlFor="friend-2-firstname">Firstname</label>
    <Text field="firstname" id="friend-2-firstname" />
    <label htmlFor="friend-2-lastname">Lastname</label>
    <Text field="lastname" id="friend-2-lastname" />
  </Scope>
  <button type="submit">Submit</button>
</Form>;
```
