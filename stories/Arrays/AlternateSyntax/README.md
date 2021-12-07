# Flat Arrays

You can create flat arrays where the value is not an object.

<!-- STORY -->

```jsx
import { Form, Input, ArrayField } from 'informed';

const DynamicArrays = () => {
  return (
    <Form initialValues={{ siblings: ['foo', 'bar', 'baz'] }}>
      <h5>You:</h5>
      <Input name="name" label="Your Name:" />
      <h5>Siblings:</h5>
      <ArrayField name="siblings">
        {({ add }) => (
          <>
            <button type="button" onClick={add}>
              Add Sibling
            </button>
            <ArrayField.Items>
              {({ remove, name, index }) => (
                <>
                  <Input name={name} label={`Sibling ${index}:`} />
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </>
              )}
            </ArrayField.Items>
          </>
        )}
      </ArrayField>
      <button type="submit">Submit</button>
    </Form>
  );
};
```
