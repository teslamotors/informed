# Array of fields

Fields can also be associated with an array. Here is an example where you can input three friends.

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

const Example = () => (
  <Form>
    <Input name="friends[0]" label="Friend1" />
    <Input name="friends[1]" label="Friend2" />
    <Input name="friends[2]" label="Friend3" />
    <button type="submit">Submit</button>
    <Debug values />
  </Form>
);
```
