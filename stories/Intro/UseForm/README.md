### useForm Hook

Hooks are all the rage these days, and some people want to "hook things up themselves" :)
Here is an example where you can use the `useFormHook`.

<!-- STORY -->

```jsx
import { Form, Input } from 'informed';

const validate = value => {
  if (!value || value.length < 5)
    return 'Field must be at least five characters';
};

const onSubmit = ({ values }) =>
  window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);

const UseFormExample = () => {
  const { formController, formState, render } = useForm({
    onSubmit
  });

  return render(
    <form
      onReset={formController.reset}
      onSubmit={formController.submitForm}
      onKeyDown={formController.keyDown}>
      <label>
        First name:
        <Input field="name" validate={validate} />
        <small style={{ color: 'red' }}>{formState.errors.name}</small>
      </label>
      <button type="submit">Submit</button>
      <pre>
        <code>{JSON.stringify(formState, null, 2)}</code>
      </pre>
    </form>
  );
};
```

<br/>
