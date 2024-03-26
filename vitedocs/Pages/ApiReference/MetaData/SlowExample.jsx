import { Debug, DebugField, useFieldState } from 'informed';
import { useMemo } from 'react';
import { Form, Button, ComboBox } from 'YourComponents';

// function for gathering asynchronous options ( this is dummy function that simulates api call )
const gatherOptions = value => {
  return new Promise((resolve, reject) => {
    const option = value && value.split('-')[0];

    setTimeout(() => {
      // Simulate request faulure
      if (value === 'reject') {
        return reject(new Error('Unable to fetch options'));
      }
      // Simulate options
      if (value) {
        return resolve([
          { id: 1, value: `${option}-A` },
          { id: 2, value: `${option}-B` },
          { id: 3, value: `${option}-C` },
          { id: 4, value: `${option}-D` },
          { id: 5, value: `${option}-E` }
        ]);
      }
      return resolve();
    }, 2000);
  });
};

const AddressSearch = () => {
  const { data = [], gathering } = useFieldState('address');

  return (
    <ComboBox
      name="address"
      label="Address:"
      gatherData={gatherOptions}
      items={data}
      loadingState={gathering ? 'loading' : null}
    />
  );
};

const Example = () => (
  <Form>
    <AddressSearch />
    <Button type="submit">Submit</Button>
    <Debug values data gathering touched />
    <DebugField name="address" gathering data value error touched />
  </Form>
);

export default Example;
