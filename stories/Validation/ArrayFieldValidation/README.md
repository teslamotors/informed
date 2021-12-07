# Array field validation

Validating an array field is also possible but can be tricky! Below is an example of
a dynamic array form. You will find two validation functions. The first is a validate
function that executes at the field level, the second is a validation funciton that gets
executed on the whole array.

Why is it tricky?? Because both the array level and field level are fighting to set
`errors.siblings`. The field level validation wants to set `errors.siblings[i]` to a field
level error, where the array level validation wants to set `errors.siblings` to an error string.

Play with the form below, clicking submit will trigger validation.

<!-- STORY -->

```jsx
import { Form, Input, ArrayField } from 'informed';

const validate = (values, length) => {
  if (length < 3) {
    return 'You must have at least three friends.';
  }
};

const validateLength = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

const DynamicArrays = () => {
  return (
    <div>
      <Form>
        <ArrayField field="siblings" validate={validate}>
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label key={key}>
                  Sibling {i}:<Input field={field} valudate={validateLength} />
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
