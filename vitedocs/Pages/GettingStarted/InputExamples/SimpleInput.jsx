import { useField } from 'informed';
import { Form, Debug } from 'informed';

/* ---------- Define Input Here Once! ----------- */
const Input = props => {
  const { render, informed } = useField({
    type: 'text',
    ...props
  });
  return render(<input {...informed} />);
};

/* -------- Now use Input all you want! --------- */
const Example = () => {
  return (
    <Form>
      <Input name="name" required />
      <Debug valid pristine dirty values errors touched />
    </Form>
  );
};

export default Example;
