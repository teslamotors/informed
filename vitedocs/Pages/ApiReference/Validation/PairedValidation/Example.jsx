import { Debug } from 'informed';
import { Form, Input, Button } from 'YourComponents';

const validatePassword = (value, { password1, password2 }) => {
  if (password1 !== password2) return 'Passwords must match';
};

const Example = () => {
  return (
    <Form>
      <Input
        name="password1"
        label="Password"
        required
        minLength={8}
        validate={validatePassword}
        validateOn="change"
        showErrorIfError
        validateWhen={['password2']}
      />
      <Input
        name="password2"
        label="Confirm password"
        required
        minLength={8}
        validate={validatePassword}
        validateOn="change"
        showErrorIfError
        validateWhen={['password1']}
      />
      <Button type="submit">Submit</Button>
      <Debug values errors invalid />
    </Form>
  );
};

export default Example;
