import { Debug, useField } from 'informed';
import { Form, Button } from 'YourComponents';

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
    <>
      <input
        {...rest}
        value={a ? a : ''}
        onChange={aChange}
        onBlur={() => setTouched()}
      />
      <input
        {...rest}
        value={b ? b : ''}
        onChange={bChange}
        onBlur={() => setTouched()}
      />
    </>
  );
};

export default function Example() {
  return (
    <Form>
          <label>
            Double Input
            <br />
            <ObjectInput field="doubleInput" />
          </label>
          <Button type="submit">Submit</Button>
          <label>Values:</label>
          <Debug />
    </Form>
  );
}
