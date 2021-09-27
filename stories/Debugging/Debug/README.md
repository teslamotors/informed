# Debug Components

Sometimes you just want to see whats going on with the form state.
This can easily be achieved by rendering Debug components.

<!-- STORY -->

```jsx
import { Form, Input, Debug, DebugField } from 'informed';

<Form>
  <Input name="name" label="Name:" />
  <button type="submit">Submit</button>
  <Debug />
  <DebugField name="name" />
</Form>;
```
