# Intro

Say hello to the best react form library you have ever used! `Informed` is an extensive, simple, and efficient solution for creating basic to complex forms in react. Out of the box you get the ability to grab and manipulate values, validate fields, and create custom inputs.

Check out our [GitHub](https://github.com/joepuzzo/informed)!

[![npmversion](https://img.shields.io/npm/v/informed.svg)](https://www.npmjs.com/package/informed)
[![Informed-Chat](https://img.shields.io/badge/slack-informed--chat-blue.svg)](https://spectrum.chat/informed)
[![Build Status](https://travis-ci.org/joepuzzo/informed.svg?branch=master)](https://travis-ci.org/joepuzzo/informed)
[![Coverage Status](https://coveralls.io/repos/github/joepuzzo/informed/badge.svg?branch=master)](https://coveralls.io/github/joepuzzo/informed?branch=master)

## Getting Started

##### Install with npm
```
npm install --save informed
```

---

#### Having Fun

Alright its time to have some fun! The code below is all you need to get
started. Go ahead and play around with the form below, check out the code
snippet, and then you can read about what the heck is going on.

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

<Form id="intro-form">
  <label htmlFor="intro-name">First name:</label>
  <Text field="name" id="intro-name" />
  <button type="submit">
    Submit
  </button>
</Form>
```

---

### Explanation

**Ok so what the Foo is going on?**

Its actually pretty simple!

`Informed` takes care of managing form state so you don't have to! Basically
it hooks up the native `onChange`, `onBlur`, and `onSubmit` functions and keeps track of
all sorts of stuff based on those changes.

<br/>
