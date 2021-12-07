# Dynamic Array of fields

Fields can also be associated with an dynamic array. Here is an example where you can add many siblings!

<!-- STORY -->

```jsx
import { Form, Input, ArrayField } from 'informed';

const DynamicArrays = () => {
  return (
    <div>
      <Form initialValues={{ siblings: ['foo', 'bar', 'baz'] }}>
        <ArrayField name="siblings">
          {({ add, reset }) => (
            <>
              <button onClick={add} type="button">
                Add Sibling
              </button>
              <button onClick={reset} type="button">
                Reset Siblings
              </button>
              <ArrayField.Items>
                {({ remove, name }) => (
                  <>
                    <Input label="Name" name={name} />
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
    </div>
  );
};
```
