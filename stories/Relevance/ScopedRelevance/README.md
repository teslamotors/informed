# Scoped Relevance

Sometimes you need to conditionally render fields when they are within a scope.

This is particularly usefull in array fields where your field might be:

```js
'friends[1].name';
// OR
'friends[4].name';
// So you
`${scope}.name`;
```

</br>

Below will use the scope component to show this off. When the child is over 16 they can have a car!

<!-- STORY -->

```jsx
import { Form, Input, Select, Relevant, Scope, Debug } from 'informed';

const Example = () => (
  <Form>
    <Scope scope="child">
      <Input name="age" type="number" label="How old is your child?" />
      <Relevant
        when={({ formApi, scope }) => formApi.getValue(`${scope}.age`) >= 16}>
        <Select name="car" label="What car do they drive?">
          <option value="ms">Model S</option>
          <option value="m3">Model 3</option>
          <option value="mx">Model X</option>
          <option value="my">Model Y</option>
        </Select>
      </Relevant>
    </Scope>
    <Debug values />
  </Form>
);
```
