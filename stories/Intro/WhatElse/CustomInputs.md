# You can easily create your own input components!

Lets say you like `informed`'s text input but you want to show an error and turn
it red when there is an error. You could achieve this with the following code.

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, BasicText, asField } from 'informed';

const ErrorText = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState;
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
        style={fieldState.error ? { border: 'solid 1px red' } : null}
      />
      {fieldState.error ? (
        <small style={{ color: 'red' }}>{fieldState.error}</small>
      ) : null}
    </React.Fragment>
  );
});

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

<Form>
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

<!-- STORY -->

**Note: this is one of a few ways to create custom inputs. See the custom input section in the docs for more details!**
