import { useField } from 'informed';
import { Form, Debug } from 'informed';

/* ---------- Define Input Here Once! ----------- */
const Input = props => {
  // Calling useField makes this an informed input!
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  // The field state ( contains value, error, dirty.. etc)
  const { value } = fieldState;

  // The field api ( allows you to control the field )
  const { setValue, setTouched } = fieldApi;

  // Everything else ( your personal props and native properties )
  const { id, ...rest } = userProps;

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

/* -------- Now use Input all you want! --------- */
const Example = () => {
  return (
    <Form>
      <Input name="name" required />
      <Debug valid pristine dirty values errors touched />
    </Form>
  );
};

export default Example;
