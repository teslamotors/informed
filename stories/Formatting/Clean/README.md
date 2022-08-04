# Clean Functions

You can clean your values via a clean function

<!-- STORY -->

```jsx
import { Form, Input } from 'informed';

const clean = value => value.replace(/[!@#$%^&*()]/g, '');

<Form>
  <Input
    field="name"
    label="Name"
    initialValue="Joe!@#$%^*()Puzzo"
    clean={clean}
  />
  <button type="submit">Submit</button>
  <Debug values maskedValues />
</Form>;
```
