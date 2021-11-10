# Schema Based

<!-- STORY -->

```jsx
import { Form, SchemaFields, Debug } from 'informed';
import Ajv from 'ajv';

const Schema = () => (
  <Form
    schema={schema}
    ajv={Ajv}
    onSubmit={values => window.alert(JSON.stringify(values, null, 2))}>
    <SchemaFields />
    <button type="submit">Submit</button>
    <Debug errors values />
  </Form>
);
```
