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

const ErrorText = props => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, ...rest } = userProps;
  return render(
    <React.Fragment>
      <input
        {...rest}
        ref={ref}
        value={!value && value !== 0 ? '' : value}
        onChange={e => {
          setValue(e.target.value);
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={e => {
          setTouched(true);
          if (onBlur) {
            onBlur(e);
          }
        }}
        style={fieldState.error ? { border: 'solid 1px red' } : null}
      />
      {fieldState.error ? (
        <small style={{ color: 'red' }}>{fieldState.error}</small>
      ) : null}
    </React.Fragment>
  );
};

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

<Form id="custom-form">
  <label>
    First name:
    <ErrorText field="name" validateOnChange validateOnBlur />
  </label>
  <button type="submit">Submit</button>
</Form>;
```
