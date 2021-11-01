# Creating Your Own Fields

But what if you dont want the out of the box stuff??

No problem, see example below!

```jsx
import { useForm, useField, Relevant, FormState } from 'informed';

// Step 1. Build your form component ---------------------

const Form = ({ children, ...props }) => {
  const { formController, render, userProps } = useForm(props);

  return render(
    <form {...userProps} onSubmit={formController.submitForm}>
      {children}
    </form>
  );
};

// Step 2. Build your input components --------------------

const Input = ({ label, ...props }) => {
  const { render, informed } = useField({ type: 'text', ...props });

  return render(
    <label>
      {label}
      <input {...informed} />
    </label>
  );
};

const ErrorInput = props => {
  const { render, informed, fieldState } = useField({
    type: 'text',
    ...props
  });

  return render(
    <>
      <input
        {...informed}
        style={fieldState.showError ? { border: 'solid 1px red' } : null}
      />
      {fieldState.showError ? (
        <small style={{ color: 'red' }}>{fieldState.error}</small>
      ) : null}
    </>
  );
};

const Checkbox = ({ label, ...props }) => {
  const { render, informed } = useField({ type: 'checkbox', ...props });

  return render(
    <label>
      {label}
      <input {...informed} />
    </label>
  );
};

const Select = ({ label, children, ...props }) => {
  const { render, informed } = useField({ type: 'select', ...props });

  return render(
    <label>
      {label}
      <select {...informed}>{children}</select>
    </label>
  );
};

// Step 3. Build your forms! ---------------------------

const onSubmit = data => console.log(data);

const ExampleForm = () => (
  <Form onSubmit={onSubmit}>
    <Input name="name" label="Name" placeholder="Elon" />
    <ErrorInput name="age" type="number" label="Age" required="Age Required" />
    <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
    <Select name="car" label="Car" initialValue="ms">
      <option value="ms">Model S</option>
      <option value="m3">Model 3</option>
      <option value="mx">Model X</option>
      <option value="my">Model Y</option>
    </Select>
    <Checkbox name="married" label="Married?" />
    <Relevant when={({ formState }) => formState.values.married}>
      <Input name="spouse" label="Spouse" />
    </Relevant>
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);
```

<!-- STORY -->
