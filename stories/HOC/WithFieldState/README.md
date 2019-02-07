# With Field State

The `withFieldState` HOC will allow you to gain access to a fields state.

<!-- STORY -->

```jsx
import { Form, Text, withFieldState } from 'informed';

const SomeComponent = props => (
 <pre>
   <code>
     {JSON.stringify(props.fieldState, null, 2)}
   </code>
 </pre>
);

const ComponentWithFieldState = withFieldState('name')(SomeComponent);

<Form id="withFieldState-form">
  <label>Name:<Text field="name"/></label>
  <button type="submit">Submit</button>
  <h5>Component with fieldState:</h5>
  <ComponentWithFieldState />
</Form>
```
