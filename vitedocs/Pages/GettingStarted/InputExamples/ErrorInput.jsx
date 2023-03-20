import { useField } from 'informed';
import { Form, Debug } from 'informed';

const Input = props => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  /* ---------- Get acces to field state ----------- */
  const { value, error, showError } = fieldState;

  /* ---------- Get acces to field control ----------- */
  const { setValue, setTouched } = fieldApi;

  /* --------------- Everything else ----------------- */
  const { label, id, ...rest } = userProps;

  /* ----------------- Call Render ------------------- */
  return render(
    <>
      {/* ------------------ Label ------------------- */}
      {label ? <label htmlFor={id}>{label}</label> : null}
      {/* -------------- Native Input ---------------- */}
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
      {/* --------- Show error When showError -------- */}
      {showError ? <small style={{ color: 'red' }}>{error}</small> : null}
    </>
  );
};

const Example = () => {
  return (
    <Form>
      <Input name="name" required />
      <Debug />
    </Form>
  );
};

export default Example;
