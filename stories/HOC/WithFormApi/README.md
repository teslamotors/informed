# With Form Api

The `withFormApi` HOC will allow you to gain access to the formApi.

<!-- STORY -->

```jsx
import { Form, Text, withFormApi } from 'informed';

const SomeComponent = props => (
  <button type="button" onClick={()=>
    props.formApi.setValue(
      'name', 
      Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)))}>
    Random
  </button>
);

const ComponentWithFormApi = withFormApi(SomeComponent);

<Form>
  <div>
    <label>Name:<Text field="name"/></label>
    <button type="submit">Submit</button>
    <h5>Component with formApi:</h5>
    <ComponentWithFormApi />
  </div>
</Form>
```
