# Nested form

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

const FieldState = () => {
  const { values } = useArrayFieldItemState();
  return (
    <pre>
      <code>{JSON.stringify(values, null, 2)}</code>
    </pre>
  );
};

const NestedForm = () => {
  return (
    <div>
      <Form initialValues={initialValues}>
        <ArrayField field="siblings">
          {({ add, reset }) => (
            <>
              <button
                onClick={() => {
                  reset();
                }}
                type="button">
                Reset
              </button>
              <button
                onClick={() => {
                  add();
                }}
                type="button">
                Add
              </button>

              <button
                onClick={() => {
                  addWithInitialValue({ name: 'test' });
                }}>
                Add with initialValue
              </button>

              <button
                onClick={() => {
                  formApi.setValue('friends[0].name', 'Test');
                }}
                type="button">
                set friends[0].name to test
              </button>

              <ArrayField.Items>
                {({ remove, name, reset, values, setValue }) => (
                  <label>
                    <h5>{name}</h5>
                    <Input name="name" label="Name" required />
                    <Input name="age" label="Age" type="number" />
                    <button type="button" onClick={reset}>
                      Reset
                    </button>
                    <button type="button" onClick={remove}>
                      Remove
                    </button>
                    <button
                      type="button"
                      onClick={() => setValue('name', 'Elon')}>
                      Set Name to "Elon"
                    </button>
                    <FieldState />
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
