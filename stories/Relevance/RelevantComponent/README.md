# Relevance Component

Sometimes you need to conditionally render fields. Below is a simple
example the shows or hides a spouse depending on a checkbox.

<!-- STORY -->

```jsx
import { Form, Input, Checkbox, Relevant } from 'informed';

const RelevantComonent = () => (
  <Form>
    <Input name="name" label="First name:" />
    <Checkbox name="married" label="Are you married?" />
    <Relevant when={({ formState }) => formState.values.married}>
      <Input name="spouse" label="Spouse name:" />
    </Relevant>
    <Debug values />
  </Form>
);
```
