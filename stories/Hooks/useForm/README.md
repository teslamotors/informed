# Use Form

The `useForm` hook will allow you create your own form components.

<!-- STORY -->

```jsx
import { Text, useForm } from 'informed';

const CustomForm = ({ 
  children, 
  ...rest }) => {

  const { 
    formController,
    render,
    userProps
  } = useForm(rest);

  /* --- DONT FORGET TO CALL THE RENDER METHOD FROM THE HOOK! --- */
  return render(
    <form
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}
      onKeyDown={formController.keyDown}>
      {children}
    </form>  
  );
};

<CustomForm>
  <label>
    First name:
    <Text field="name"/>
  </label>
  <button type="submit">Submit</button>
</CustomForm>
```
