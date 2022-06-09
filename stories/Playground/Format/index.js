import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { CodeBlock } from '../../utils/CodeBlock';

let code = `
import { Form, Input, Text, Select, Relevant, Checkbox, Debug } from 'informed';
import './style.css';

const onSubmit = ({values}) => {
  window.alert(JSON.stringify(values));
}

export default function App() {
  return (
    <Form onSubmit={onSubmit}>
      <Input name="name" label="Name" placeholder="Elon" />
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
      <Debug />
    </Form>
  );
};
`;

const Playground = () => {
  return <CodeBlock code={code} />;
};

export default withDocs(readme, Playground);
