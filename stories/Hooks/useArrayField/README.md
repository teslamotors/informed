# Use Array Field

The `useArrayField` hook will allow you to create field arrays.

<!-- STORY -->

```jsx
import { Form, Input, useArrayField } from 'informed';

const Siblings = () => {
  const { add, fields } = useArrayField({ field: 'siblings' });

  return (
    <React.Fragment>
      <button onClick={add} type="button">
        Add Sibling
      </button>
      {fields.map(({ field, key, remove }, i) => (
        <label key={key}>
          Sibling {i}:<Input field={field} />
          <button type="button" onClick={remove}>
            Remove
          </button>
        </label>
      ))}
    </React.Fragment>
  );
};

const UseArrayFieldExample = () => (
  <div>
    <Form initialValues={{ siblings: ['foo', 'bar', 'baz'] }}>
      <Siblings />
      <button type="submit">Submit</button>
    </Form>
  </div>
);
```
