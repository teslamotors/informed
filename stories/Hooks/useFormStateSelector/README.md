# useFormStateSelector

** Note: This feature is experimental and can still cause unnecessary re-renders on edge cases. **

This hook is all about preventing unnecessary re-renders in your React components.

```jsx
const someField = useFormStateSelector(formState => formState.values.someField);

return someField; // re-renders when formState.values.someField is changed
```

Observe in the following example that input1's state is only being rendered when it changes. If you change any of the other inputs it will not trigger a new render.

This is different than using `useFormState` which will ALWAYS trigger a re-render if any of the state changes.

<!-- STORY -->

```jsx
import React, { useRef } from 'react';
import { useFormStateSelector, get } from '@tesla/react-context-form';
import { Form, Input } from '@tesla/react-context-form-tds';

const RenderFormState = () => {
  const input1 = useFormStateSelector(formState => formState.values.input1);
  const renderedRef = useRef([]);

  renderedRef.current = [...renderedRef.current, input1];

  return (
    <pre>
      {renderedRef.current.map(val => `input1 state is now: ${val}`).join('\n')}
    </pre>
  );
};

const UseFormStateProxyExample = () => {
  return (
    <Form>
      <Input name="input1" />
      <Input name="input2" />
      <Input name="input3" />
      <Input name="input4" />
      <RenderFormState />
    </Form>
  );
};
```
