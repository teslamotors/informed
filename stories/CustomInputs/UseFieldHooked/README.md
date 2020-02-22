## But it gets easier!

Here we use the hook `useField`, BUT, instead of hooking it all up ourselves, 
we just spread the informed object onto the input. Its important to note the use of fieldType, 
when you want to use the informed object, you need to tell the hook what type of input 
your dealing with so it knows how to handle the dom or native event. 

<!-- STORY -->

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, useField } from 'informed';

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

const ErrorText = (props) => {

  const { render, informed, fieldState } = useField({ fieldType: 'text', validate, ...props });

  return render(
    <>
      <input
        {...informed}
        style={fieldState.error ? { border: 'solid 1px red' } : null}
      />
      {fieldState.error ? (
        <small style={{ color: 'red' }}>{fieldState.error}</small>
      ) : null}
    </>
  );
};

<Form id="custom-form">
  <label>
    First name:
    <ErrorText
      field="name"
      validateOnChange
      validateOnBlur
    />
  </label>
  <button type="submit">Submit</button>
</Form>;
```
