// Example.jsx

import './Intro.css';
import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';

const onSubmit = ({ values }) => console.log(values);

const Example = () => (
  <Form onSubmit={onSubmit} className="my-styles">
    <Input name="name" label="Name" placeholder="Elon" required />
    <Input name="age" type="number" label="Age" required="Age Required" />
    <Input name="phone" label="Phone" formatter="+1 (###)-###-####" required />
    <Select name="car" label="Car" initialValue="ms" required>
      <option value="ms">Model S</option>
      <option value="m3">Model 3</option>
      <option value="mx">Model X</option>
      <option value="my">Model Y</option>
    </Select>
    <Checkbox name="married" label="Married?" />
    <Relevant when={({ formState }) => formState.values.married}>
      <Input name="spouse" label="Spouse" />
    </Relevant>
    <button type="submit">Submit</button>
    <Debug valid pristine dirty values errors />
  </Form>
);

export default Example;
