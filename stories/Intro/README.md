# Intro

Say hello to the best react form library you have ever used! Inform is an extensive, simple, and efficient solution for creating basic to complex forms in react. Out of the box you get the ability to grab and manipulate values, validate fields, and create custom inputs.

## Getting Started

##### Install with npm
```
npm install --save informed
```

---

<!-- STORY -->

```jsx
<Form>
  {({ formApi }) => (
    <form onSubmit={formApi.submitForm} id="intro-form">
      <label htmlFor="intro-name">First name:</label>
      <Text field="name" id="intro-name" />
      <button type="submit">
        Submit
      </button>
    </form>
  )}
</Form>
```
