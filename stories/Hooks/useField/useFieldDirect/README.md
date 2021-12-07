# Use Field Without Custom Input

Its NOT recomended to write forms this way but its totally doable. Below we hook up each field
via a call to useField.

The reason I say "NOT" is due to the fact that this hook is best used in a custom input. See the [custom inputs](/?path=/story/custominputs--creating-custom-inputs) section of the docs.

Also there is a great optimization that is made when using the render function that the `useField` hook returns.

<!-- STORY -->

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { useForm, useField } from 'informed';

const onSubmit = ({ values }) =>
  window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);

const MyForm = () => {
  const { formController, render } = useForm({
    onSubmit
  });

  const { informed: informName } = useField({
    formController,
    field: 'name',
    fieldType: 'text'
  });
  const { informed: informAge } = useField({
    formController,
    field: 'age',
    fieldType: 'number'
  });
  const { informed: informStatus } = useField({
    formController,
    field: 'status',
    fieldType: 'select'
  });
  const { informed: informColors } = useField({
    formController,
    field: 'colors',
    fieldType: 'select',
    multiple: true
  });
  const { informed: informAuthorize } = useField({
    formController,
    field: 'authorize',
    fieldType: 'checkbox'
  });

  return render(
    <form
      onReset={formController.reset}
      onSubmit={formController.submitForm}
      onKeyDown={formController.keyDown}>
      <>
        <label>
          First name: <input {...informName} />
        </label>
        <label>
          Age: <input {...informAge} type="number" />
        </label>
        <label>
          Relationship status:
          <select {...informStatus}>
            <option value="" disabled>
              Select One...
            </option>
            <option value="single">Single</option>
            <option value="relationship">Relationship</option>
            <option value="complicated">Complicated</option>
          </select>
        </label>
        <label>
          Colors:
          <select {...informColors} style={{ height: '100px', width: '200px' }}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="purple">Purple</option>
          </select>
        </label>
        <label>
          Authorize <input type="checkbox" {...informAuthorize} />
        </label>
      </>
      <button type="submit">Submit</button>
    </form>
  );
};
```
