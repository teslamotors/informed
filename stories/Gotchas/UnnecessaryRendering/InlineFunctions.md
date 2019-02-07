# Unnecessary Rendering

Sometimes your components will re-render when they don't need to. Below are some
examples where this can occur.

## InlineFunctions:

Below is the same example that is found in Validation Control accept for one
difference! The validation functions that are passed in were declared inline.
This will unfortunately result in a re-render of every text field every time the
parent re-renders :(

The form on the left results in excess re-rendering while the form on the rights
fields only re-render when they need to. To visualize this, the fields turn red
every time the input re-renders.

**Hint:** click on the submit button a few times.

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

const validate = value => 'Field is not valid';

  /* ---------------- BAD!! ---------------- */}
  <Form>
    {({ formState }) => (
      <label htmlFor="gotcha-color-1">Color:</label>
      <small>Validate on blur</small>
      <Text
        field="color"
        id="gotcha-color-1"
        validateOnBlur
        debug
        validate={value => 'Field is not valid'}
      /> {/* BAD!! */}
      <label htmlFor="gotcha-food-1">Food:</label>
      <small>Validate on change</small>
      <Text
        field="food"
        id="gotcha-food-1"
        validateOnChange
        debug
        validate={value => 'Field is not valid'}
      />
      {/* BAD!! */}
      <label htmlFor="gotcha-car-1">Car:</label>
      <small>Validate on blur and change</small>
      <Text
        field="car"
        id="gotcha-car-1"
        validateOnBlur
        validateOnChange
        debug
        validate={value => 'Field is not valid'}
      /> {/* BAD!! */}
      <button type="submit">Submit</button>
    )}
  </Form>
  {/* ---------------- Better!! ---------------- */}
  <Form>
    {({ formState }) => (
      <label htmlFor="gotcha-color-2">Color:</label>
      <small>Validate on blur</small>
      <Text
        field="color"
        id="gotcha-color-2"
        validateOnBlur
        debug
        validate={validate}
      />
      {/* GOOD!! */}
      <label htmlFor="gotcha-food-2">Food:</label>
      <small>Validate on change</small>
      <Text
        field="food"
        id="gotcha-food-2"
        validateOnChange
        debug
        validate={validate}
      /> {/* GOOD!! */}
      <label htmlFor="gotcha-car-2">Car:</label>
      <small>Validate on blur and change</small>
      <Text
        field="car"
        id="gotcha-car-2"
        validateOnBlur
        validateOnChange
        debug
        validate={validate}
      />
      {/* GOOD!! */}
      <button type="submit">Submit</button>
    )}
  </Form>
  {/* ---------------- Best!! ---------------- */}
  <Form>
    <label htmlFor="gotcha-color-2">Color:</label>
    <small>Validate on blur</small>
    <Text
      field="color"
      id="gotcha-color-2"
      validateOnBlur
      debug
      validate={validate}
      autoComplete="off"
    />
    <label htmlFor="gotcha-food-2">Food:</label>
    <small>Validate on change</small>
    <Text
      field="food"
      id="gotcha-food-2"
      validateOnChange
      debug
      validate={validate}
      autoComplete="off"
    />
    <label htmlFor="gotcha-car-2">Car:</label>
    <small>Validate on blur and change</small>
    <Text
      field="car"
      id="gotcha-car-2"
      validateOnBlur
      validateOnChange
      debug
      validate={validate}
      autoComplete="off"
    />
    <button type="submit">Submit</button>
  </Form>
 

```
