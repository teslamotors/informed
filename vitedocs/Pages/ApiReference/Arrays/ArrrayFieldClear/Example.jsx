import { Debug, ArrayField, useFormApi } from 'informed';
import { useRef, useState } from 'react';
import { Form, Button, Input } from 'YourComponents';

const ClearButtons = ({ arrayFieldApiRef }) => {
  const formApi = useFormApi();

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          formApi.clearValue('friends');
        }}>
        FormApi Clear
      </Button>
      <Button
        type="button"
        onClick={() => {
          arrayFieldApiRef.current.clear();
        }}>
        ArrayApi Clear
      </Button>
    </>
  );
};

const initialValue = [
  {
    name: 'Matt',
    age: '28'
  },
  {
    name: 'Hope',
    age: '23'
  }
];

const Example = () => {
  const arrayFieldApiRef = useRef();

  return (
    <>
      <Form>
        <ClearButtons arrayFieldApiRef={arrayFieldApiRef} />
        <ArrayField
          name="friends"
          initialValue={initialValue}
          arrayFieldApiRef={arrayFieldApiRef}>
          {({ add }) => {
            return (
              <>
                <Button
                  onClick={add}
                  type="button"
                  variant="accent"
                  style="outline">
                  Add
                </Button>
                <ArrayField.Items>
                  {({ remove, name }) => (
                    <>
                      <h4>{name}</h4>
                      <Input name="name" label="Name" required />
                      <Input name="age" label="Age" type="number" />
                      <Button type="button" onClick={remove} variant="negative">
                        Remove
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
    </>
  );
};

export default Example;
