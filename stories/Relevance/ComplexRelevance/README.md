# Relevance Optimization

By default the relevant function will evaluate on every single form state change.

Below you can see a form with relevance on two components.

1. Has `relevanceWhen`
2. Has NO `relevanceWhen`

Click the checkbox and see what happens.

Note how the second count went up by 5, where the first went up by one!

This is because we told the first one to ONLY evaluate relevance when the `showInfo` field changes.

<!-- STORY -->

```jsx
import React, { useState } from 'react';
import { Form, Input, Checkbox, Relevant } from 'informed';

const RelevantComp = () => {
  const [call1, setCall1] = useState(0);
  const [call2, setCall2] = useState(0);

  const relevant1 = ({ formState }) => {
    setCall1(prev => prev + 1);
    return formState.values.showInfo;
  };

  const relevant2 = ({ formState }) => {
    setCall2(prev => prev + 1);
    return formState.values.showInfo;
  };

  return (
    <Form>
      <strong>relevant1 called {call1} times</strong>
      <strong>relevant2 called {call2} times</strong>
      <Checkbox label="Show Info?" name="showInfo" />
      <Input
        label="Favorite Food"
        name="food"
        relevanceWhen={['showInfo']}
        relevant={relevant1}
      />
      <Input label="Favorite Movie" name="movie" relevant={relevant2} />
      <button type="button" onClick={() => setExternalDep('BAR')}>
        Change
      </button>
      <Debug values />
    </Form>
  );
};
```
