import { Debug, ArrayField } from 'informed';
import { useEffect, useRef, useState } from 'react';
import { Form, Button, Input } from 'YourComponents';

const Example = () => {
  // Use state that has first initial value of the array field
  const [initialValue, setInitialValue] = useState([
    {
      name: 'Matt',
      age: '28'
    },
    {
      name: 'Hope',
      age: '23'
    }
  ]);

  // Function that updates to a new initail value
  const updateInitailValue = () => {
    setInitialValue([
      {
        name: 'Bill',
        age: '30'
      },
      {
        name: 'Bob',
        age: '40'
      }
    ]);
  };

  // Reference to the array fields api
  const arrayFieldApiRef = useRef();

  // Effect that triggers reset whenever we have a new set of initial values on the array field
  useEffect(
    () => {
      arrayFieldApiRef.current.reset();
    },
    [initialValue]
  );

  return (
    <>
      <Button type="button" onClick={updateInitailValue}>
        Update Initial
      </Button>
      <Form>
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
