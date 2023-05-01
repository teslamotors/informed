// Example.jsx

// Styles for your inputs
import './styles.css';

// Default informed inputs
import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';

const onSubmit = ({ values }) => window.alert(`Hello ${values.name}`);

const Example = () => (
  <Form onSubmit={onSubmit} className="your-styles">
    <div className="hide">
      <Input name="name" label="Name" placeholder="Elon" required />
      <Input name="age" type="number" label="Age" required="Age Required" />
      <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
      <Select name="car" label="Car" initialValue="ms">
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
    </div>
    <div className="hide">
      <Debug valid pristine dirty values errors />
    </div>
  </Form>
);

export default Example;
