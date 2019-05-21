# Mask

Masking values is made simple with the use of the `mask` function. Please NOTE! 
the use of the `maintianCursor` prop. This is not always necessary, but in the following
example was needed! If you remove it the cursor will jump to the end every time the user types.

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

const mask = value => value.toUpperCase();

<Form>
  <label>
  First name:
  <Text field="name" mask={mask} maintainCursor/>
  </label>
  <button type="submit">Submit</button>
</Form>;
```
