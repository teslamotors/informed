# Async Validation Control

Additionally you can control when async validation occurs.

<!-- STORY -->

```jsx
import React, { useState } from 'react';
import { Form, Text } from 'informed';

const validate = username =>
  !username || username.trim() === ''
    ? 'Username is a required field'
    : undefined;

const ExampleForm = () => {
  const apiRef = useRef();

  const [initialValues, setInitialValues] = useState({ username: 'Jeff' });

  useEffect(
    () => {
      apiRef.current.reset();
    },
    [initialValues]
  );

  const asyncValidate = username =>
    new Promise((resolve, reject) => {
      apiRef.current.validating();
      setTimeout(() => {
        // Simulate username check
        if (['joe', 'tanner', 'billy', 'bob'].includes(username)) {
          apiRef.current.validated('username', 'That username is taken');
          return resolve();
        }
        // Simulate request faulure
        if (username === 'reject') {
          apiRef.current.validated('username', 'Unable to validate username.');
          return reject();
        }
        // Sumulate username success check
        apiRef.current.validated('username');
        return resolve();
      }, 2000);
    });

  return (
    <Form
      apiRef={apiRef}
      initialValues={initialValues}
      onSubmit={({ values }) => console.log(values)}>
      <Text
        field="username"
        label="Username"
        validateOnMount
        asyncValidateOnMount
        validateOnBlur
        asyncValidateOnBlur
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <button type="submit">Submit</button>
      <button
        type="button"
        onClick={() => {
          setInitialValues({ username: 'billy' });
        }}>
        Change Initial
      </button>
    </Form>
  );
};
```

## On Blur

Hey this is cool but i want to validate on blur!

**Well Turns out.. you can!! wooooo!**

```jsx
//...

<Form id="async-form">
  <label htmlFor="async-username">Username:</label>
  <Text
    field="username"
    id="async-username"
    validate={validate}
    asyncValidate={asyncValidate}
    asyncValidateOnBlur
  />
  <button type="submit">Submit</button>
</Form>
```
