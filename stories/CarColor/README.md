# Car Color

Go ahead and change the color of the Tesla!

<!-- STORY -->

```jsx
import { Form, Select, Debug } from 'informed';

const Car = () => {
  const { value } = useFieldState('color');

  return <div className={`car-color-${value}`}>{'...SVG...'}</div>;
};

const CarColor = () => (
  <Form autocomplete="off">
    <Select name="color" label="Color" initialValue="blue">
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </Select>
    <button type="submit">Submit</button>
    <Debug values />
    <br />
    <Car />
  </Form>
);
```
