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

const DynamicArrayOfScopes = () => (
  <div>
    <Form
      initialValues={initialValues}
    >
      {({ formApi, formState }) => {
        return (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, marginRight: '2rem' }}>
              <ArrayField field="friends">
                {({ add, fields, addWithInitialValue }) => {
                  return (
                    <React.Fragment>

                      <button onClick={() => {
                        add();
                      }} type="button">Add</button>

                      <button onClick={() => {
                        addWithInitialValue({name: 'test'});
                      }}>Add with initialValue</button>

                      <button onClick={() => {
                        formApi.setValue('friends[0].name', 'Test');
                      }} type="button">set friends[0].name to test</button>

                      {fields.map(({key, field, remove, initialValue}) => {
                        return (
                          <label key={key}>
                            <h5>{field}</h5>
                            <Text field={`${field}.name`} initialValue={initialValue && initialValue.name}/>
                            <Text field={`${field}.age`}/>
                            <button onClick={remove}>Remove</button>
                          </label>
                        );
                      })}
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

export default withDocs(readme, DynamicArrayOfScopes);
