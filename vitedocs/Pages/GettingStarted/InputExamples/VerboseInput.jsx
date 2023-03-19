import { useField } from 'informed';
import { Form, Debug } from 'informed';

const Input = props => {
  // Calling useField makes this an informed input!
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  // The field state ( contains value, error, dirty.. etc)
  const { value } = fieldState;

  // The field api ( allows you to control the field )
  const { setValue, setTouched } = fieldApi;

  // Everything else ( your personal props and native properties )
  const { label, id, ...rest } = userProps;

  // Now you simply call render and "hook" up your inputs state and handlers
  return render(
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
    />
  );
};

const Example = () => {
  return (
    <Form>
      <Input name="name" required />
      <Debug valid pristine dirty values errors touched />
    </Form>
  );
};

export default Example;
