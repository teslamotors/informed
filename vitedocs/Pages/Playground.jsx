import { CodeBlock } from '../CodeBlock';

const CODE = `
import { Relevant, Debug } from 'informed';
import { Form, Input, Select, Checkbox } from './YourComponents';
import style from './style.css';

const onSubmit = ({ values }) => window.alert(values);

export default function App() {
  return (
    <Form onSubmit={onSubmit} initialValues={{ phone: '1234567899' }}>
    <Input name="name" label="Name" placeholder="Elon" required />
      <Input name="age" type="number" label="Age" required="Age Required" />
      <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
      <Select name="car" label="Car" initialValue="ms">
        <option value="ms">Model S</option>
        <option value="m3">Model 3</option>
        <option value="mx">Model X</option>
        <option value="my">Model Y</option>
      </Select>
      <Checkbox name="married" label="Married?" />
      <Relevant when={({ formState }) => formState.values.married}>
        <Input name="spouse" label="Spouse" />
      </Relevant>
      <button type="submit">Submit</button>
      <Debug valid pristine dirty values errors />
    </Form>
  )
}`;

export const Playground = () => {
  let urlCode = window.location.search.replace('?code=', '');

  if (urlCode) {
    urlCode = atob(urlCode, 'base64');
    urlCode = `import style from './style.css';
${urlCode}`;
  }

  const code = urlCode || CODE;

  return <CodeBlock code={code} />;
};
