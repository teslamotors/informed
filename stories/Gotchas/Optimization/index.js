import React from 'react';
import withDocs from '../../utils/withDocs';
import FormState from '../../utils/FormState';
import readme from './README.md';

import { Form, Text, TextArea, RadioGroup, Radio, Checkbox, Select, Option, Scope } from '../../../src';

const basicValidation = value => {
  return !value || value.length < 5 ? 'Password must be at least five characters' : undefined;
};

const matchValidation = ( value, values ) => {
  return values.password !== values.confirmPassword ? 'Passwords must match' : undefined;
};

const passwordValidation = ( value, values ) => {
  return basicValidation(value) || matchValidation( value, values );
};

const Optimization = () => (
  <div>
    <Form autoComplete="off">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <label>First name:<Text debug field="name"/></label>
          <Scope scope="favorite">
            <label>Favorite color:<Text debug field="color"/></label>
            <label>Favorite food:<Text debug field="food"/></label>
          </Scope>
          <label>Friend 1:<Text debug field="friends[0]" /></label>
          <label>Friend 2:<Text debug field="friends[1]" /></label>
          <label>Friend 3:<Text debug field="friends[2]" /></label>
          <label>
            Password:
            <Text debug field="password" notify={['confirmPassword']} validateOnChange validate={passwordValidation}/>
          </label>
          <label>Confirm Password:
            <Text debug field="confirmPassword" notify={['password']} validateOnChange validate={passwordValidation} />
          </label>
          <label>Bio:<TextArea debug field="bio"/></label>
          <RadioGroup field="gender">
            <label>Male: <Radio debug value="male"/></label>            
            <label>Female: <Radio debug value="female"/></label>
          </RadioGroup>
          <label>
            Relationship status:
            <Select debug field="status">
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
              debug
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
          <label>Authorize: <Checkbox debug field="authorize"/></label>
          <button type="submit">Submit</button>
        </div>
        <div style={{ flex: 2, minWidth: '300px' }}>
          <FormState errors/>
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, Optimization);
