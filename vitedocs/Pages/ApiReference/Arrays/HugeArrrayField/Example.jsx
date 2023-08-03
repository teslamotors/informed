import { Form, Button } from 'YourComponents';
import { ArrayField, useFieldState, Relevant, Debug, Input } from 'informed';

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

const Example = () => (
  <div>
    <Form
      initialValues={initialValues}
      onSubmit={({ values }) => console.log(values)}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <Button type="submit">Submit</Button>
          <ArrayField name="friends">
            {({ add, addWithInitialValue, reset }) => {
              return (
                <>
                  <Button
                    onClick={() => {
                      reset();
                    }}
                    type="Button">
                    Reset
                  </Button>
                  <Button
                    onClick={() => {
                      add();
                    }}
                    type="Button">
                    Add
                  </Button>

                  <Button
                    onClick={() => {
                      addWithInitialValue({ name: 'test' });
                    }}>
                    Add with initialValue
                  </Button>

                  <ArrayField.Items>
                    {({ remove, name, reset, initialValue, setValue }) => (
                      <label>
                        <h5>{name}</h5>
                        <FieldState name={name} />
                        <Input
                          name="name"
                          initialValue={initialValue && initialValue.name}
                          aria-label="name"
                        />
                        <Input name="age" aria-label="age" />
                        <Input name="a" aria-label="a" />
                        <Input name="b" aria-label="b" />
                        <Input name="c" aria-label="c" />
                        <Input name="d" aria-label="d" />
                        <Input name="e" aria-label="e" />
                        <Input name="f" aria-label="f" />
                        {/* Example using scope  */}
                        <Input
                          name="g"
                          relevanceWhen={scope => [`${scope}.f`]}
                          relevant={({ formApi, scope }) =>
                            formApi.getValue(`${scope}.f`)
                          }
                          aria-label="g"
                        />
                        {/* Example using default ( scoped ) */}
                        <Input
                          name="h"
                          relevanceWhen={['f']}
                          relevant={({ formApi }) =>
                            formApi.getValue(`${name}.f`)
                          }
                          aria-label="h"
                        />
                        <Relevant
                          when={({ formApi }) => formApi.getValue(`${name}.f`)}>
                          <Input name="i" aria-label="i" />
                          <Input name="j" aria-label="j" />
                          <Input name="k" aria-label="k" />
                          <Input name="l" aria-label="l" />
                          <Input name="m" aria-label="m" />
                        </Relevant>

                        <Button
                          type="Button"
                          onClick={() => {
                            reset();
                          }}>
                          Reset
                        </Button>
                        <Button
                          type="Button"
                          onClick={() => setValue('name', 'Elon')}>
                          Set Name to "Elon"
                        </Button>
                        <Button type="Button" onClick={remove}>
                          Remove
                        </Button>
                      </label>
                    )}
                  </ArrayField.Items>
                </>
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

export default Example;
