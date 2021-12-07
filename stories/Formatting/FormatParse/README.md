# Format and Parse

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

const format = value => (value != null ? `$${value}` : value);
const parse = value => (value != null ? value.replace('$', '') : value);

<Form>
  <label>
    First name:
    <Input field="name" format={format} parse={parse} />
  </label>
  <button type="submit">Submit</button>
</Form>;
```
