# Validation Control

<!-- STORY -->

```jsx
<Form>
  {({ formApi }) => (
    <form onSubmit={formApi.submitForm} id="validate-form">
      <label htmlFor="validate-color">Color:</label>
      <small>Validate on blur</small>
      <Text
        field="color"
        id="validate-name"
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
