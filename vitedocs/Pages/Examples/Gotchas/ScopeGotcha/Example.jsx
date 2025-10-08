import { Scope, Debug, useFieldState } from 'informed';
import { Form, Input } from 'YourComponents';

const ScopedFieldState = ({ name }) => {
  const { value } = useFieldState(name);
  return (
    <pre>
      <code>{JSON.stringify(value, null, 2)}</code>
    </pre>
  );
};

const UnScopedFieldState = ({ name }) => {
  const { value } = useFieldState(name, false); // << Note the false here
  return (
    <pre>
      <code>{JSON.stringify(value, null, 2)}</code>
    </pre>
  );
};

export default function Example() {
  return (
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
}
