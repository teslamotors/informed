# Huge Array form

```jsx
import {
  Form,
  Input,
  ArrayField,
  useFieldState,
  Relevant,
  Debug
} from 'informed';

const friends = Array.from(Array(69)).map(e => {
  return { name: 'Joe', age: 26, f: 'foo' };
});

const initialValues = {
  friends
};

const FieldState = ({ name }) => {
  const nameState = useFieldState(name);
  return (
    <>
      <h5>Component using nameState: {name}</h5>
      Render: {Math.random()}
      <pre>
        <code>{JSON.stringify(nameState, null, 2)}</code>
      </pre>
    </>
  );
};

const NestedForm = () => (
  <div>
    <Form
      initialValues={initialValues}
      onSubmit={({ values }) => console.log(values)}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <button type="submit">Submit</button>
          <ArrayField name="friends">
            {({ add, addWithInitialValue, reset }) => {
              return (
                <React.Fragment>
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

                  <ArrayField.Items>
                    {({ remove, name, reset, initialValue, setValue }) => (
                      <label>
                        <h5>{name}</h5>
                        <FieldState name={name} />
                        <Input
                          name="name"
                          initialValue={initialValue && initialValue.name}
                        />
                        <Input name="age" />
                        <Input name="a" />
                        <Input name="b" />
                        <Input name="c" />
                        <Input name="d" />
                        <Input name="e" />
                        <Input name="f" />
                        {/* Example using scope  */}
                        <Input
                          name="g"
                          relevanceWhen={scope => [`${scope}.f`]}
                          relevant={({ formApi, scope }) =>
                            formApi.getValue(`${scope}.f`)
                          }
                        />
                        {/* Example using default ( scoped ) */}
                        <Input
                          name="h"
                          relevanceWhen={['f']}
                          relevant={({ formApi }) =>
                            formApi.getValue(`${name}.f`)
                          }
                        />
                        <Relevant
                          when={({ formApi }) => formApi.getValue(`${name}.f`)}>
                          <Input name="i" />
                          <Input name="j" />
                          <Input name="k" />
                          <Input name="l" />
                          <Input name="m" />
                        </Relevant>

                        <button
                          type="button"
                          onClick={() => {
                            reset();
                          }}>
                          Reset
                        </button>
                        <button
                          type="button"
                          onClick={() => setValue('name', 'Elon')}>
                          Set Name to "Elon"
                        </button>
                        <button type="button" onClick={remove}>
                          Remove
                        </button>
                      </label>
                    )}
                  </ArrayField.Items>
                </React.Fragment>
              );
            }}
          </ArrayField>
        </div>
        <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
          <Debug />
        </div>
      </div>
    </Form>
  </div>
);
```

<!-- STORY -->
