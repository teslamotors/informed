import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { CodeBlock } from '../../utils/CodeBlock';

let code = `
import { Form, Input, Text, Select, RadioGroup, Radio, Debug } from 'informed';
import './style.css';

const onSubmit = ({values}) => {
  window.alert(JSON.stringify(values));
}

export default function App() {
  return (
    <Form onSubmit={onSubmit}>
      <Input field="name" label="First Name" placeholder="Elon"/>
      <Select field="color" label="Color" required>
          <option value="" disabled>
            - Select -
          </option>
          <option value="red">Red</option>
          <option value="black">Black</option>
          <option value="white">White</option>
      </Select>
      <RadioGroup field="model" label="Model" initialValue="m3">
          <label>Model S <Radio value="ms" /></label>
          <label>Model 3 <Radio value="m3" /></label>
          <label>Model X <Radio value="mx" /></label>
          <label>Model Y <Radio value="my" /></label>
      </RadioGroup>
      <button type="submit">
        Submit
      </button>
    </Form>
  );
};
`;

const Playground = () => {
  return <CodeBlock code={code} />;
};

export default withDocs(readme, Playground);
