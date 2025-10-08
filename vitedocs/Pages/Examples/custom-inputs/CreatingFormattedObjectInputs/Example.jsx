import { useRef } from 'react';
import { Debug, useField, useFormApi, utils } from 'informed';
import { Form, Button } from 'YourComponents';

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

const parser = value => {
  return value.replace('+1 ', '').replace(/-/g, '');
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
    newVal.a = val;
    setValue(newVal, e, 'a');
  };

  const bChange = e => {
    const newVal = { ...v };
    const val = e.target.value;
    newVal.b = val;
    setValue(newVal, e, 'b');
  };

  const v = maskedValue || {};
  const { a, b } = v;

  return render(
    <>
      <input
        {...rest}
        ref={refA}
        value={a ? a : ''}
        onChange={aChange}
        onBlur={() => setTouched()}
      />
      <input
        {...rest}
        ref={refB}
        value={b ? b : ''}
        onChange={bChange}
        onBlur={() => setTouched()}
      />
    </>
  );
};

const SetDoublePhone = () => {

  const formApi = useFormApi();
  return (
    <Button type="button" onClick={() => formApi.setValue('doublePhone', {
      a: '4324324321',
      b: '1231231234'
    })}>Set Value</Button>
  );
};

const ResetDoublePhone = () => {
  const formApi = useFormApi();
  return (
    <Button type="reset" onClick={() => formApi.reset()}>Reset</Button>
  );
};


export default function Example() {
  return (
    <Form>
          <label>
            Double Phone
            <br/>
            <FormattedObjectInput
              field="doublePhone"
              initialValue={{
                a: '1231231234',
                b: '4324324321'
              }}
            />
          </label>
          <Button type="submit">Submit</Button>
          <ResetDoublePhone />
         <SetDoublePhone />
          <label>Values:</label>
         <Debug />
    </Form>
  );
}
