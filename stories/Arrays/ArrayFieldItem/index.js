import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import {
  Form,
  Input,
  ArrayField,
  Debug,
  useArrayFieldItemState
} from '../../../src';

const initialValues = {
  friends: [
    {
      name: 'Joe',
      age: 27
    },
    {
      name: 'Jane',
      age: 22
    }
  ]
};

// const friends = Array.from(Array(50)).map(e => {
//   return { name: 'Joe', age: 1 };
// });

// const initialValues = {
//   friends
// };

const FieldState = () => {
  const state = useArrayFieldItemState();
  return (
    <pre>
      <code>{JSON.stringify(state, null, 2)}</code>
    </pre>
  );
};

const NestedForm = () => (
  <div>
    <Form initialValues={initialValues}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
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

                  {/* <button
                        onClick={() => {
                          formApi.setValue('friends[0].name', 'Test');
                        }}
                        type="button">
                        set friends[0].name to test
                      </button> */}

                  {/* <button
                        onClick={() => {
                          formApi.setInitialValue('friends', [
                            {
                              name: 'Boo',
                              age: '30'
                            },
                            {
                              name: 'Bar',
                              age: '50'
                            }
                          ]);
                        }}
                        type="button">
                        Set new initial values
                      </button> */}

                  <ArrayField.Items>
                    {({ remove, name, reset, resetField, setValue }) => (
                      <label>
                        <h5>{name}</h5>
                        <Input name="name" label="Name" required />
                        <Input name="age" label="Age" type="number" />
                        {/* <Input name={`${field}.a`} />
                            <Input name={`${field}.b`} />
                            <Input name={`${field}.c`} />
                            <Input name={`${field}.d`} />
                            <Input name={`${field}.e`} />
                            <Input name={`${field}.f`} />
                            <Input name={`${field}.g`} />
                            <Input name={`${field}.h`} />
                            <Input name={`${field}.i`} />
                            <Input name={`${field}.j`} />
                            <Input name={`${field}.k`} />
                            <Input name={`${field}.l`} />
                            <Input name={`${field}.m`} /> */}

                        <button type="button" onClick={reset}>
                          Reset
                        </button>
                        <button
                          type="button"
                          onClick={() => setValue('name', 'Elon')}>
                          Set Name to "Elon"
                        </button>
                        <button
                          type="button"
                          onClick={() => resetField('name')}>
                          Reset Name
                        </button>
                        <button type="button" onClick={remove}>
                          Remove
                        </button>
                        <FieldState />
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

export default withDocs(readme, NestedForm);
