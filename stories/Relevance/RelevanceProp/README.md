# Relevant Prop

Sometimes you need to conditionally render fields. Below is a simple
example the shows or hides a spouse depending on a checkbox.

<!-- STORY -->

```jsx
import { Form, Input, Checkbox, Relevant } from 'informed';

const RelevanceProp = () => (
  <Form>
    <Input name="name" label="First name:" />
    <Checkbox name="married" label="Are you married?" />
    <Input
      name="spouse"
      label="Spouse name:"
      relevant={({ formState }) => formState.values.married}
    />
    <Debug values />
  </Form>
);
```
