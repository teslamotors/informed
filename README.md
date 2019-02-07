# Informed

## By the creators of react-form

### Go to [live examples, code and docs](https://joepuzzo.github.io/informed)!

[![Informed-Chat](https://img.shields.io/badge/slack-informed--chat-blue.svg)](https://spectrum.chat/informed)
[![Build Status](https://travis-ci.org/joepuzzo/informed.svg?branch=master)](https://travis-ci.org/joepuzzo/informed)
[![Coverage Status](https://coveralls.io/repos/github/joepuzzo/informed/badge.svg?branch=master)](https://coveralls.io/github/joepuzzo/informed?branch=master)

## Introduction

Say hello to the best react form library you have ever used! Informed is an extensive, simple, and efficient solution for creating basic to complex forms in react. Out of the box you get the ability to grab and manipulate values, validate fields, create custom inputs, and much much more!!!

Oh and YES WE USE HOOKS!!

## Getting Started

##### Install with npm
```
npm install --save informed
```

#### Create a Simple Form

```jsx
import { Form, Text } from 'informed';

<Form>
  <label>
    First name:
    <Text field="name"/>
  </label>
  <button type="submit">Submit</button>
</Form>;
```

#### Create a Simple Form With Validation

```jsx
import { Form, Text } from 'informed';

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

<Form>
  <label>
    First name:
    <Text field="name" validate={validate}/>
  </label>
  <button type="submit">Submit</button>
</Form>;
```

#### Create a Complex Form

```jsx
<Form>
  <label>First name:<Text field="name"/></label>
  <Scope scope="favorite">
    <label>Favorite color:<Text field="color"/></label>
    <label>Favorite food:<Text field="food"/></label>
  </Scope>
  <label>Friend 1:<Text field="friends[0]" /></label>
  <label>Friend 2:<Text field="friends[1]" /></label>
  <label>Friend 3:<Text field="friends[2]" /></label>
  <label>Bio:<TextArea field="bio"/></label>
  <RadioGroup field="gender">
    <label>Male <Radio value="male"/></label>            
    <label>Female <Radio value="female"/></label>
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
      <Option value="red">Red</Option>
      <Option value="green">Green</Option>
      <Option value="blue">Blue</Option>
      <Option value="yellow">Yellow</Option>
      <Option value="orange">Orange</Option>
      <Option value="purple">Purple</Option>
    </Select>
  </label>
  <label>Authorize: <Checkbox field="authorize"/></label>
  <button type="submit">Submit</button>
</Form>
```
