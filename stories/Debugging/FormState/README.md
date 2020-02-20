# Form State Component

Sometimes you just want to see whats going on with the form state.
This can easily be achived by rendering a FormState component within the `<Form>`

<!-- STORY -->

```jsx
import { Form, Text, FormState } from 'informed';

<Form>
  <label>
  First name:
  <Text field="name" />
  </label>
  <button type="submit">Submit</button>
  <FormState />
</Form>;
```
