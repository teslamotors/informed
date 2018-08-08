# Validation Control

By default fields will only validate when the submit button is clicked. To get
more granular validation ( onBlur && onChange ), simply pass in validateOnChange
or validateOnBlur or even both!

<!-- STORY -->

```jsx
const validate = value => {
  return !value || value.length < 5 ? 'Field must be longer than five characters' : null;
}

<Form id="validate-control-form">
  <label htmlFor="validate-color">Color:</label>
  <small>Validate on blur</small>
  <Text
    field="color"
    id="validate-color"
    validateOnBlur
    validate={validate} />
  <label htmlFor="validate-food">Food:</label>
  <small>Validate on change</small>
  <Text
    field="food"
    id="validate-food"
    validateOnChange
    validate={validate} />
  <label htmlFor="validate-car">Car:</label>
  <small>Validate on blur and change</small>
  <Text
    field="car"
    id="validate-car"
    validateOnBlur
    validateOnChange
    validate={validate} />
  <button type="submit">
    Submit
  </button>
</Form>
```
