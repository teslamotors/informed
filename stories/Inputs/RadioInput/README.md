# Radio Input

<!-- STORY -->

```jsx
import { Form, RadioGroup, Radio } from 'informed';

<Form id="radio-form">
  <RadioGroup field="gender">
    <label htmlFor="radio-male">Male</label>
    <Radio value="male" id="radio-male" />
    <label htmlFor="radio-female">Female</label>
    <Radio value="female" id="radio-female" />
  </RadioGroup>
  <button type="submit">
    Submit
  </button>
</Form>
```
