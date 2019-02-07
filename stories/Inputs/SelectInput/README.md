# Select Input

<!-- STORY -->

```jsx
import { Form, Select, Option } from 'informed';

<Form>
  <label>
    Relationship status:
    <Select field="status">
      <Option value="" disabled>
        Select One...
      </Option>
      <Option value="single">Single</Option>
      <Option value="relationship">Relationship</Option>
      <Option value="complicated">Complicated</Option>
    </Select>
  </label>
  <button type="submit">Submit</button>
</Form>;
```
