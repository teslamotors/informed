# Dynamic Array of fields

Fields can also be associated with an dynamic array. Here is an example where you can add many siblings!

<!-- STORY -->

```jsx
import React from 'react';

import { Form, Text, ArrayField } from 'informed';

const DynamicArrays = () => {

  return (
    <div>
      <Form>
        <ArrayField field="sibling">
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label htmlFor={i} key={key}>
                  Sibling {i}:
                  <Text field={field} id={i} />
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </label>
              ))}
            </>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
        <FormState />
      </Form>
    </div>
  );
};
```
