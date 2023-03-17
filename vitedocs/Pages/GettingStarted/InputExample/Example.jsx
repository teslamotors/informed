// Example.jsx
import { Form, Debug, useField } from 'informed';

const onSubmit = ({ values }) => console.log(values);

const Input = props => {
  const { render, informed, userProps, ref } = useField({
    type: 'text',
    ...props
  });
  const { label, id, ...rest } = userProps;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} />
    </>
  );
};

const Example = () => (
  <Form onSubmit={onSubmit} className="your-styles">
    <div className="hide">
      <Input name="name" label="Name" placeholder="Elon" required />
    </div>
    <div className="hide">
      <Debug />
    </div>
  </Form>
);

export default Example;
