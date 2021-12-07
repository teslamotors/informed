You can also get access to `Informed`s form api via a ref as stated before:

<!-- STORY -->

```jsx
import React, { useRef } from 'react';
import { Form, Input } from 'informed';

const MyAwesomeForm = () => {
  const formApiRef = useRef();

  const handleClick = () => {
    formApiRef.current.setValue(
      'name',
      Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER))
    );
  };

  return (
    <div>
      <Form formApiRef={formApiRef}>
        <Input name="name" label="First Name:" />
        <button type="submit">Submit</button>
      </Form>
      <button onClick={handleClick}>Random</button>
    </div>
  );
};
```

<br />
