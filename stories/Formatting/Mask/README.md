# Mask

Masking values is made simple with the use of the `mask` function. Please note, in addition to mask you sometimes want to pair it with a parser function see example below:

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

const mask = value => value.toUpperCase();
const parser = value => value.toLowerCase();

<Form>
  <Input name="field1" label="Field 1 ( no parser )" mask={mask} />
  <Input
    name="field2"
    label="Field 2 ( with parser )"
    mask={mask}
    parser={parser}
  />
  <button type="submit">Submit</button>
</Form>;
```
