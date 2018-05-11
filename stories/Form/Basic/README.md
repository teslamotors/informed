# Basic Form

<!-- STORY -->

```jsx
<Form>
  {({ formApi }) => (
    <form onSubmit={formApi.submitForm} id="basic-form">
      <label htmlFor="basic-name">First name:</label>
      <Text field="name" id="basic-name" />
      <button type="submit">
        Submit
      </button>
    </form>
  )}
</Form>
```
