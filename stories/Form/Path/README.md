# Path Syntax

Every input in `informed` needs an associated field name. In its simplest form, field names are just strings. However, sometimes you may have some complex forms that require special ways of organizing your fields, this is where the special syntax comes in.

Fields can be simple strings, strings that contain ".", and strings that contain "[ ]", much like how you access and write to objects and arrays in javascript. Below are some examples of field names and what they resolve to in the forms values object. This syntax is commonly referred to as `Java Script Property Access Notation` or JSPAN.

| Field                 | Resolution                 |
| --------------------- | -------------------------- |
| `"username"`          | `values.username`          |
| `"friends[0]"`        | `values.friends[0]`        |
| `"siblings.1"`        | `values.siblings[1]`       |
| `"parents[0].name"`   | `values.parents[0].name`   |
| `"foo.bar[0].baz[1]"` | `values.foo.bar[0].baz[1]` |

<!-- STORY -->

```jsx
import { Form, Input, Debug } from 'informed';

const Example = () => (
  <Form>
    <Input name="username" label="Username:" />
    <Input name="friends[0]" label="Friend[0]:" />
    <Input name="siblings.1" label="Siblings.1:" />
    <Input name="parents[0].name" label="parents[0].name" />
    <Input name="foo.bar[0].baz[1]" label="foo.bar[0].baz[1]" />
    <button type="submit">submit</button>
    <Debug values />
  </Form>
);
```
