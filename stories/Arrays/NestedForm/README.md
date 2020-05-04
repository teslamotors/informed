# Nested form



<!-- STORY -->

```jsx
import { Form, Text, ArrayField } from 'informed';

const initialValues = {
  friends: [{
    name: "Joe",
    age: "20",
  },{
    name: "Jane",
    age: "20",
  }],
}

const NestedForm = () => {

  return (
    <div>
      <Form initialValues={initialValues}>
        <ArrayField field="siblings">
          {({ add }) => (
            <>
              <button onClick={() => {
                add();
              }} type="button">Add</button>

              <button onClick={() => {
                addWithInitialValue({name: 'test'});
              }}>Add with initialValue</button>

              <button onClick={() => {
                formApi.setValue('friends[0].name', 'Test');
              }} type="button">set friends[0].name to test</button>

               <ArrayField.Items>
                  {({ remove, field, reset, initialValue }) => (
                    <label>
                      <h5>{field}</h5>
                      <Text field={`${field}.name`} initialValue={initialValue && initialValue.name}/>
                      <Text field={`${field}.age`}/>
                      <button type="button" onClick={reset}>Reset</button>
                      <button type="button" onClick={remove}>Remove</button>
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
