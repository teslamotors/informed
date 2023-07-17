import { Debug, useFieldState, useFieldApi } from 'informed';
import { useEffect } from 'react';
import { Form, Input } from 'YourComponents';

const Multiplyer = () => {
  return (
    <Input
      name="multiplyer"
      label="Multiplyer"
      type="number"
      defaultValue={2}
    />
  );
};

const Rate = () => {
  const { value: multiplyer, dirty } = useFieldState('multiplyer');
  const { setValueQuietly, setValue } = useFieldApi('rate');

  useEffect(
    () => {
      dirty ? setValue(multiplyer * 2) : setValueQuietly(multiplyer * 2);
    },
    [multiplyer]
  );

  return <Input name="rate" label="Rate" type="number" />;
};

const Example = () => (
  <Form>
    <Multiplyer />
    <Rate />
    <button type="submit">Submit</button>
    <Debug values dirty pristine dirt />
  </Form>
);

export default Example;
