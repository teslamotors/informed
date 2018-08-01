## So what if i do want to hook it all up myself?

**Dont Fret!** Check out the example below:

<!-- STORY -->

```jsx
import { Form, BasicText, asField } from 'informed';

const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : null;
};

const ErrorText = asField(({ fieldState, fieldApi, ...props }) => {
  const {
    value
  } = fieldState;
  const {
    setValue,
    setTouched
  } = fieldApi;
  const {
    onChange,
    onBlur,
    initialValue,
    forwardedRef,
    ...rest
  } = props
  return (
    <React.Fragment>
      <input
        {...rest}
        ref={forwardedRef}
        value={!value && value !== 0 ? '' : value}
        onChange={e => {
          setValue(e.target.value)
          if (onChange) {
            onChange(e)
          }
        }}
        onBlur={e => {
          setTouched()
          if (onBlur) {
            onBlur(e)
          }
        }}
        style={ fieldState.error ? { border: 'solid 1px red' } : null }
      />
      { fieldState.error ? <small style={{color: 'red'}}>{fieldState.error}</small> : null }
    </React.Fragment>
  );
});

<Form id="custom-form">
  <label htmlFor="custom-name">First name:</label>
  <ErrorText field="name" id="custom-name" validate={validate} validateOnChange validateOnBlur />
  <button type="submit">
    Submit
  </button>
</Form>
```
