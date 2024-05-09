import { Debug, ArrayField, useFormApi } from 'informed';
import { useRef } from 'react';
import { Form, Button, Input } from 'YourComponents';

const initialValues = {
  friends: [
    {
      name: 'Matt',
      age: '28',
      siblings: [{ name: 'Justin ' }, { name: 'Nicole' }]
    },
    {
      name: 'Hope',
      age: '23',
      siblings: [{ name: 'Paige ' }, { name: 'Maren' }]
    }
  ]
};

const Siblings = () => {
  return (
    <ArrayField name="siblings">
      {({ add }) => {
        return (
          <>
            <Button
              onClick={add}
              type="button"
              variant="accent"
              style="outline">
              Add Sibling
            </Button>
            <ArrayField.Items>
              {({ remove, name }) => (
                <>
                  <h4>{name}</h4>
                  <Input name="name" label="Name" required />
                  <Button type="button" onClick={remove} variant="negative">
                    Remove Sibling
                  </Button>
                </>
              )}
            </ArrayField.Items>
          </>
        );
      }}
    </ArrayField>
  );
};

const ResetButton = () => {
  const formApi = useFormApi();
  return (
    <Button
      type="button"
      onClick={() => {
        formApi.reset();
      }}>
      Reset Form
    </Button>
  );
};

const Example = () => {
  const arrayFieldApiRef = useRef();

  return (
    <Form initialValues={initialValues}>
      <ResetButton />
      <br />
      <ArrayField name="friends" arrayFieldApiRef={arrayFieldApiRef}>
        {({ add }) => {
          return (
            <>
              <Button
                onClick={add}
                type="button"
                variant="accent"
                style="outline">
                Add Friend
              </Button>
              <ArrayField.Items>
                {({ remove, name }) => (
                  <>
                    <h4>{name}</h4>
                    <Input name="name" label="Name" required />
                    <Input name="age" label="Age" type="number" />
                    <div style={{ padding: '10px', paddingLeft: '30px' }}>
                      <Siblings />
                    </div>
                    <Button type="button" onClick={remove} variant="negative">
                      Remove Friend
                    </Button>
                  </>
                )}
              </ArrayField.Items>
            </>
          );
        }}
      </ArrayField>
      <Button type="submit">submit</Button>
      <Debug values modified dirty />
    </Form>
  );
};

export default Example;
