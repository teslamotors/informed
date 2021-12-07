# Mask With Cursor Offset

Masking values and offseting the cursor is made simple with the use of the `maskWithCursorOffset` function. Please NOTE!
the use of the `maintainCursor` prop. This is not always necessary, but in the following
example was needed! If you remove it the cursor will jump to the end every time the user types.

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

const mask = value => {
  let v = value && value.replace(/\D/g, '').slice(0, 10);
  let offset = 0;
  if (value && v.length >= 5) {
    v = `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
    offset = 2;
  } else if (value && v.length >= 3) {
    v = `${v.slice(0, 2)}/${v.slice(2)}`;
    offset = 1;
  }
  return { value: v, offset };
};

<Form>
  <label>
    Date:
    <Input
      field="date"
      maxLength="10"
      maskWithCursorOffset={mask}
      maintainCursor
    />
  </label>
  <button type="submit">Submit</button>
</Form>;
```
