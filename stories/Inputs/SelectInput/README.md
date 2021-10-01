# Select Input

<!-- STORY -->

```jsx
import { Form, Select, Option, Debug } from 'informed';

const SelectInput = () => (
  <Form>
    <Select name="status" label="Relationship status:">
      <Option value="" disabled>
        Select One...
      </Option>
      <Option value="single">Single</Option>
      <Option value="relationship">Relationship</Option>
      <Option value="complicated">Complicated</Option>
    </Select>
    <button type="submit">Submit</button>
    <Debug values />
  </Form>
);
```
