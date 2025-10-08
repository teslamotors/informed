import { FormProvider, Debug, useFormApi } from 'informed';
import { Input, Button } from 'YourComponents';

const onSubmit = ({ values }) => {
  window.alert(JSON.stringify(values, null, 2));
};

const SubmitButton = () => {
  const formApi = useFormApi();

  return <Button onClick={formApi.submitForm}>Submit</Button>;
};

export default function Example() {
  return (
    <FormProvider onSubmit={onSubmit}>
      <Input field="name" label="First name:" />
      <SubmitButton />
      <Debug values />
    </FormProvider>
  );
}
