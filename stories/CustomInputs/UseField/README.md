# Custom Inputs

Sometimes the inputs `informed` provides are not good enough. So we decided to
help you out with that! Informed also gives you access to an useField Hook.

## Custom Text Input

Lets say you like `informed`'s text input but you want to show an error and turn
it red when there is an error. You could achieve this with the following code.

<!-- STORY -->

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, useField } from 'informed';

const CustomInput = props => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  // The field state
  const { value, error, showError } = fieldState;

  // The field control
  const { setValue, setTouched } = fieldApi;

  // Everything else
  const { label, id, ...rest } = userProps;

  return render(
    <>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        {...rest}
        id={id}
        ref={ref}
        value={!value && value !== 0 ? '' : value}
        onChange={e => {
          setValue(e.target.value, e);
        }}
        onBlur={e => {
          setTouched(true, e);
        }}
        style={showError ? { border: 'solid 1px red' } : null}
      />
      {showError ? <small style={{ color: 'red' }}>{error}</small> : null}
    </>
  );
};

const Example = () => (
  <Form>
    <ErrorText
      field="name"
      label="First name:"
      validateOn="change"
      required
      minLength={5}
    />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);
```
