# TLDR

[GitHub](https://github.com/joepuzzo/informed)

[![npmversion](https://img.shields.io/npm/v/informed.svg)](https://www.npmjs.com/package/informed)
[![Discord](https://img.shields.io/discord/676066734746370058)](https://discord.gg/zpF5wA)
[![Build Status](https://travis-ci.org/joepuzzo/informed.svg?branch=master)](https://travis-ci.org/joepuzzo/informed)
[![Coverage Status](https://coveralls.io/repos/github/joepuzzo/informed/badge.svg?branch=master)](https://coveralls.io/github/joepuzzo/informed?branch=master)
[![Minzipped-Size](https://badgen.net/bundlephobia/minzip/informed)](https://bundlephobia.com/result?p=informed)

##### Install

```
npm install --save informed
```

---

```jsx
import { useForm, useField, Relevant, FormState } from 'informed';

// Step 1. Build your form component ---------------------

const Form = ({ children, ...props }) => {
  const { formController, render, userProps } = useForm(props);

  return render(
    <form {...userProps} onSubmit={formController.submitForm}>
      {children}
    </form>
  );
};

// Step 2. Build your input components --------------------

const Input = ({ label, ...props }) => {
  const { render, informed } = useField({ fieldType: 'text', ...props });

  return render(
    <label>
      {label}
      <input {...informed} />
    </label>
  );
};

const Checkbox = ({ label, ...props }) => {
  const { render, informed } = useField({ fieldType: 'checkbox', ...props });

  return render(
    <label>
      {label}
      <input {...informed} />
    </label>
  );
};

const Select = ({ label, children, ...props }) => {
  const { render, informed } = useField({ fieldType: 'select', ...props });

  return render(
    <label>
      {label}
      <select {...informed}>{children}</select>
    </label>
  );
};

// Step 3. Build your forms! ---------------------------

const onSubmit = data => console.log(data);

const ExampleForm = () => (
  <Form onSubmit={onSubmit}>
    <Input field="name" label="Name" placeholder="Elon" />
    <Input field="age" type="number" label="Age" required="Age Required" />
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

---
