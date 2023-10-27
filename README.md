# Informed

[![Docs](https://badgen.net/badge/V4/Docs/purple)](https://teslamotors.github.io/informed)
[![npmversion](https://img.shields.io/npm/v/informed.svg)](https://www.npmjs.com/package/informed)
[![github](https://badgen.net/badge/gihub/main/green?icon=github)](https://github.com/teslamotors/informed)
[![Docs](https://badgen.net/badge/V3/Docs/red)](https://61af80ffc6bc460007bf9ec7--joepuzzo-informed.netlify.app/)

## Introduction

Say hello to the best React form library you have ever used! Informed is an extensive, simple, and efficient solution for creating basic to complex forms in React. Out of the box you get the ability to grab and manipulate values, validate fields, create custom inputs, multi-step forms, array fields, and much much more!

Oh and YES WE USE HOOKS!

## Getting Started

##### Install with npm

```
npm install --save informed
```

#### Live Examples / Docs

[![Docs](https://badgen.net/badge/V4/Docs/purple)](https://teslamotors.github.io/informed)
[![Docs](https://badgen.net/badge/V3/Docs/red)](https://61af80ffc6bc460007bf9ec7--joepuzzo-informed.netlify.app/)

### What Can it do ?

See for yourself.

By default it comes with native dom inputs that are controlled by informed.

```jsx
import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';

const onSubmit = ({ values }) => console.log(values);

const ExampleForm = () => (
  <Form onSubmit={onSubmit}>
    <Input name="name" label="Name" placeholder="Elon" />
    <Input name="age" type="number" label="Age" required="Age Required" />
    <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
    <Select name="car" label="Car" initialValue="ms">
      <option value="ms">Model S</option>
      <option value="m3">Model 3</option>
      <option value="mx">Model X</option>
      <option value="my">Model Y</option>
    </Select>
    <Checkbox name="married" label="Married?" />
    <Relevant when={({ formState }) => formState.values.married}>
      <Input name="spouse" label="Spouse" />
    </Relevant>
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);
```

## Feature List

`informed` was designed to support many important features

- Arrays: ability to render dynamic arrays of fields `[ 'a', 'b' ]` or `[ { name: 'Joe', age: 29 }, { name: 'Hope', age: 24 }]`
- Relevance: ability to render render fields conditionally depending on the state of other parts of the form
- JSPAN: ability to easily and intuitively manipulate form state
- Formatting: ability to perform display formatting, where the format shown to user can differ from the state of the values stored
- Validation: ability to perform both synchronous and asynchronous validation in a controlled manner
- Api: ability to manipulate the form state both inside and outside the context of the form
- State: ability to access field and form data
- Multistep: ability to create dynamic multistep forms
- Scope: ability to scope ( group ) fields
- Schema: ability to render forms based on pure JSON schema
- Dynaic: ability to hide and show fields ( render and unrender ) and either cleanup or maintain state of unmounted fields
- Debugging: ability to easily debug users state as well as internals of the library
- Nesting: ability to have highly nested value strucutre `state.values.friends[1].brother.parents.cars[0].model`

## Creating Your Own Fields

But what if you dont want the out of the box stuff??

No problem, see example below!

```jsx
import { useForm, useField, Relevant, FormState } from 'informed';

// Step 1. Build your form component ---------------------

const Form = ({ children, ...rest }) => {
  const { formController, render, userProps } = useForm(rest);

  return render(
    <form noValidate {...userProps} onSubmit={formController.submitForm}>
      {children}
    </form>
  );
};

// Step 2. Build your input components --------------------

const Input = props => {
  const { render, informed, userProps, ref } = useField({
    type: 'text',
    ...props
  });
  const { label, id, ...rest } = userProps;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} />
    </>
  );
};

const Checkbox = props => {
  const { render, informed, userProps, ref } = useField({
    type: 'checkbox',
    ...props
  });
  const { label, id, ...rest } = userProps;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} />
    </>
  );
};

const ErrorInput = props => {
  const { render, informed, userProps, fieldState, ref } = useField({
    type: 'text',
    ...props
  });
  const { label, id, ...rest } = userProps;
  const { showError } = fieldState;
  const style = showError ? { border: 'solid 1px red' } : null;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} style={style} />
      {showError && <small style={{ color: 'red' }}>{fieldState.error}</small>}
    </>
  );
};

const Select = props => {
  const { render, informed, userProps, ref } = useField({
    type: 'select',
    ...props
  });
  const { label, id, children, ...rest } = userProps;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} ref={ref} {...informed} {...rest}>
        {children}
      </select>
    </>
  );
};

// Step 3. Build your forms! ---------------------------

const onSubmit = ({ values }) => console.log(values);

const ExampleForm = () => (
  <Form onSubmit={onSubmit}>
    <Input name="name" label="Name" placeholder="Elon" />
    <ErrorInput name="age" type="number" label="Age" required="Age Required" />
    <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
    <Select name="car" label="Car" initialValue="ms">
      <option value="ms">Model S</option>
      <option value="m3">Model 3</option>
      <option value="mx">Model X</option>
      <option value="my">Model Y</option>
    </Select>
    <Checkbox name="married" label="Married?" />
    <Relevant when={({ formState }) => formState.values.married}>
      <Input name="spouse" label="Spouse" />
    </Relevant>
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);
```

---

## For Contributors

### Design

Informed took the following into consideration when being built:

- **Performance:** `informed` was designed to be able to handle very complex forms at scale
  - Ability to render a form with thousands of fields on screen
  - Ability to bulk update thousands of fields at a time
- **Readability** `informed` was designed to be able to write complex forms with very litle **intuitive** code
  - Reads naturlly like with pure JSX:

```jsx
<Form onSubmit={onSubmit}>
  <Input name="name" label="Name" placeholder="Elon" />
  <Input name="age" type="number" label="Age" required="Age Required" />
  <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
  <Checkbox name="married" label="Married?" />
  <Relevant when={({ formState }) => formState.values.married}>
    <Input name="spouse" label="Spouse" />
  </Relevant>
  <Debug />
</Form>
```

- **ZERO Dependency:** `informed` was designed to rely on no other library

  - exception of a peer dependency react... for now ;)

- **JSON Schema:** `informed` was designed to support rendering forms based on pure JSON

  - this is especially useful when form definitions are stored on the backend

- **Feature List:** `informed` was designed to support many important features
  - Arrays: ability to render dynamic arrays of fields `[ 'a', 'b' ]` or `[ { name: 'Joe', age: 29 }, { name: 'Hope', age: 24 }]`
  - Relevance: ability to render render fields conditionally depending on the state of other parts of the form
  - JSPAN: ability to easily and intuitively manipulate form state
  - Formatting: ability to perform display formatting, where the format shown to user can differ from the state of the values stored
  - Validation: ability to perform both synchronous and asynchronous validation in a controlled manner
  - Api: ability to manipulate the form state both inside and outside the context of the form
  - State: ability to access field and form data
  - Multistep: ability to create dynamic multistep forms
  - Scope: ability to scope ( group ) fields
  - Schema: ability to render forms based on pure JSON schema
  - Dynaic: ability to hide and show fields ( render and unrender ) and either cleanup or maintain state of unmounted fields
  - Debugging: ability to easily debug users state as well as internals of the library
  - Nesting: ability to have highly nested value strucutre `state.values.friends[1].brother.parents.cars[0].model`

---

### Terminology

- **JSPAN:** ( Java Script Path Access Notation ) much like how you access and write to objects and arrays in javascript you can use the string representation to address a place in an object.

```js
const path = 'state.values.friends[1].brother.name';
```

---

### Layout

This project cotains three important directories, `src`, `vitedocs`, and `__tests__`

**Note:** some things were left out as they are not super important or are going to be depricated or removed in future.

```bash
project_root
│
├── index.d.ts        # all of informeds types live here
│
├── src               # all of informeds source code lives here ( except types index.d.ts )
│   ├── components        # React Components
│   ├── hooks             # Hooks
│   ├── Context.js        # Internal Contexts used in this library
│   ├── debug.js          # Basically the https://github.com/visionmedia/debug library but shrunk down
│   ├── fieldMap.js       # Default field adapter, used when working with schema forms
│   ├── index.js          # all external exports ( everything exposed to users )
│   ├── ObjectMap.js      # internal data structure for manipulating the form state objects
│   ├── FormController.js # The brains behind the library, this controls basically everything :)
│   └── utils.js          # Any utilities used throughout this project
│
├── vitedocs          # All the informed docs build via vite ( instead of storybook which was old way )
│   ├── App.jsx           # basic react app with react-router
│   ├── Header            # top nav of the docs
│   ├── hooks             # helper hooks for docs
│   ├── Nav               # side nav of the docs
│   ├── Pages             # main level pages of the app
│   │   ├──ApiReference       # Self explanitory :)
│   │   ├──Examples           # Examples of all sorts of usecases
│   │   ├──GettingStarted     # Also Self explanitory :)
│   │   └──Playground.jsx     # Uses Sandpack to allow users to test any of the examples
│   │
│   ├── SideBySide.jsx    # helper component for showing code example and output side by side
│   ├── index.css         # documentation styles
│   ├── prism.css         # styles for code blocks
│   └── ...               # other stuff
│
└── __tests__           # extensive unit testing
    ├── components      # tests for informed components
    ├── hooks           # tests for informed hooks
    ├── ObjectMap.test  # tests for the internal data structure
    ├── Schema.test     # tests for usage of JSON schema rendered forms
    └── utils.test      # tests for interanal library utilites
```

---

### Key Components

#### `FormController`

FormController is the brains of informed, it holds the `state` object and is responsible for:

- Managing the form state
- Tracking all form fields via registration/deregistration
- Managing events. FormController impliments its own event hanlder ( a few lines of code at bottom of file )

#### `ObjectMap`

ObjectMap is the internal data structre that is responsible for managing the internal state object. Reads and writes all go through this data structure. Example:

```js
// State object
const state = { values: {} };

// Set the states values first friends brothers age to 30
ObjectMap.set(state.values, 'friends[0].brothers.age', 30);
```

#### `useField`

useField is the first class citizen of informed, its responsible for registering a field by name to the FormController.

#### Context

Thouh there is not explicitly a component called `Context` here the concept is KEY to understanding informed. Context alows us to register fields in a highly nested structure and allows us to do wild things such as scoping.

---

### Architecture Diagram

Below depicts the core to how this library works. Form controller is the master of all form elements and everyone else just subscribes to events that it triggers. The events can be caused by function calls from elsewhere. In the example below we depict what happens when a user types in an "H" in the name field

##### Code:

```jsx
<Form>
  <Input name="name" /> {/* --> useField("name") --> useFieldState("name") */}
  <Debug /> {/* --> useFormState() */}
</Form>
```

##### Diagram: ( when user types the letter "H" )

```
     +----------------+
     | FormController | < ──────────────────────────────────────────
     |   state {}     |                                             │
     +-------+--------+                                             │
             │                                                      │
             │ event("field", "name")                               │
             v                                                      │
    +-------------------+                                           │
    |    Event System   | ────────────────                          │
    +--------+----+-----+                 │                         │
             │                            │                         │
             │ event("field", "name")     │ event("field", "name")  │ setValue("H")
             │                            │                         │
             v                            v                         │
    +-------------------+       +------------------------+          │
    |   useFormState()  |       |  useFieldState("name") |          │
    +-------------------+       +------------------------+          │
             ^                            ^                         │
             │ uses                       │ uses                    │
             │                            │                         │
    +-------------------+       +------------------------+          │
    |      <Debug />    |       |    useField("name")    | ─────────
    +-------------------+       +------------------------+
                                          ^
                                          │ uses
                                          │
                                +------------------------+
                                | <Input name="name" />  |
                                +------------------------+
```

---

### Types ( Type Script )

I know, I know the types kinda suck. I personally dont use typescript so I have had to rely on other TS wizard devs to help maintain the types. When trying to type very complex objects such as `FormState` especially parts like `FormState.values` which can literally be an object that conatins anything there are lots of opinions on how to properly type it. Im activly seeking help here.

---

### Documentation

As stated earlier, docs now live in the vitedocs directory. Its called `vitedocs` because I migrated them from storybook to now use a custom singe page react app built with `vite`... pernounced "veet" by the way :)

#### What to expect

Most of the docs contain examples where each example has a directory.

For example, if you look at the `vitedocs/Pages/GettingStarted/CarColors` you will find the `CarColors.jsx` file.
This file contains the page that gets shown ( whatever info you want to show on that page ) and then the example itself.

Because we use vite, we can take advantage of the fact that vite can import both a react component normally, and also the raw text from that file! Therefore creating examples is as simple as this!

**Note** how we make use of the `SideBySide` component to render our code and example

```jsx
import Example from './Example';
import exampleCode from './Example.jsx?raw';

//... other stuff
<SideBySide
  leftHeader={<h3>Example: </h3>}
  rightHeader={<h3>Code:</h3>}
  left={<Example />}
  right={<Code links input1={exampleCode} />}
/>;
```

### TODO/Improvements

- re-write the internal implimentation of how schemas are rendered, that code is not my favorite
- re-write the way multistep forms work. Currently they step through each step when navigating to a step only initializing the values for that step when its rendered
- allow an evaluate function to be passed into a form field ( i.e useField ). Currently this is not possible because evaluate re computes props to be passed to the component using useField but it would be nice to not have to call the `useConditional` hook.
- move the rest of the schema docs over to the new docs ( I simply have not had the time to do this )
- Types ... I know, I know the types kinda suck. I personally dont use typescript so I have had to rely on other TS wizard devs to help maintain the types.
