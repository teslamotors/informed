# Huge Array form

```jsx
import { Form, Text, ArrayField } from 'informed';

const friends = Array.from(Array(50)).map(e => {
  return { name: 'Joe', age: 26 };
});

const initialValues = {
  friends
};

const HugeArrayForm = () => {
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
              <ArrayField.Items>
                {({ remove, field, reset, initialValue, values, setValue }) => (
                  <label>
                    <h5>{field}</h5>
                    <Text
                      field={`${field}.name`}
                      initialValue={initialValue && initialValue.name}
                    />
                    <Text field={`${field}.age`} />
                    <Text
                        field={`${field}.name`}
                        initialValue={initialValue && initialValue.name}
                      />
                    <Text field={`${field}.age`} />
                    <Text field={`${field}.a`} />
                    <Text field={`${field}.b`} />
                    <Text field={`${field}.c`} />
                    <Text field={`${field}.d`} />
                    <Text field={`${field}.e`} />
                    <Text field={`${field}.f`} />
                    <Text field={`${field}.g`} />
                    <Text field={`${field}.h`} />
                    <Text field={`${field}.i`} />
                    <Text field={`${field}.j`} />
                    <Text field={`${field}.k`} />
                    <Text field={`${field}.l`} />
                    <Text field={`${field}.m`} />
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

<!-- STORY -->