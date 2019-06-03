# Dynamic Array of Scopes

Sometimes you need to render an array of scopes

<!-- STORY -->

```jsx
import { Form, Text, ScopeArrayField, Scope } from 'informed';

const initialValues = {
  name: "test",
  friends: [{
    name: "Joe",
    age: "20",
  },{
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
                            <Text field="name"/>
                            <Text field="age"/>
                            <button onClick={remove}>Remove</button>
                          </Scope>
                        )
                      })}

                      <button onClick={() => {
                        add()
                      }}>Add</button>

                      <button onClick={() => {
                        add({name: "test"})
                      }}>Add with preset</button>

                      <button onClick={() => {
                        formApi.setValue("friends[0].name", "Test")
                        }}>set friends[0].name to test</button>
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
```
