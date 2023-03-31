import { Input, Button } from 'YourComponents';
import { useForm, Debug } from 'informed';

const CustomForm = ({ children, ...rest }) => {
  const { formController, render, userProps } = useForm(rest);

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

const Example = () => {
  return (
    <CustomForm>
      <Input field="name" name="First name:" />
      <Button type="submit">Submit</Button>
      <Debug values />
    </CustomForm>
  );
};

export default Example;
