import {
  Multistep,
  Debug,
  Relevant,
  useFieldState,
  useMultistepApi,
  useMultistepState
} from 'informed';
import {
  Form,
  Button,
  ButtonGroup,
  Input,
  Checkbox,
  RadioGroup,
  Radio
} from 'YourComponents';

import './Stepper.css';
import { useState } from 'react';

const Info = () => {
  const { next } = useMultistepApi();
  return (
    <Multistep.Step step="info">
      <Input name="first" label="First Name" required />
      <Input name="last" label="Last Name" required />
      <Button type="button" onClick={next}>
        Next
      </Button>
    </Multistep.Step>
  );
};

const Allergic = () => {
  const { next, previous } = useMultistepApi();
  return (
    <Multistep.Step step="allergies">
      <h5>Are you allergic to any of the following?</h5>
      <Checkbox name="peanuts" label="Peanut butter?:" />
      <Checkbox name="shellfish" label="Shellfish:" />
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

const EpiPen = () => {
  const { next, previous } = useMultistepApi();

  // Only relevant if the person is allergic to something
  const relevant = ({ formState }) => {
    const { allergies } = formState.values;
    return allergies && Object.values(allergies).some(a => !!a);
  };

  return (
    <Multistep.Step step="treatment" relevant={relevant}>
      <RadioGroup name="epipen" label="Do you have an epipen?:" required>
        <Radio value="yes">Yes</Radio>
        <Radio value="no">No</Radio>
      </RadioGroup>
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

const Color = () => {
  const { next, previous } = useMultistepApi();
  const { nextStep } = useMultistepState();

  return (
    <Multistep.Step step="favorite">
      <Input name="color" label="Favorite Color:" required />
      <Input name="food" label="Favorite Food:" required />
      <Checkbox name="pet" label="Do you have a pet?" />
      <ButtonGroup orientation="vertical" align="center">
        <Button type="button" onClick={previous}>
          Previous
        </Button>
        {nextStep ? (
          <Button type="button" onClick={next}>
            Next
          </Button>
        ) : null}
        {!nextStep ? <Button type="submit">Submit</Button> : null}
      </ButtonGroup>
    </Multistep.Step>
  );
};

const Dog = () => {
  const { previous } = useMultistepApi();

  // Only relevant if the person is has a pet
  const relevant = ({ formState }) => {
    const { favorite } = formState.values;
    return favorite?.pet;
  };

  return (
    <Multistep.Step step="pets" previous="color" relevant={relevant}>
      <Checkbox name="hasDog" label="Do you have a dog?" />
      <Relevant
        when={({ formApi, scope }) => formApi.getValue(`${scope}.hasDog`)}>
        <Input name="name" label="Whats your dogs name?" required />
      </Relevant>
      <Checkbox name="hasCat" label="Do you have a cat?" />
      <Input
        name="name"
        label="Whats your cats name?"
        required
        relevant={({ formApi, scope }) => formApi.getValue(`${scope}.hasCat`)}
      />
      <ButtonGroup orientation="vertical" align="center">
        <Button type="button" onClick={previous}>
          Previous
        </Button>
        <Button type="submit">Submit</Button>
      </ButtonGroup>
    </Multistep.Step>
  );
};

const StepperStep = ({ step, label, number, isComplete }) => {
  const { current } = useMultistepState();
  const { setCurrent } = useMultistepApi();
  const state = useFieldState(step);

  const active = current === step ? 'active' : '';
  const complete = isComplete(state) ? 'complete' : '';

  return (
    <div className="stepper-item">
      <div
        className={`stepper-counter ${active} ${complete}`}
        onClick={() => setCurrent(step)}>
        {number}
      </div>
      <div className="step-name">{label}</div>
    </div>
  );
};

const Stepper = () => {
  return (
    <div className="stepper-wrapper">
      <StepperStep
        label="Info"
        step="info"
        number="1"
        isComplete={s => s.value?.first && s.value?.last}
      />
      <div className="stepper-divider" />
      <StepperStep
        label="Allergies"
        step="allergies"
        number="2"
        isComplete={s => s.touched}
      />
      <div className="stepper-divider" />
      <StepperStep
        label="Treatment"
        step="treatment"
        number="3"
        isComplete={s => s.value?.epipen != null}
      />
      <div className="stepper-divider" />
      <StepperStep
        label="Favorite"
        step="favorite"
        number="4"
        isComplete={s => s.value?.color && s.value?.food}
      />
      <div className="stepper-divider" />
      <StepperStep
        label="Pets"
        step="pets"
        number="5"
        isComplete={s => s.value?.name}
      />
    </div>
  );
};

const Example = () => {
  const [initialValues, setInitialValues] = useState();

  return (
    <Form autocomplete="off" initialValues={initialValues} resetOnlyOnscreen>
      <Multistep initialStep="favorite">
        <Stepper />
        <Info />
        <Allergic />
        <EpiPen />
        <Color />
        <Dog />
      </Multistep>
      <Button
        type="button"
        onClick={() =>
          setInitialValues({
            info: {
              first: 'Joe',
              last: 'Puzzo'
            },
            allergies: {
              peanuts: true
            },
            treatment: {
              epipen: 'yes'
            },
            favorite: {
              color: 'Green',
              food: 'Pizza'
            }
          })
        }>
        Set Initial Values
      </Button>
      <Debug values errors touched initialValues />
    </Form>
  );
};
export default Example;
