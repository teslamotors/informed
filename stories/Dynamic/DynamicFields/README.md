# Dynamic Fields

Sometimes you need to conditionally render fields. Below is a simple
example the shows or hides a spouce depending on the radio selected!

<!-- STORY -->

```jsx
import { Form, Text, RadioGroup, Radio } from 'informed';

<Form>
  {({ formState }) => (
    <React.Fragment>
      <label>First name:<Text field="name"/></label>
      <label>Are you married?</label>
      <RadioGroup field="married">
        <label>Yes <Radio value="yes"/></label>
        <label>No <Radio value="no"/></label>
      </RadioGroup>
      {formState.values.married === 'yes' ? (
        <label >Spouse name:<Text field="spouse" /></label>
      ) : null}
      <button type="submit">Submit</button>
    </React.Fragment>
  )}
</Form>
```
<br/>
**WARNING:** writing this in the above way is fine, it works they way we expect and gets us what we need... BUT! There is a better way!
<br/>
<br/>

```jsx
import { Form, Text, RadioGroup, Radio, useFieldState } from 'informed';

const Spouse = () => {
  const { value: married } = useFieldState('married'); 
  return married === 'yes' ? <label >Spouse name:<Text field="spouse" /></label> : null;
};

<Form>
  <label>First name:<Text field="name"/></label>
  <label>Are you married?</label>
  <RadioGroup field="married">
    <label>Yes <Radio value="yes"/></label>
    <label>No <Radio value="no"/></label>
  </RadioGroup>
  <Spouse />
  <button type="submit">Submit</button>  
</Form>
```
<br/>

Writing code the second way can typically save excess rendering! And, it looks much cleaner.
