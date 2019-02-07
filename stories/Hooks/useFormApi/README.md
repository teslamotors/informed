# Use Form Api

The `useFormApi` hook will allow you to gain access to the formApi.

<!-- STORY -->

```jsx
import { Form, Text, useFormApi } from 'informed';

const ComponentUsingFormApi = () => {
  const formApi = useFormApi();
  return (
    <button type="button" onClick={()=>
      formApi.setValue(
        'name', 
        Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)))}>
      Random
    </button>
  );
};
  
<Form>
  <div>
    <label>Name:<Text field="name"/></label>
    <button type="submit">Submit</button>
    <h5>Component using formApi:</h5>
    <ComponentUsingFormApi />
  </div>
</Form>
```
