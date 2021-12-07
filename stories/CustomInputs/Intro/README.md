# Custom Inputs

Sometimes the inputs `informed` provides are not good enough. So we decided to
help you out with that! Informed also gives you access to a useField hook.

## Custom Text Input

Lets say you like `informed`'s text input but you want to show an error and turn
it red when there is an error. You could achieve this with the following code.

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, BasicText, useField } from 'informed';

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

export const ErrorTextField = React.memo(({ label, ...props }) => {
  const { render, informed, ref, fieldState } = useField({
    type: 'text',
    ...props
  });
  const { showError } = fieldState;
  return render(
    <label>
      {label}
      <input
        ref={ref}
        {...informed}
        style={showError ? { border: 'solid 1px red' } : null}
      />
      {showError ? (
        <small style={{ color: 'red' }}>{fieldState.error}</small>
      ) : null}
    </label>
  );
});

const Intro = () => (
  <div>
    <Form>
      <ErrorTextField
        field="name"
        label="First name:"
        validate={validate}
        validateOnChange
        validateOnBlur
      />
      <button type="submit">Submit</button>
      <Debug values errors />
    </Form>
  </div>
);
```

<!-- STORY -->

## I need an explanation!

Ok so what did we just do? We took advantage of two parts of `informed`.

1. The `asField` HOC that turns a Component into an InformedField.
2. The internal `BasicText` Component.

`asField` is a HOC that will turn your Component into an `informed` Field Component by
giving your component access to the fieldApi and fieldState, and wrapping it in some magic!
If you wanted to you could hook up all the functions yourself, but for convenience we
expose our internal input definitions for you!
