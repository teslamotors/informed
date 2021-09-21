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
  FormState
} from '../../../src';

const Complex = () => (
  <div>
    <Form>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <label>
            First name:
            <Input name="name" />
          </label>
          <label>
            Favorite color:
            <Input name="favorite.color" />
          </label>
          <label>
            Favorite food:
            <Input name="favorite.food" />
          </label>
          <label>
            Friend 1:
            <Input name="friends[0]" />
          </label>
          <label>
            Friend 2:
            <Input name="friends[1]" />
          </label>
          <label>
            Friend 3:
            <Input name="friends[2]" />
          </label>
          {/* <label>
            Bio:
            <TextArea name="bio" />
          </label> */}
          <RadioGroup name="gender">
            <label>
              Male: <Radio value="male" />
            </label>
            <label>
              Female: <Radio value="female" />
            </label>
          </RadioGroup>
          <label>
            Relationship status:
            <Select name="status">
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
              name="colors"
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
          <label>
            Authorize: <Checkbox name="authorize" />
          </label>
          <button type="submit">Submit</button>
        </div>
        <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
          <FormState />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, Complex);
