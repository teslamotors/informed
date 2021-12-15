# FormProvider

Sometimes you dont want to render a form, just fields!

<!-- STORY -->

```jsx
import { FormProvider, Input, Debug, useFormApi } from 'informed';

const onSubmit = ({ values }) => {
  window.alert(JSON.stringify(values, null, 2));
};

const SubmitButton = () => {
  const formApi = useFormApi();

  return <button onClick={formApi.submitForm}>Submit</button>;
};

const FormProviderExample = () => {
  return (
    <FormProvider onSubmit={onSubmit}>
      <Input field="name" label="First name:" />
      <SubmitButton />
      <Debug values />
    </FormProvider>
  );
};
```
