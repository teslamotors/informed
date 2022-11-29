# Keep State If Relevant

Sometimes you need to keep the state of a field even when it gets unmounted ( no longer rendered on screen ). In the below example, when you toggle showing the fields the `name1` field will get removed from the form state but the name2 fields state will be kept. However if that field is irrelevant it will NOT be kept.

Note: Fill in both fields then click on the hide button and then show. Pay attention to how name2's state stays but name1's gets removed

Next: Click on the toggle input and note how name2's state gets removed as its irrelevant.

<!-- STORY -->

```jsx
import { Form, Input, Checkbox, Relevant, Debug } from 'informed';

const Example = () => {
  const [show, setShow] = useState(true);

  return (
    <Form>
      {show ? <Input name="name1" label="Name:" /> : null}
      <Checkbox name="show" label="Show" defaultValue={true} />
      <Relevant when={({ formState }) => formState.values.show}>
        {show ? <Input name="name2" label="Name:" keepStateIfRelevant /> : null}
      </Relevant>
      <br />
      <button type="button" onClick={toggle}>
        {show ? 'Hide' : 'Show'}
      </button>
      <Debug values />
    </Form>
  );
};
```
