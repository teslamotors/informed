# Unnecessary Rendering

Sometimes your components will re-render when they don't need to. Below are some
examples where this can occur.

## InlineFunctions:

Below is the same example that is found in Validation Control accept for one
difference! The validation functions that are passed in were declared inline.
This will unfortunately result in a re-render of every text field every time the
parent field re-renders :(

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

<Form>
  {({ formApi }) => (
    <form onSubmit={formApi.submitForm} id="validate-form">
      <label htmlFor="validate-color">Color:</label>
      <small>Validate on blur</small>
      <Text
        field="color"
        id="validate-color"
        validateOnBlur
        validate={(value)=>'Field is not valid'} />
      <label htmlFor="validate-food">Food:</label>
      <small>Validate on change</small>
      <Text
        field="food"
        id="validate-food"
        validateOnChange
        validate={(value)=>'Field is not valid'} />
      <label htmlFor="validate-car">Car:</label>
      <small>Validate on blur and change</small>
      <Text
        field="car"
        id="validate-car"
        validateOnBlur
        validateOnChange
        validate={(value)=>'Field is not valid'} />
      <button type="submit">
        Submit
      </button>
    </form>
  )}
</Form>
```
