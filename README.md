# Informed

## By the creators of react-form

### Go to [live examples, code and docs](https://joepuzzo.github.io/informed)!

[![Informed-Chat](https://img.shields.io/badge/slack-informed--chat-blue.svg)](https://spectrum.chat/informed)
[![Build Status](https://travis-ci.org/joepuzzo/informed.svg?branch=master)](https://travis-ci.org/joepuzzo/informed)
[![Coverage Status](https://coveralls.io/repos/github/joepuzzo/informed/badge.svg?branch=master)](https://coveralls.io/github/joepuzzo/informed?branch=master)

## Introduction

Say hello to the best react form library you have ever used! Informed is an extensive, simple, and efficient solution for creating basic to complex forms in react. Out of the box you get the ability to grab and manipulate values, validate fields, and create custom inputs.

## Getting Started

##### Install with npm
```
npm install --save informed
```

#### Create a Simple Form

```jsx
import { Form, Text } from 'informed';

<Form id="simple-form">
  <label htmlFor="name-field">First name:</label>
  <Text field="name" id="name-field" />
  <button type="submit">
    Submit
  </button>
</Form>
```

#### Create a Complex Form

```jsx
import { Form, Text, Scope } from 'informed';

<Form id="complex-form">
  <label htmlFor="complex-name">First name:</label>
  <Text field="name" id="complex-name" />
  <Scope scope="favorite">
    <label htmlFor="complex-color">Favorite color:</label>
    <Text field="color" id="complex-color" />
    <label htmlFor="complex-food">Favorite food:</label>
    <Text field="food" id="complex-food" />
  </Scope>
  <label htmlFor="complex-friend-0">Friend 1:</label>
  <Text field="friends[0]" id="complex-friend-0"/>
  <label htmlFor="complex-friend-1">Friend 2:</label>
  <Text field="friends[1]" id="complex-friend-1"/>
  <label htmlFor="complex-friend-2">Friend 3:</label>
  <Text field="friends[2]" id="complex-friend-2"/>
  <button type="submit">
    Submit
  </button>
</Form>
```
