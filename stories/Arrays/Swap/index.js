import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Input, ArrayField } from '../../../src';

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

// const friends = Array.from(Array(50)).map(e => {
//   return { name: 'Joe', age: 1 };
// });

// const initialValues = {
//   friends
// };

const NestedForm = () => (
  <div>
    <Form initialValues={initialValues}>
      {({ formApi, formState }) => {
        return (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, marginRight: '2rem' }}>
              <ArrayField field="friends">
                {({ add, reset, swap }) => {
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

                      <ArrayField.Items>
                        {({
                          remove,
                          field,
                          reset,
                          values,
                          setValue,
                          index
                        }) => (
                          <label>
                            <h5>{field}</h5>
                            <Input field={`${field}.name`} />
                            <Input field={`${field}.age`} />
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
                              onClick={() => swap(index, index + 1)}>
                              Swap
                            </button>
                            <button type="button" onClick={remove}>
                              Remove
                            </button>
                            <pre>
                              <code>{JSON.stringify(values, null, 2)}</code>
                            </pre>
                          </label>
                        )}
                      </ArrayField.Items>
                    </React.Fragment>
                  );
                }}
              </ArrayField>
            </div>
            <div style={{ flex: 2, minWidth: '300px' }}>
              <Debug />
            </div>
          </div>
        );
      }}
    </Form>
  </div>
);

export default withDocs(readme, NestedForm);
