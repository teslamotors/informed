# Async Validation

Async validation can be achieved by passing an asyncValidation function to the input.
Below is an example form that has validation functions. The synchronous function defined
will return an error when the input is empty, and nothing otherwise. The second asynchronous
function defined will, after two seconds, resolve an error or nothing depending on what is typed.
We pass these validation functions to the username input and validation will **occur on blur by default**.

**Try clicking the submit button WITH AN EMPTY FIELD! and see what happens:**

<!-- STORY -->

What just happened? When you clicked on the submit button the synchronous
validation function was triggered. Because the field was empty ( if you left it empty )
it failed synchronous validation, and therefore did not run the async validation or
actually submit the form.

**Get rid of the synchronous error by typing "FooBar" in the username field, then
click the submit button again, WAIT TWO SECONDS, and see what happens:**

The form submitted!! Why? Because both our synchronous and asynchronous validation passed.
Lets make our asynchronous validation fail!

**Ok now type "billy" into the field, click on the submit button, and wait two more seconds.**

The form did NOT submit!! Why? Because asynchronous validation failed.

**Ok now type "reject" into the field, click on the submit button, and wait two more seconds.**

The form did not submit because the "apicall" to validate failed.

```jsx
import { Form, Input } from 'informed';

const validate = username =>
  !username || username.trim() === ''
    ? 'Username is a required field'
    : undefined;

const asyncValidate = username => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate username check
      if (['joe', 'tanner', 'billy', 'bob'].includes(username)) {
        return resolve('That username is taken');
      }
      // Simulate request faulure
      if (username === 'reject') {
        return reject(new Error('Unable to validate username.'));
      }
      return resolve();
    }, 2000);
  });
};

const ExampleForm = () => {
  return (
    <Form onSubmit={({ values }) => console.log(values)}>
      <Input
        name="username"
        label="Username"
        validate={validate}
        asyncValidate={asyncValidate}
      />
      <button type="submit">Submit</button>
      <Debug />
      <DebugField name="username" />
    </Form>
  );
};
```
