import { Debug } from 'informed';
import { Form, Input, Button } from 'YourComponents';

const Example = () => (
  <Form
    errorMessage={{
      required: 'This is field is required for your profile!',
      pattern: 'Field MUST match the pattern'
    }}>
    <Input
      name="firstName"
      label="First name:"
      required
      pattern="^[A-Z]{1}[a-z]+$"
      minLength={6}
      errorMessage="There is a problem with this field!"
      validateOn="change"
      showErrorIfError
    />
    <Input
      name="lastName"
      label="Last name:"
      required
      pattern="^[A-Z]{1}[a-z]+$"
      minLength={6}
      errorMessage={{
        required: 'Last name is required!',
        minLength: 'Last name must be longer'
      }}
      validateOn="change"
      showErrorIfError
    />
    <Input
      name="favoriteColor"
      label="Favorite color:"
      required
      validateOn="change"
      showErrorIfError
    />
    <Button type="submit">Submit</Button>
    <Debug values errors invalid valid />
  </Form>
);

export default Example;
