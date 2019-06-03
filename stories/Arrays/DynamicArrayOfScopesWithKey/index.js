import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import FormState from '../../utils/FormState';
import Code from '../../utils/Code';

import { Form, Text, ScopeArrayField, Scope } from '../../../src';

const initialValues = {
  name: "test",
  friends: [{
    id: 1,
    name: "Joe",
    age: "20",
  },{
    id: 2,
    name: "Jane",
    age: "20",
  }],
}

const DynamicArrayOfScopes = () => (
  <div>
    <Form
      initialValues={initialValues}
    >
      {({ formApi, formState }) => {
        return (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, marginRight: '2rem' }}>
              <Text field="name"/>

              <ScopeArrayField field="friends">
                {({ add, fields }) => {
                  return (
                    <React.Fragment>
                      {fields.map(({key, field, remove}, index) => {
                        return (
                          <Scope key={key} scope={field}>
                            <h5>{field}</h5>
                            <Text field="id" disabled type="numeric" />
                            <Text field="name"/>
                            <Text field="age"/>
                            <button onClick={remove}>Remove</button>
                          </Scope>
                        )
                      })}

                      <button onClick={() => {
                        var newFriends = formState.values.friends || [];
                        var maxId = 0
                        newFriends.forEach((v) => {
                          if (v.id > maxId) {
                            maxId = v.id
                          }
                        })
                        add({id: maxId + 1})
                      }}>Add</button>

                      <button onClick={() => {
                        var newFriends = formState.values.friends || [];
                        var maxId = 0
                        newFriends.forEach((v) => {
                          if (v.id > maxId) {
                            maxId = v.id
                          }
                        })
                        add({id: maxId + 1, name: "test"})
                      }}>Add with preset</button>
                    </React.Fragment>
                  )

                }}
              </ScopeArrayField>

            </div>
            <div style={{ flex: 2, minWidth: '300px' }}>
              <FormState />
            </div>
          </div>
        )
      }}

    </Form>
  </div>
);

export default withDocs(readme, DynamicArrayOfScopes);
