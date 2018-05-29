# Simple Validation

Simple validation can be achieved by passing a validation function to the input.
Below is an example form that has validation functions. The function defined
will return an error when the input has less than five characters, or there is
no value at all, and null otherwise. We pass this validation function to every
input and validation will **occur on submission**.

**Try clicking the submit button and see what happens:**

<!-- STORY -->

What just happened? When you clicked on the submit button all of the validation
functions were triggered for each field. Because every validation failed, the
form never actually called onSubmit. In other words, informed will prevent only
submit a valid form.

**Get rid of the errors by typing more than 5 characters in each field and
click the submit button again and see what happens:**

```jsx

const validate = (value)=> !value || value.length < 5 ? 'Field must be longer than five characters' : null;

<Form id="validate-form">
  <label htmlFor="validate-color">Color:</label>
  <Text
    field="color"
    id="validate-color"
    validate={validate} />
  <label htmlFor="validate-food">Food:</label>
  <Text
    field="food"
    id="validate-food"
    validate={validate} />
  <label htmlFor="validate-car">Car:</label>
  <Text
    field="car"
    id="validate-car"
    validate={validate} />
  <button type="submit">
    Submit
  </button>
</Form>
```
