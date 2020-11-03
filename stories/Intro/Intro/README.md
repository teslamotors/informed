# Intro

Say hello to the best react form library you have ever used! Informed is an extensive, simple, and efficient solution for creating basic to complex forms in react. Out of the box you get the ability to grab and manipulate values, validate fields, create custom inputs, and much much more!

Oh and YES WE USE HOOKS!

Check out our [GitHub](https://github.com/joepuzzo/informed)!

[![npmversion](https://img.shields.io/npm/v/informed.svg)](https://www.npmjs.com/package/informed)
[![Discord](https://img.shields.io/discord/676066734746370058)](https://discord.gg/zpF5wA)
[![Build Status](https://travis-ci.org/joepuzzo/informed.svg?branch=master)](https://travis-ci.org/joepuzzo/informed)
[![Coverage Status](https://coveralls.io/repos/github/joepuzzo/informed/badge.svg?branch=master)](https://coveralls.io/github/joepuzzo/informed?branch=master)
[![Minzipped-Size](https://badgen.net/bundlephobia/minzip/informed)](https://bundlephobia.com/result?p=informed)

## Getting Started

##### Install with npm

```
npm install --save informed
```

---

#### What Can it do ?

See for yourself.

By default it comes with native dom inputs that are controlled by informed.

```jsx
import { Form, Input, Select, Checkbox, Relevant, FormState } from 'informed';

const onSubmit = data => console.log(data);

const ExampleForm = () => (
  <Form onSubmit={onSubmit}>
    <Input field="name" label="Name" placeholder="Elon" />
    <Input field="name" type="number" label="Age" required="Age Required" />
    <Input field="phone" label="Phone" formatter="+1 (###)-###-####" />
    <Select field="car" label="Car" initialValue="ms">
      <option value="ms">Model S</option>
      <option value="m3">Model 3</option>
      <option value="mx">Model X</option>
      <option value="my">Model Y</option>
    </Select>
    <Checkbox field="married" label="Married?" />
    <Relevant when={({ values }) => values.married}>
      <Input field="spouse" label="Spouse" />
    </Relevant>
    <button type="submit">Submit</button>
    <FormState />
  </Form>
);
```

<!-- STORY -->
