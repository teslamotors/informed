## So what if i do want to hook it all up myself?

**Dont Fret!** Check out the example below:

<!-- STORY -->

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, asField } from 'informed';

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

const ErrorText = asField(({ fieldState, fieldApi, ...props }) => {
  const { value, error, showError } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  return (
    <React.Fragment>
      <input
        {...rest}
        ref={forwardedRef}
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
        style={showError ? { border: 'solid 1px red' } : null}
      />
      {showError ? (
        <small style={{ color: 'red' }}>{fieldState.error}</small>
      ) : null}
    </React.Fragment>
  );
});

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
