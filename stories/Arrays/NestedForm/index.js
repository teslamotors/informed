import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';
import { Form, Text, ArrayField } from '../../../src';

const initialValues = {
  friends: [{
    name: 'Joe',
    age: '20',
  },{
    name: 'Jane',
    age: '20',
  }],
};

const NestedForm = () => (
  <div>
    <Form
      initialValues={initialValues}
    >
      {({ formApi, formState }) => {
        return (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, marginRight: '2rem' }}>
              <ArrayField field="friends">
                {({ add, addWithInitialValue }) => {
                  return (
                    <React.Fragment>

                      <button onClick={() => {
                        add();
                      }} type="button">Add</button>

                      <button onClick={() => {
                        addWithInitialValue({name: 'test'});
                      }}>Add with initialValue</button>

                      {/* <button onClick={() => {
                        formApi.setValue('friends[0].name', 'Test');
                      }} type="button">set friends[0].name to test</button> */}

                      <ArrayField.Items>
                        {({ remove, field, reset, initialValue, values, setValue }) => (
                          <label>
                            <h5>{field}</h5>
                            <Text field={`${field}.name`} initialValue={initialValue && initialValue.name}/>
                            <Text field={`${field}.age`}/>
                            <button type="button" onClick={reset}>Reset</button>
                            <button type="button" onClick={() => setValue('name', 'Elon')}>
                              Set Name to "Elon"
                            </button>
                            <button type="button" onClick={remove}>Remove</button>
                            <pre>
                              <code>
                                {JSON.stringify(values, null, 2)}
                              </code>
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
              <FormState />
            </div>
          </div>
        );
      }}

    </Form>
  </div>
);

export default withDocs(readme, NestedForm);
