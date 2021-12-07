# MultiSelect Input

<!-- STORY -->

```jsx
import { Form, Select, Option, Debug } from 'informed';

<Form>
  <Select
    name="colors"
    label="Colors:"
    multiple
    style={{ height: '100px', width: '200px' }}>
    <Option value="red">Red</Option>
    <Option value="green">Green</Option>
    <Option value="blue">Blue</Option>
    <Option value="yellow">Yellow</Option>
    <Option value="orange">Orange</Option>
    <Option value="purple">Purple</Option>
  </Select>
  <button type="submit">Submit</button>
  <Debug values />
</Form>;
```
