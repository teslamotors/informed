import { Debug, ArrayField } from 'informed';
import { useRef } from 'react';
import { Form, Button, Input } from 'YourComponents';

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

  const reset = () => {
    arrayFieldApiRef.current.reset();
  };

  return (
    <Form>
      <Button type="button" onClick={reset}>
        Reset
      </Button>
      <ArrayField
        name="friends"
        initialValue={initialValue}
        arrayFieldApiRef={arrayFieldApiRef}>
        {({ insert, fields }) => {
          console.log('fields', fields);
          return (
            <>
              <Button
                onClick={() =>
                  insert(0, {
                    name: 'Bill',
                    age: Math.floor(Math.random() * (65 - 19 + 1)) + 19
                  })
                }
                type="button"
                variant="accent"
                style="outline">
                Insert
              </Button>
              <Button
                onClick={() =>
                  insert(1, {
                    name: 'Bob',
                    age: Math.floor(Math.random() * (65 - 19 + 1)) + 19
                  })
                }
                type="button"
                variant="accent"
                style="outline">
                Between 0 and 1
              </Button>
              <ArrayField.Items>
                {({ remove, name, index }) => (
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
  );
};

export default Example;
