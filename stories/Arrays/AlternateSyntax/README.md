# Dynamic Array of fields

Fields can also be associated with a dynamic array. Here is an example where you can add many siblings!

<!-- STORY -->

```jsx
import { Form, Text, ArrayField } from 'informed';

const DynamicArrays = () => {
  return (
    <Form initialValues={{ siblings: ['foo', 'bar', 'baz'] }}>
      <h5>You:</h5>
      <Input name="name" label="Your Name:" />
      <h5>Siblings:</h5>
      <ArrayField name="siblings">
        {({ add, reset }) => (
          <>
            <button type="button" onClick={add}>
              Add Sibling
            </button>
            <button onClick={reset} type="button">
              Reset Siblings
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
