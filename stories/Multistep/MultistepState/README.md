# MultistepState

Sometimes you need access to the state. Below we show what step we are on and the buttons tell us where we go if we click them.

### MultistepSate

| Name         | Example | Description                |
| ------------ | ------- | -------------------------- |
| current      | "step2" | the current step we are on |
| nextStep     | "step3" | the next step              |
| previousStep | "step1" | the previous step          |

<!-- STORY -->

```jsx
import {
  Form,
  Input,
  Multistep,
  Checkbox,
  Debug,
  useMultistepApi,
  useMultistepState
} from 'informed';

function capitalize(string) {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : string;
}

const Info = () => {
  const { next } = useMultistepApi();
  const { nextStep } = useMultistepState();
  return (
    <Multistep.Step step="info">
      <Input name="first" label="First Name" required />
      <Input name="last" label="First Name" required />
      <button type="button" onClick={next}>
        Next
      </button>
    </Multistep.Step>
  );
};

const Favorite = () => {
  const { next, previous } = useMultistepApi();
  const { nextStep, previousStep } = useMultistepState();
  return (
    <Multistep.Step step="favorite">
      <Input name="color" label="Favorite Color:" required />
      <Input name="food" label="Favorite Food:" required />
      <div className="button-group">
        <button type="button" onClick={previous}>
          {capitalize(previousStep)}
        </button>
        <button type="button" onClick={next}>
          {capitalize(nextStep)}
        </button>
      </div>
    </Multistep.Step>
  );
};

const Additional = () => {
  const { previous } = useMultistepApi();
  const { previousStep } = useMultistepState();
  return (
    <Multistep.Step step="additional">
      <Input name="height" label="Height:" required />
      <Input name="weight" label="Weight:" required />
      <div className="button-group">
        <button type="button" onClick={previous}>
          {capitalize(previousStep)}
        </button>
        <button type="submit">Submit</button>
      </div>
    </Multistep.Step>
  );
};

const StepIndicator = () => {
  const { current } = useMultistepState();

  return <h3>{capitalize(current)}</h3>;
};

const Example = () => {
  return (
    <Form autocomplete="off">
      <Multistep>
        <StepIndicator />
        <Info />
        <Favorite />
        <Additional />
      </Multistep>
      <Debug />
    </Form>
  );
};
```
