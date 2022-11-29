# Keep

Sometimes you need to keep the state of a field even when it gets unmounted ( no longer rendered on screen ). In the below example we have a field that gets hidden when the hide button is clicked, when it gets unmounted its state would normally get removed, by passing `keep={{ value: true }}` we can control what state ( if any ) should be kept.

Note: Click on the "Submit" button. See how the state shows an error and the value.

Next: Click on the "Hide" button and note fields error state gets removed but NOT the value.

Next: Click on the "Show" button and note the fields value state comes back but NOT the error state.

<!-- STORY -->

```jsx
import { Form, Input, Checkbox, Relevant, Debug } from 'informed';

const Example = () => {
  const [show, setShow] = useState(true);

  return (
    <Form>
      {show ? (
        <Input
          name="name"
          label="Name:"
          defaultValue="Hello"
          minLength={10}
          keep={{ value: true }}
        />
      ) : null}
      <button type="button" onClick={toggle}>
        {show ? 'Hide' : 'Show'}
      </button>
      <button type="submit">Submit</button>
      <Debug values errors />
    </Form>
  );
};
```
