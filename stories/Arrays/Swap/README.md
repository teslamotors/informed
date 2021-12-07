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

const NestedForm = () => {
  return (
    <div>
      <Form initialValues={initialValues}>
        <ArrayField field="siblings">
          {({ add, reset, swap }) => (
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
                  formApi.setValue('friends[0].name', 'Test');
                }}
                type="button">
                set friends[0].name to test
              </button>

              <ArrayField.Items>
                {({ remove, field, reset, values, setValue }) => (
                  <label>
                    <h5>{field}</h5>
                    <Input field={`${field}.name`} />
                    <Input field={`${field}.age`} />
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
                    <button
                      type="button"
                      onClick={() => swap(index, index + 1)}>
                      Swap
                    </button>
                    <pre>
                      <code>{JSON.stringify(values, null, 2)}</code>
                    </pre>
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
