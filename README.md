# Informed

[![Docs](https://badgen.net/badge/V4/Docs/purple)](https://teslamotors.github.io/informed)
[![npmversion](https://img.shields.io/npm/v/informed.svg)](https://www.npmjs.com/package/informed)
[![github](https://badgen.net/badge/gihub/main/green?icon=github)](https://github.com/teslamotors/informed)
[![Docs](https://badgen.net/badge/V3/Docs/red)](https://61af80ffc6bc460007bf9ec7--joepuzzo-informed.netlify.app/)

<!-- [![Discord](https://img.shields.io/discord/676066734746370058)](https://discord.gg/zpF5wA) -->

<!-- [![Build Status](https://travis-ci.org/joepuzzo/informed.svg?branch=master)](https://travis-ci.org/joepuzzo/informed)
[![Coverage Status](https://coveralls.io/repos/github/joepuzzo/informed/badge.svg?branch=master)](https://coveralls.io/github/joepuzzo/informed?branch=master)
[![Minzipped-Size](https://badgen.net/bundlephobia/minzip/informed)](https://bundlephobia.com/result?p=informed) -->

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
