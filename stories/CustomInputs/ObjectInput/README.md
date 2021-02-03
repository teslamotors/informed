## Object Input

Sometimes you need to make object input. An input whos value is an object and made up of more than one phisical input element.

<!-- STORY -->

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import React from 'react';
import { Form, useField } from 'informed';

const ObjectInput = props => {
  const { fieldState, fieldApi, render, userProps } = useField(props);

  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, ...rest } = userProps;

  const v = value || {};

  const aChange = e => {
    const newVal = { ...v };

    newVal.a = e.target.value;

    setValue(newVal);
  };

  const bChange = e => {
    const newVal = { ...v };

    newVal.b = e.target.value;

    setValue(newVal);
  };

  const { a, b } = v;

  return render(
    <React.Fragment>
      <input
        {...rest}
        value={a ? a : ''}
        onChange={aChange}
        onBlur={() => setTouched}
      />
      <input
        {...rest}
        value={b ? b : ''}
        onChange={bChange}
        onBlur={() => setTouched()}
      />
    </React.Fragment>
  );
};

<Form>
  <label>
    Double Input
    <ObjectInput field="doubleInput" />
  </label>
  <button type="submit">Submit</button>
</Form>;
```
