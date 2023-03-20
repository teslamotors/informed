import { Debug, Relevant, ArrayField } from 'informed';
import { Form, Input, NumberInput, Button } from 'YourComponents';

const Example = () => (
  <Form>
    <ArrayField
      name="children"
      initialValue={[
        {
          name: 'Jake',
          age: '21'
        },
        {
          name: 'Joy',
          age: '15'
        }
      ]}>
      {({ add }) => (
        <>
          <Button onClick={add} type="button" variant="accent" style="outline">
            Add
          </Button>
          <ArrayField.Items>
            {({ remove }) => (
              <>
                <NumberInput name="age" label="Age" defaultValue={20} />
                {/* ----------------- Scoped Relevance ------------------ */}
                <Relevant
                  when={({ formApi, scope }) =>
                    formApi.getValue(`${scope}.age`) >= 21
                  }>
                  <Input
                    name="drink"
                    label="Favorite Drink?"
                    defaultValue="Tesla Tequila"
                  />
                </Relevant>
                <Button type="button" onClick={remove} variant="negative">
                  Remove
                </Button>
              </>
            )}
          </ArrayField.Items>
        </>
      )}
    </ArrayField>
    <Debug values />
  </Form>
);

export default Example;
