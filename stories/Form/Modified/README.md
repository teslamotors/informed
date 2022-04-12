# Modified

Sometimes you want to know what fields changed. You can easily do this by submitting with `modified`.

<!-- STORY -->

```jsx
import { Form, Input, Debug } from 'informed';

const onSubmit = ({ values }) => {
  window.alert(JSON.stringify(values, null, 2));
};

const Modified = () => (
  <Form onSubmit={onSubmit} autocomplete="off">
    <Input name="name" label="First name:" />
    <button type="submit">Submit</button>
    <Debug values />
  </Form>
);
```
