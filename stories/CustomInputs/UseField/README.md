## What if I want more control!? 

**I got you!** Check out the example below:

Here we use the hook `useField` instead of the HOC `asField`. This allows us to do things like,
set a default validation function!

<!-- STORY -->

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, BasicText, asField } from 'informed';

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

const ErrorText = (props) => {

  const { fieldState, fieldApi, render, ref, userProps } = useField( { ...props, validate });
  // ^^^^^^^^ THIS IS THE BIG DIFFERENCE 

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

<Form id="custom-form">
  <label>
    First name:
    <ErrorText
      field="name"
      validate={validate}
      validateOnChange
      validateOnBlur
    />
  </label>
  <button type="submit">Submit</button>
</Form>;
```
