# Dynamic Fields

Sometimes you need to conditionally render fields. Below is a simple
example the shows or hides a spouce depending on the radio selected!

<!-- STORY -->

```jsx
import { Form, Text, RadioGroup, Radio, Relevant } from 'informed';

<Form>
  <label>First name:<Text field="name"/></label>
  <label>Are you married?</label>
  <RadioGroup field="married">
    <label>Yes <Radio value="yes"/></label>
    <label>No <Radio value="no"/></label>
  </RadioGroup>
  <Relevant when={({ values }) => values.married === 'yes'}>
    <label>Spouse name:<Text field="spouse" /></label>
  </Relevant>
  <button type="submit">Submit</button>
</Form>
```