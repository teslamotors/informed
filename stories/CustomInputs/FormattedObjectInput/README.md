## Formatted Object Input

Sometimes you need to make object inputs that also format per field.

<!-- STORY -->

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import React, { useRef } from 'react';
import { Form, useField, useCursorPosition, utils } from 'informed';
const { informedFormat } = utils;

const formatter = [
  '+',
  '1',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

const initialize = ({ a, b }) => {
  return {
    a: informedFormat(a, formatter).value,
    b: informedFormat(b, formatter).value
  };
};

const FormattedObjectInput = props => {
  const refA = useRef();
  const refB = useRef();

  const { fieldState, fieldApi, render, userProps } = useField({
    ...props,
    inputRefs: {
      a: refA,
      b: refB
    },
    formatter: {
      a: formatter,
      b: formatter
    },
    parser: {
      a: parser,
      b: parser
    }
  });

  const { maskedValue } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, ...rest } = userProps;

  const aChange = e => {
    const newVal = { ...v };

    const val = e.target.value;

    // update the "a" value
    newVal.a = val;

    setValue(newVal, e, 'a');
  };

  const bChange = e => {
    const newVal = { ...v };

    const val = e.target.value;

    // update the "a" value
    newVal.b = val;

    setValue(newVal, e, 'b');
  };

  const v = maskedValue || {};

  const { a, b } = v;

  return render(
    <React.Fragment>
      <input
        {...rest}
        ref={refA}
        value={a ? a : ''}
        onChange={aChange}
        onBlur={() => setTouched}
      />
      <input
        {...rest}
        ref={refB}
        value={b ? b : ''}
        onChange={bChange}
        onBlur={() => setTouched()}
      />
    </React.Fragment>
  );
};

<Form>
  <label>
    Double Phone
    <FormattedObjectInput field="doublePhone" />
  </label>
  <button type="submit">Submit</button>
  <button type="button" onClick={() => formApi.reset()}>
    Reset
  </button>
  <button
    type="button"
    onClick={() =>
      formApi.setValue('doublePhone', {
        a: '4324324321',
        b: '1231231234'
      })
    }>
    Set Value
  </button>
</Form>;
```
