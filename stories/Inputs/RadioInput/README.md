# Radio Input

<!-- STORY -->

```jsx
import { Form, RadioGroup, Radio, Debug } from 'informed';

const RadioInput = () => (
  <Form>
    <RadioGroup name="gender">
      <Radio value="male" label="Male" />
      <Radio value="female" label="Female" />
    </RadioGroup>
    <button type="submit">Submit</button>
    <Debug values />
  </Form>
);
```
