# Array of fields

Fields can also be associated with an array. Here is an example where you can input three friends.

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

<Form id="array-form">
  <label htmlFor="array-friend-1">Friend1</label>
  <Text field="friends[0]" id="array-friend-1" />
  <label htmlFor="array-friend-2">Friend2</label>
  <Text field="friends[1]" id="array-friend-2" />
  <label htmlFor="array-friend-3">Friend3</label>
  <Text field="friends[2]" id="array-friend-3" />
  <button type="submit">
    Submit
  </button>
</Form>
```
