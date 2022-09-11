# Parse

Sometimes you just want to parse the value that is stored and show what user typed.

Note: when doing this you may need to pass an initialization function, see example below.

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

// Example 5 = 1 ( i.e a user typed the number ) 10  but we want to store a 2 .. 10 / 5 = 2
const parser = value => (value != null ? value / 5 : value);
const initialize = value => (value != null ? value * 5 : value);

<Form>
  <Input
    name="field"
    label="5 = 1"
    parser={parser}
    initialValue={2}
    initialize={initialize}
    type="number"
  />{' '}
  <button type="submit">Submit</button>
</Form>;
```
