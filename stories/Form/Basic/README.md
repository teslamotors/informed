# Basic Form

<!-- STORY -->

```jsx
import { Form, Input, Debug } from 'informed';

const onSubmit = ({ values }) => {
  window.alert(JSON.stringify(values, null, 2));
};

<Form onSubmit={onSubmit}>
  <Input field="name" label="First name:" />
  <button type="submit">Submit</button>
  <Debug values />
</Form>;
```
