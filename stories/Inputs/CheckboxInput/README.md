# Checkbox Input

<!-- STORY -->

```jsx
import { Form, Checkbox, Debug } from 'informed';

const CheckboxInput = () => (
  <Form>
    <Checkbox name="authorize" label="Authorize" />
    <button type="submit">Submit</button>
    <Debug values />
  </Form>
);
```
