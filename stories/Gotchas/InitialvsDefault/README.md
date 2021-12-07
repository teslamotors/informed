# Initial Vs Default

<br/>

Sometimes you may want to have a default value for an input that is NOT affected by initial values.

Below is an example where we have some inputs. One of the inputs asks if we love Tesla!

Of course, we want that field to default to `true`!

However, if we decide to achieve this by passing `initialValue` at the fieldLevel we screw ourselves!

Why? Because if the user for some stupid reason, had selected "no" and then we wanted to pre populate the form ( during an edit ). It would never get set.

<!-- STORY -->

#### Code:

```jsx
import React from 'react';
import { Form, Input, RadioGroup, Radio, Debug } from 'informed';

const Example = () => {
  const initialValues = {
    name: 'Joe',
    age: 26,
    love: 'no' // << GOAL the form should read NO
  };

  return (
    <React.Fragment>
      <Form initialValues={initialValues}>
        <Input name="name" label="First Name" />
        <Input type="number" name="age" label="Age" />
        {/* Note we passed defaultValue here ( GOOD ) */}
        <RadioGroup name="love" label="Do You Love Tesla?" defaultValue="yes">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </RadioGroup>
        <button type="submit" variant="primary">
          submit
        </button>
        <Debug values initialValues defaultValues />
      </Form>
      <Form initialValues={initialValues}>
        <Input name="name" label="First Name" />
        <Input type="number" name="age" label="Age" />
        {/* Note we passed initialValue here ( BAD ) */}
        <RadioGroup name="love" label="Do You Love Tesla?" initialValue="yes">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </RadioGroup>
        <button type="submit" variant="primary">
          submit
        </button>
        <Debug values initialValues defaultValues />
      </Form>
    </React.Fragment>
  );
};
```
