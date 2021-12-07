## Having Fun

Alright its time to have some fun! The code below is all you need to get
started. Go ahead and play around with the form below, check out the code
snippet, and then you can read about what the heck is going on.

**Hint:** type 2 or three characters and click submit and take a look at the state represented on the right.

<!-- STORY -->

```jsx
import { Form, Input } from 'informed';

const validate = value => {
  if (!value || value.length < 5)
    return 'Field must be at least five characters';
};

const submit = ({ values }) =>
  window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);

<Form onSubmit={submit}>
  <Input name="name" label="First name" validate={validate} />
  <button type="submit">Submit</button>
</Form>;
```

### Explanation

**Ok so what the Foo is going on?**

Its actually pretty simple!

Informed takes care of managing form state so you don't have to! Basically
it hooks up the native `onChange`, `onBlur`, and `onSubmit` functions and keeps track of
all sorts of stuff based on those changes. This example uses the `<Text>` and `<Form>` components
from informed, but under the hood they are literally just `<input>` and `<form>` dom elements.
So you can pass anything down to them as usual! **For example:** `<Input field="name" style={{color: 'green'}}>`

<br/>
