import { useState } from 'react';
import { Debug } from 'informed';
import { Form, Input, Checkbox } from 'YourComponents';

export default function Example() {
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
    <Form autoComplete="off">
      <strong>relevant1 called {call1} times</strong>
      <br />
      <br />
      <strong>relevant2 called {call2} times</strong>
      <br />
      <br />
      <Checkbox label="Show Info?" name="showInfo" />
      <Input
        label="Favorite Food"
        name="food"
        relevanceWhen={['showInfo']}
        relevant={relevant1}
      />
      <Input label="Favorite Movie" name="movie" relevant={relevant2} />
      <Debug values />
    </Form>
  );
}
