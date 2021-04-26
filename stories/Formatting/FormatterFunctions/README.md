# Formatter Functions

You can achive highly custom fomatting by passing a function to each location in the formatter.

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

const mask = value => value.toUpperCase();

const formatter = [mask, mask, '-', mask, mask, '-', mask, mask, mask, mask];

<Form>
  <label>
    Phone Number:
    <Text
      field="phone"
      formatter={formatter}
      maintainCursor
      initialValue="abcdefg"
    />
  </label>
  <button type="submit">Submit</button>
</Form>;
```
