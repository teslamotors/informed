import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Relevant,
  FormState
} from '../../../src';

const onSubmit = data => console.log(data);

const GettingStarted = () => (
  <Form onSubmit={onSubmit} autocomplete="off">
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
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
        <Relevant when={({ values }) => values.married}>
          <Input field="spouse" label="Spouse" />
        </Relevant>
        <button type="submit">Submit</button>
      </div>
      <div style={{ flex: '1' }}>
        <FormState />
      </div>
    </div>
  </Form>
);

export default withDocs(readme, GettingStarted);
