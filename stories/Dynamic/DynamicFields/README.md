# Dynamic Fields

<!-- STORY -->

```jsx
import { Form, Text, RadioGroup, Radio } from 'informed';

<Form id="dynamic-field-form">
  {({ formState }) => (
    <label htmlFor="dynamic-name">First name:</label>
    <Text field="name" id="dynamic-name" />
    <label>Are you married?</label>
    <RadioGroup field="married">
      <label htmlFor="dynamic-married-yes">Yes</label>
      <Radio value="yes" id="dynamic-married-yes" />
      <label htmlFor="dynamic-married-no">No</label>
      <Radio value="no" id="dynamic-married-no" />
    </RadioGroup>
    {
      formState.values.married === 'yes' ?
      <React.Fragment>
        <label htmlFor="dynamic-spouse">Spouse name:</label>
        <Text field="spouse" id="dynamic-spouse" />
      </React.Fragment>
      : null
    }
    <button type="submit">
      Submit
    </button>
  )}
</Form>
```
