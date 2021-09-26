# Huge Array form

```jsx
import { Form, Input, ArrayField, Relevant } from 'informed';

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
                {({ remove, name, reset, initialValue, values, setValue }) => (
                  <label>
                    <h5>{field}</h5>
                    <Text
                      name="name"
                      initialValue={initialValue && initialValue.name}
                    />
                    <Text name="age" />
                    <Text
                      name="name"
                      initialValue={initialValue && initialValue.name}
                    />
                    <Text name="age" />
                    <Text name="a" />
                    <Text name="b" />
                    <Text name="c" />
                    <Text name="d" />
                    <Text name="e" />
                    <Text name="f" />
                    <Input
                      name="g"
                      relevant={({ formApi }) => formApi.getValue(`${name}.f`)}
                    />
                    <Relevant
                      when={({ formApi }) => formApi.getValue(`${name}.f`)}>
                      <Input name="h" />
                      <Input name="i" />
                      <Input name="j" />
                      <Input name="k" />
                      <Input name="l" />
                      <Input name="m" />
                    </Relevant>
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
