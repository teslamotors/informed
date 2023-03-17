// Example.jsx

import { Relevant, Debug } from 'informed';

// Inputs that were hooked up to informed via "useField"
import { Form, Input, Select, Checkbox, Option, Button } from 'YourComponents';

const onSubmit = ({ values }) => window.alert(`Hello ${values.name}`);

const Example = () => (
  <Form onSubmit={onSubmit}>
    <Input name="name" label="Name" placeholder="Elon" required />
    <Input name="age" type="number" label="Age" required="Age Required" />
    <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
    <Select name="car" label="Car" initialValue="ms">
      <Option key="ms">Model S</Option>
      <Option key="m3">Model 3</Option>
      <Option key="mx">Model X</Option>
      <Option key="my">Model Y</Option>
    </Select>
    <Checkbox name="married" label="Married?" />
    <Relevant when={({ formState }) => formState.values.married}>
      <Input name="spouse" label="Spouse" />
    </Relevant>
    <Button type="submit">Submit</Button>
    <Debug valid pristine dirty values errors />
  </Form>
);

export default Example;
