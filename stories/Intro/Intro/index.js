import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Input, Select, Checkbox, Relevant, Debug } from '../../../src';
import { CodeBlock } from '../../utils/CodeBlock';

const code = `
import { Form, Input, Select, Checkbox, Relevant } from 'informed';
import style from './style.css';

const onSubmit = ({values}) => console.log(values);

export default function App() {
  return (
    <Form onSubmit={onSubmit} autocomplete="off">
      <Input field="name" label="Name" placeholder="Elon" />
      <Input field="age" type="number" label="Age" required="Age Required" />
      <Input field="phone" label="Phone" formatter="+1 (###)-###-####" />
      <Select field="car" label="Car" initialValue="ms">
        <option value="ms">Model S</option>
        <option value="m3">Model 3</option>
        <option value="mx">Model X</option>
        <option value="my">Model Y</option>
      </Select>
      <label>
        Married: <Checkbox field="married" />
      </label>
      <Relevant when={({ formState }) => formState.values.married}>
        <Input field="spouse" label="Spouse" />
      </Relevant>
      <button type="submit">Submit</button>
    </Form>
  )
}`;

const onSubmit = ({ values }) => console.log(values);

const GettingStarted = () => (
  <>
    <Form onSubmit={onSubmit} autocomplete="off">
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <Input name="name" label="Name" placeholder="Elon" />
          <Input name="age" type="number" label="Age" required="Age Required" />
          <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
          <Select name="car" label="Car" initialValue="ms">
            <option value="ms">Model S</option>
            <option value="m3">Model 3</option>
            <option value="mx">Model X</option>
            <option value="my">Model Y</option>
          </Select>
          <label>
            Married: <Checkbox name="married" />
          </label>
          <Relevant when={({ formState }) => formState.values.married}>
            <Input name="spouse" label="Spouse" />
          </Relevant>
          <button type="submit">Submit</button>
        </div>
        <div style={{ flex: '1' }}>
          <Debug />
        </div>
      </div>
    </Form>
    <br />
    <CodeBlock code={code} />
  </>
);

export default withDocs(readme, GettingStarted);
