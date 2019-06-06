# Array field validation

Validating an array field is also possible but can be tricky!

<!-- STORY -->

```jsx
import { Form, Text, ArrayField } from 'informed';


const validate = ( values ) => {
  if( values.length < 3 ){
    return 'You must have at least three friends.';
  } 
}

const validateLength = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
}

const DynamicArrays = () => {

  return (
    <div>
      <Form >
        <ArrayField field="siblings" validate={validate}>
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label key={key}>
                  Sibling {i}:
                  <Text field={field} valudate={validateLength}/>
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </label>
              ))}
            </>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
```
