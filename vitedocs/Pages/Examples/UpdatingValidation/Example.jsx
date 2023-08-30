import { useMemo, useState } from 'react';
import { Debug } from 'informed';
import { Form, Select, Option, Button } from 'YourComponents';

const adultValidation = value => {
  console.log('ADULT VALIDATE');
  if (value == 'pepsi' || value == 'coke') {
    return 'Pick something that will put some hair on your chest!';
  }
};

const underageValidation = value => {
  console.log('UNDERAGE VALIDATE');
  if (value == 'tequila' || value == 'vodka') {
    return 'You are not old enough for that!!';
  }
};

const initialValues = { name: 'Elon' };

const Example = () => {
  const [age, setAge] = useState(20);

  const validate = useMemo(
    () => {
      return age >= 21 ? adultValidation : underageValidation;
    },
    [age]
  );

  return (
    <>
      <h3>Age: {age}</h3>
      <Form initialValues={initialValues}>
        <Select
          name="drink"
          label="Favorite Drink"
          validate={validate}
          validateDeps={[age]}
          defaultValue="tequila"
          validateOn="change"
          validateOnMount
          showErrorIferror>
          <Option key="coke">Coke</Option>
          <Option key="pepsi">Pepsi</Option>
          <Option key="tequila">Tequila</Option>
          <Option key="vodka">Vodka</Option>
        </Select>
        <Button
          type="button"
          onClick={() => {
            setAge(prev => (prev >= 21 ? 20 : 50));
          }}>
          Toggle Age
        </Button>

        <Debug values errors />
      </Form>
    </>
  );
};

export default Example;
