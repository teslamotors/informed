# Intro

Say hello to the best react form library you have ever used! Informed is an extensive, simple, and efficient solution for creating basic to complex forms in react. Out of the box you get the ability to grab and manipulate values, validate fields, create custom inputs, and much much more!!!

Oh and YES WE USE HOOKS!!

Check out our [GitHub](https://github.com/joepuzzo/informed)!

[![npmversion](https://img.shields.io/npm/v/informed.svg)](https://www.npmjs.com/package/informed)
[![Informed-Chat](https://img.shields.io/badge/slack-informed--chat-blue.svg)](https://spectrum.chat/informed)
[![Build Status](https://travis-ci.org/joepuzzo/informed.svg?branch=master)](https://travis-ci.org/joepuzzo/informed)
[![Coverage Status](https://coveralls.io/repos/github/joepuzzo/informed/badge.svg?branch=master)](https://coveralls.io/github/joepuzzo/informed?branch=master)
[![Minzipped-Size](https://badgen.net/bundlephobia/minzip/informed)](https://bundlephobia.com/result?p=informed)



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

**Hint:** type 2 or three characters and click submit and take a look at the state represented on the right.

<!-- STORY -->

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

---

### Explanation

**Ok so what the Foo is going on?**

Its actually pretty simple!

`Informed` takes care of managing form state so you don't have to! Basically
it hooks up the native `onChange`, `onBlur`, and `onSubmit` functions and keeps track of
all sorts of stuff based on those changes.

<br/>
