# Dynamic Fields

Sometimes you need to conditionally render fields. Below is a simple
example the shows or hides a spouse depending on the radio selected!

<!-- STORY -->

```jsx
import { Form, Input, RadioGroup, Radio, Relevant } from 'informed';

<Form>
  <Input name="name" label="First name:" />
  <label>Are you married?</label>
  <RadioGroup field="married">
    <label>
      Yes <Radio value="yes" />
    </label>
    <label>
      No <Radio value="no" />
    </label>
  </RadioGroup>
  <Relevant when={({ formState }) => formState.values?.married === 'yes'}>
    <Input name="spouse" label="Spouse name:" />
  </Relevant>
  <button type="submit">Submit</button>
</Form>;
```
