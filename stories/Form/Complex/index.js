import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import {
  Form,
  Input,
  TextArea,
  RadioGroup,
  Radio,
  Checkbox,
  Select,
  Option,
  Scope,
  Debug
} from '../../../src';

const Complex = () => (
  <div>
    <Form autocomplete="off">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <Input name="name" label="First name:" />
          <Input name="favorite.color" label="Favorite color:" />
          <Scope scope="favorite">
            <Input name="food" label="Favorite food:" />
            <Input name="animal" label="Favorite animal:" />
          </Scope>
          <Input name="friends[0]" label="Friend 1:" />
          <Input name="friends[1]" label="Friend 2:" />
          <Input name="friends[2]" label="Friend 3:" />
          <TextArea name="bio" label="Bio" />
          <RadioGroup name="gender">
            <Radio value="male" label="Male:" />
            <Radio value="female" label="Female:" />
          </RadioGroup>
          <Select name="status" label="Relationship status:">
            <Option value="" disabled>
              Select One...
            </Option>
            <Option value="single">Single</Option>
            <Option value="relationship">Relationship</Option>
            <Option value="complicated">Complicated</Option>
          </Select>
          <Select
            name="colors"
            label="Colors:"
            multiple
            style={{ height: '100px', width: '200px' }}>
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="orange">Orange</Option>
            <Option value="purple">Purple</Option>
          </Select>
          <Checkbox name="authorize" label="Authorize:" />
          <button type="submit">Submit</button>
        </div>
        <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
          <Debug />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, Complex);
