# Custom Inputs

Sometimes the inputs `informed` provides are not good enough. So we decided to
help you out with that! Informed also gives you access to an asField HOC
( High Order Component ). We also expose the internal input fields such that you
can simply add on to them without writing all of the code again. You will see this
in one of the following examples.

---

## Custom Text Input

Lets say you like `informed`'s text input but you want to show an error and turn
it red when there is an error. You could achieve this with the following code.

```jsx
import { Form, BasicText, asField } from 'informed';

const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : null;
};

const ErrorText = asField(({ fieldState, ...props }) => (
  <React.Fragment>
    <BasicText
      fieldState={fieldState} {...props}
      style={ fieldState.error ? { border: 'solid 1px red' } : null }/>
    { fieldState.error ? <small style={{color: 'red'}}>{fieldState.error}</small> : null }
  </React.Fragment>
));

<Form id="custom-form-1">
  <label htmlFor="custom-1-name">First name:</label>
  <ErrorText field="name" id="custom-1-name" validate={validate} validateOnChange />
  <button type="submit">
    Submit
  </button>
</Form>
```

<!-- STORY -->
