import { useField } from 'informed';
import { Form, Debug } from 'informed';

const Input = props => {
  const { render, informed } = useField({
    type: 'text',
    ...props
  });
  return render(<input {...informed} />);
};

const Example = () => {
  return (
    <Form>
      <Input name="name" required />
      <Debug valid pristine dirty values errors touched />
    </Form>
  );
};

export default Example;
