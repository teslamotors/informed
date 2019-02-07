# MultiSelect Input

<!-- STORY -->

```jsx
import { Form, Select, Option } from 'informed';

<Form id="text-form">
 <label>
    Colors:
    <Select
      field="colors"
      id="select-colors"
      multiple
      style={{ height: '100px', width: '200px' }}>
      <Option value="red">Red</Option>
      <Option value="green">Green</Option>
      <Option value="blue">Blue</Option>
      <Option value="yellow">Yellow</Option>
      <Option value="orange">Orange</Option>
      <Option value="purple">Purple</Option>
    </Select>
  </label>
  <button type="submit">Submit</button>
</Form>;
```
