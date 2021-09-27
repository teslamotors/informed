import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Input, Select, Checkbox, Relevant, Debug } from '../../../src';

const onSubmit = data => console.log(data);

const GettingStarted = () => (
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
);

export default withDocs(readme, GettingStarted);
