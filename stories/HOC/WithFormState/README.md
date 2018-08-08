# With Form State

The `withFormState` HOC will allow you to gain access to the formState.

<!-- STORY -->

```jsx
import { Form, Text, withFormState } from 'informed';

const SomeComponent = props => (
  <pre>
    <code>{JSON.stringify(props.formState, null, 2)}</code>
  </pre>
);

const ComponentWithFormState = withFormState(SomeComponent);

<Form id="withFormState-form">
  <label htmlFor="withFormState-name">Name:</label>
  <Text field="name" id="withFormState-name" />
  <button type="submit">Submit</button>
  <h5>Component with formState:</h5>
  <ComponentWithFormState />
</Form>;
```
