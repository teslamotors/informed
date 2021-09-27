# Formatter Functions

You can achive highly custom fomatting by passing a function to each location in the formatter.

<!-- STORY -->

```jsx
import { Form, Input } from 'informed';

const mask = value => value.toUpperCase();

const formatter = [mask, mask, '-', mask, mask, '-', mask, mask, mask, mask];

<Form>
  <Input
    field="uppercase"
    label="Uppercase"
    formatter={formatter}
    initialValue="abcdefg"
  />
  <button type="submit">Submit</button>
  <Debug values maskedValues />
</Form>;
```
