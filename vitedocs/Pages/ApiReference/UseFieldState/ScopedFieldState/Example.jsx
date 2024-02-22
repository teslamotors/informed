import { Scope, useFieldState, Debug } from 'informed';
import { Form, Input } from 'YourComponents';

const ScopedFieldState = ({ name }) => {
  const { value } = useFieldState(name);
  return (
    <pre className="language-js">
      <code>{JSON.stringify(value, null, 2)}</code>
    </pre>
  );
};

const UnScopedFieldState = ({ name }) => {
  const { value } = useFieldState(name, false); // << Note the false here
  return (
    <pre className="language-js">
      <code>{JSON.stringify(value, null, 2)}</code>
    </pre>
  );
};

const Example = () => (
  <div>
    <Form>
      <Scope scope="favorite">
        <Input field="color" />
        <h5>favorite.color: ( scoped )</h5>
        <ScopedFieldState name="favorite.color" />
        <h5>color: ( scoped )</h5>
        <ScopedFieldState name="color" />
        <h5>favorite.color: ( un-scoped )</h5>
        <UnScopedFieldState name="favorite.color" />
      </Scope>
      <h5>Form State</h5>
      <Debug values />
    </Form>
  </div>
);

export default Example;
