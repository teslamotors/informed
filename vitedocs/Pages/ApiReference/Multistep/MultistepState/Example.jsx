import { Multistep, Debug, useMultistepApi, useMultistepState } from 'informed';
import { Form, Button, ButtonGroup, Input } from 'YourComponents';

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
      <Button type="button" onClick={next}>
        {capitalize(nextStep)}
      </Button>
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
      <ButtonGroup orientation="vertical" align="center">
        <Button type="button" onClick={previous}>
          {capitalize(previousStep)}
        </Button>
        <Button type="button" onClick={next}>
          {capitalize(nextStep)}
        </Button>
      </ButtonGroup>
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
      <ButtonGroup orientation="vertical" align="center">
        <Button type="button" onClick={previous}>
          {capitalize(previousStep)}
        </Button>
        <Button type="submit">Submit</Button>
      </ButtonGroup>
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
      <Debug values errors touched />
    </Form>
  );
};

export default Example;
