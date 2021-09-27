# Debug Component

Sometimes you just want to see whats going on with the form state.
This can easily be achived by rendering a Debug component within the `<Form>`

<!-- STORY -->

```jsx
import { Form, Input, Debug } from 'informed';

<Form>
  <Input name="name" label="Name:" />
  <button type="submit">Submit</button>
  <Debug />
</Form>;
```
