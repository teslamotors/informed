import { Debug, useField } from 'informed';
import { Form, Button } from 'YourComponents';

const CustomInput = props => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  const { value, error, showError } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { label, id, ...rest } = userProps;
  
  return render(
    <>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        {...rest}
        id={id}
        ref={ref}
        value={!value && value !== 0 ? '' : value}
        onChange={e => {
          setValue(e.target.value, e);
        }}
        onBlur={e => {
          setTouched(true, e);
        }}
        style={showError ? { border: 'solid 1px red' } : null}
      />
      {showError ? <small style={{ color: 'red' }}>{error}</small> : null}
    </>
  );
};

export default function Example() {
  return (
    <Form autocomplete="off">
      <CustomInput
        field="name"
        label="First name:"
        validateOn="change"
        required
        minLength={5}
      />
      <Button type="submit">Submit</Button>
      <Debug />
    </Form>
  );
}
