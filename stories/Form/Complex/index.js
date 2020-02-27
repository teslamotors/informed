import React from 'react';
import withDocs from '../../utils/withDocs';
import FormState from '../../utils/FormState';
import readme from './README.md';

import { Form, Text, TextArea, RadioGroup, Radio, Checkbox, Select, Option, Scope } from '../../../src';

const Complex = () => (
  <div>
    <Form>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <label>First name:<Text field="name" /></label>
          <Scope scope="favorite">
            <label>Favorite color:<Text field="color" /></label>
            <label>Favorite food:<Text field="food" /></label>
          </Scope>
          <label>Friend 1:<Text field="friends[0]" /></label>
          <label>Friend 2:<Text field="friends[1]" /></label>
          <label>Friend 3:<Text field="friends[2]" /></label>
          <label>Bio:<TextArea field="bio" /></label>
          <RadioGroup field="gender">
            <label>Male: <Radio value="male" /></label>
            <label>Female: <Radio value="female" /></label>
          </RadioGroup>
          <label>
            Relationship status:
            <Select field="status">
              <Option value="" disabled>
                Select One...
              </Option>
              <Option value="single">Single</Option>
              <Option value="relationship">Relationship</Option>
              <Option value="complicated">Complicated</Option>
            </Select>
          </label>
          <label>
            Colors:
            <Select
              field="colors"
              multiple
              style={{ height: '100px', width: '200px' }}>
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
              <Option value="yellow">Yellow</Option>
              <Option value="orange">Orange</Option>
              <Option value="purple">Purple</Option>
            </Select>
          </label>
          <label>Authorize: <Checkbox field="authorize" /></label>
          <button type="submit">Submit</button>
        </div>
        <div style={{ flex: 2, minWidth: '300px' }}>
          <FormState />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, Complex);
