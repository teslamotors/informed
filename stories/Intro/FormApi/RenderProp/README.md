You can also get access to `Informed`s form api via render a function as a child:

<!-- STORY -->

```jsx
<Form>
  {({ formApi }) => (
    <div>
      <Input name="name" label="First Name:" />
      <button
        type="button"
        onClick={() =>
          formApi.setValue(
            'name',
            Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER))
          )
        }>
        Random
      </button>
      <button type="submit">Submit</button>
    </div>
  )}
</Form>
```

<br />
