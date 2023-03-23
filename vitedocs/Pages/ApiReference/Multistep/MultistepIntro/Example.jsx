import { Multistep, Debug, useMultistepApi } from 'informed';
import { Form, Button, ButtonGroup, Input } from 'YourComponents';

const Info = () => {
  const { next } = useMultistepApi();
  return (
    <Multistep.Step step="info">
      <Input name="first" label="First Name" required />
      <Input name="last" label="First Name" required />
      <Button type="button" onClick={next}>
        Next
      </Button>
    </Multistep.Step>
  );
};

const Favorite = () => {
  const { next, previous } = useMultistepApi();
  return (
    <Multistep.Step step="favorite">
      <Input name="color" label="Favorite Color:" required />
      <Input name="food" label="Favorite Food:" required />
      <ButtonGroup orientation="vertical" align="center">
        <Button type="button" onClick={previous}>
          Previous
        </Button>
        <Button type="button" onClick={next}>
          Next
        </Button>
      </ButtonGroup>
    </Multistep.Step>
  );
};

const Additional = () => {
  const { previous } = useMultistepApi();
  return (
    <Multistep.Step step="additional">
      <Input name="height" label="Height:" required />
      <Input name="weight" label="Weight:" required />
      <ButtonGroup orientation="vertical" align="center">
        <Button type="button" onClick={previous}>
          Previous
        </Button>
        <Button type="submit">Submit</Button>
      </ButtonGroup>
    </Multistep.Step>
  );
};

const Example = () => {
  return (
    <Form autocomplete="off">
      <Multistep>
        <Info />
        <Favorite />
        <Additional />
      </Multistep>
      <Debug values errors touched />
    </Form>
  );
};

export default Example;
