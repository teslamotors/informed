# Array Field

Sometimes you need highly dynamic forms where the data is represented by an array.

<!-- STORY -->

```jsx
import { Form, Input, ArrayField } from 'informed';

const initialValues = {
  friends: [
    {
      name: 'Joe',
      age: '20'
    },
    {
      name: 'Jane',
      age: '20'
    }
  ]
};

const NestedForm = () => {
  return (
    <div>
      <Form initialValues={initialValues}>
        <ArrayField name="friends">
          {({ add }) => {
            return (
              <>
                <button
                  onClick={() => {
                    add();
                  }}
                  type="button">
                  Add
                </button>
                <ArrayField.Items>
                  {({ remove, name }) => (
                    <label>
                      <h5>{name}</h5>
                      <Input name="name" label="Name" required />
                      <Input name="age" label="Age" type="number" />
                      <button type="button" onClick={remove}>
                        Remove
                      </button>
                    </label>
                  )}
                </ArrayField.Items>
              </>
            );
          }}
        </ArrayField>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
```
