# Multistep Form

Somtimes you need to create a form with multiple steps. This can easliy be done with informed. 
Below is an example of a form that has three steps. It will not proceed to the next step, 
unless the previous step is valid! It will also clear out errors from proceeding steps when 
you go back :) 

Note two very important things in the example.

1. the use of the `keepState` prop
2. the use of the `step` prop

The keep state guarentees that the state is kept from step to step when the fields are "unrendered". 

The step prop lets informed know what step in the process the field is involved.


<!-- STORY -->

```jsx
import { Form, Text, useFormApi, useFormState } from 'informed';

const validate = (value) => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
};

const Step1 = ({ next }) => {
  return (
    <div>
      <label>
        Please enter your first name:
        <Text field="first" validate={validate} keepState step={0} />
      </label>
      <button type="button" onClick={next}>Next</button>
    </div>
  );
};

const Step2 = ({ back, next }) => {
  return (
    <div>
      <label>
        Please enter your last name:
        <Text field="last" validate={validate} keepState step={1} />
      </label>
      <button type="button" onClick={next}>Next</button>
      <button type="button" onClick={back}>Back</button>
    </div>
  );
};

const Step3 = ({ back }) => {
  return (
    <div>
      <label>
        Please enter your favorite color:
        <Text field="color" validate={validate} keepState step={2} />
      </label>
      <button type="button" onClick={back}>Back</button>
      <button type="submit" >Submit</button>
    </div>
  );
};

const Step = () => {

  const { next, back } = useFormApi();
  const { step } = useFormState();

  if (step === 0) return <Step1 next={next} />;
  if (step === 1) return <Step2 next={next} back={back} />;
  if (step === 2) return <Step3 back={back} />;

};

<Form>
  <Step />
</Form>
```
