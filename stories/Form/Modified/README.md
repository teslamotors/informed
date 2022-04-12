# Modified

Sometimes you want to know what fields changed. You can easily do this by submitting with `modified`.

<!-- STORY -->

```jsx
import { Form, Input, Debug } from 'informed';

const onSubmit = ({ modified }) => {
  window.alert(JSON.stringify(modified, null, 2));
};

const Modified = () => (
  <Form
    onSubmit={onSubmit}
    autocomplete="off"
    initialValues={{
      name: 'Joe',
      age: 27
    }}>
    <Input name="name" label="Name:" />
    <Input name="age" type="number" label="Age:" />
    <button type="submit">Submit</button>
    <Debug values modified initialValues />
  </Form>
);
```
