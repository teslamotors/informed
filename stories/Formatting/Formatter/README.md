# Format and Parse

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

const formatter = ['+', '1', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

const parser = value => {
  return value.replace('+1 ', '').replace(/-/g, '');
};

<Form>
  <label>
  Phone Number:
  <Text field="phone" formatter={formatter} parser={parser} maintainCursor initialValue="1231231234"/>
  </label>
  <button type="submit">Submit</button>
</Form>;
```
