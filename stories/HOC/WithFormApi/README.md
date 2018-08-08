# With Form Api

The `withFormApi` HOC will allow you to gain access to the formApi.

<!-- STORY -->

```jsx
import { Form, Text, withFormApi } from 'informed';

const SomeComponent = props => (
  <pre>
    <code>{JSON.stringify(props.formApi.getState(), null, 2)}</code>
  </pre>
);

const ComponentWithFormApi = withFormApi(SomeComponent);

<Form id="array-form">
  <label htmlFor="withFormApi-name">Name:</label>
  <Text field="name" id="withFormApi-name" />
  <button type="submit">Submit</button>
  <h5>Component with formApi:</h5>
  <ComponentWithFormApi />
</Form>;
```
