## But it gets easier!

Here we use the hook `useField`, BUT, instead of hooking it all up ourselves,
we just spread the informed object onto the input. Its important to note the use of fieldType,
when you want to use the informed object, you need to tell the hook what type of input
your dealing with so it knows how to handle the dom or native event.

<!-- STORY -->

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, useField } from 'informed';

const CustomInput = props => {
  const { render, informed, fieldState, userProps, ref } = useField({
    type: 'text',
    ...props
  });

  const { id, label, ...rest } = userProps;
  const { error, showError } = fieldState;

  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input
        {...rest}
        {...informed}
        ref={ref}
        style={showError ? { border: 'solid 1px red' } : null}
      />
      {showError && <small style={{ color: 'red' }}>{error}</small>}
    </>
  );
};

const Example = () => (
  <Form>
    <CustomInput
      field="name"
      label="First name:"
      validateOn="change"
      required
      minLength={5}
    />
    <button type="submit">Submit</button>
    <Debug values errors />
  </Form>
);
```
