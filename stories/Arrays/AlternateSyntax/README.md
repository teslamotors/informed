# Dynamic Array of fields

Fields can also be associated with an dynamic array. Here is an example where you can add many siblings!

<!-- STORY -->

```jsx
import { Form, Text, ArrayField } from 'informed';

const DynamicArrays = () => {
  return (
    <div>
      <Form initialValues={{ siblings: ['foo', 'bar', 'baz'] }}>
        <h5>You:</h5>
        <label>
          Your Name: <Text field="name" />
        </label>
        <h5>Siblings:</h5>
        <ArrayField field="siblings">
          {({ add, reset }) => (
            <>
              <button type="button" onClick={add}>
                Add Sibling
              </button>
              <button type="button" onClick={reset}>
                Reset Siblings
              </button>
              <ArrayField.Items>
                {({ remove, field, index }) => (
                  <label>
                    Sibling {index}:<Text field={field} />
                    <button type="button" onClick={remove}>
                      Remove
                    </button>
                  </label>
                )}
              </ArrayField.Items>
            </>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
```
