# Dynamic Array of fields

Fields can also be associated with an dynamic array. Here is an example where you can add many siblings!

<!-- STORY -->

```jsx
import { Form, Text, ArrayField } from 'informed';

const DynamicArrays = () => {

  return (
    <div>
      <Form>
        <ArrayField field="siblings">
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label key={key}>
                  Sibling {i}:
                  <Text field={field} />
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </label>
              ))}
            </>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
```
