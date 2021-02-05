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
    initialize
  });
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, ...rest } = userProps;

  const v = value || {};

  const {
    setCursorOffset: setCursorOffsetA,
    setCursor: setCursorA
  } = useCursorPosition({ value: v.a, inputRef: refA });
  const {
    setCursorOffset: setCursorOffsetB,
    setCursor: setCursorB
  } = useCursorPosition({ value: v.b, inputRef: refB });

  const aChange = e => {
    const newVal = { ...v };

    const val = e.target.value;

    // Remember Cursor position!
    if (e && e.target && e.target.selectionStart) {
      setCursorA(e.target.selectionStart);
    }

    const res = informedFormat(val, formatter);
    setCursorOffsetA(res.offset);
    newVal.a = res.value;

    setValue(newVal);
  };

  const bChange = e => {
    const newVal = { ...v };

    const val = e.target.value;

    // Remember Cursor position!
    if (e && e.target && e.target.selectionStart) {
      setCursorB(e.target.selectionStart);
    }

    const res = informedFormat(val, formatter);
    setCursorOffsetB(res.offset);
    newVal.b = res.value;

    setValue(newVal);
  };

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
