import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';
import { Form, Input, ArrayField, useFieldState, Relevant } from '../../../src';

const friends = Array.from(Array(66)).map(e => {
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
      onSubmit={values => console.log(values)}>
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
                    {({
                      remove,
                      name,
                      reset,
                      initialValue,
                      values,
                      setValue
                    }) => (
                      <label>
                        <h5>{name}</h5>
                        <FieldState name={name} />
                        <Input
                          name={`${name}.name`}
                          initialValue={initialValue && initialValue.name}
                        />
                        <Input name={`${name}.age`} />
                        <Input name={`${name}.a`} />
                        <Input name={`${name}.b`} />
                        <Input name={`${name}.c`} />
                        <Input name={`${name}.d`} />
                        <Input name={`${name}.e`} />
                        <Input name={`${name}.f`} />
                        <Input
                          name={`${name}.g`}
                          relevant={(state, api) => api.getValue(`${name}.f`)}
                        />
                        <Relevant
                          when={(state, api) => api.getValue(`${name}.f`)}>
                          <Input name={`${name}.h`} />
                          <Input name={`${name}.i`} />
                          <Input name={`${name}.j`} />
                          <Input name={`${name}.k`} />
                          <Input name={`${name}.l`} />
                          <Input name={`${name}.m`} />
                        </Relevant>

                        <button
                          type="button"
                          onClick={() => {
                            console.log('HERE');
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
        <div style={{ flex: 2, minWidth: '300px' }}>
          <FormState />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, NestedForm);
