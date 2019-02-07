# With Field Api

The `withFieldApi` HOC will allow you to gain access to a fields api.

<!-- STORY -->

```jsx
import { Form, Text, withFieldApi } from 'informed';

const SomeComponent = props => (
  <button type="button" onClick={()=>
    props.fieldApi.setValue(
      Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)))}>
    Random
  </button>
);

const ComponentWithFieldApi = withFieldApi('name')(SomeComponent);

<Form>
  <label>Name: <Text field="name"/></label>
  <button type="submit">Submit</button>
  <h5>Component with fieldApi:</h5>
  <ComponentWithFieldApi />
</Form>
```
