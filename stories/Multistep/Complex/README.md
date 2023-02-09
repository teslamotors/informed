# Multistep Forms

Somtimes you need to create a form with multiple steps and the steps are dynamic, meaning the next
steps depend on the previous steps. This can easliy be done with informed.
Below is an example of a form that has four steps. It will not proceed to the next step,
unless the previous step is valid. In addition it will only validate relevant fields where a fields "relevance"
can be defined by a `relevant` function.

This is hard to describe in words so hopefully the example below helps!

**Hint:** Perform the user flow described below.

1. Click the next button to trigger validation.
1. Fill out the fields and click next.
1. Select the checkbox because you're allergic to peanut butter, then click next.
1. Select that you have an epipen, then click next.
1. Type in your favorite color and food, DONT CLICK NEXT.
1. You just remembered that you actually are NOT allergic to peanut butter. So Jump back to the allergies question.
1. Uncheck the checkbox and note how the form state changes! The souse name goes away!
1. Click next and note how you go to the favorite question instead of the epipen question.

<!-- STORY -->

```jsx
import {
  Form,
  Input,
  Multistep,
  Checkbox,
  RadioGroup,
  Radio,
  Relevant,
  Debug,
  useMultistepApi,
  useMultistepState,
  useFieldState
} from 'informed';

const validate = value =>
  value == null ? 'This field is required' : undefined;

const Info = () => {
  const { next } = useMultistepApi();
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

const Allergic = () => {
  const { next, previous } = useMultistepApi();
  return (
    <Multistep.Step step="allergies">
      <h5>Are you allergic to any of the following?</h5>
      <Checkbox name="peanuts" label="Peanut butter?:" />
      <Checkbox name="shellfish" label="Shellfish:" />
      <div className="button-group">
        <button type="button" onClick={previous}>
          Previous
        </button>
        <button type="button" onClick={next}>
          Next
        </button>
      </div>
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
      <label>
        Do you have an epipen?:
        <RadioGroup name="epipen" required>
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </RadioGroup>
      </label>
      <div className="button-group">
        <button type="button" onClick={previous}>
          Previous
        </button>
        <button type="button" onClick={next}>
          Next
        </button>
      </div>
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
      <div className="button-group">
        <button type="button" onClick={previous}>
          Previous
        </button>
        {nextStep ? (
          <button type="button" onClick={next}>
            Next
          </button>
        ) : null}
        {!nextStep ? <button type="submit">Submit</button> : null}
      </div>
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
      <div className="button-group">
        <button type="button" onClick={previous}>
          Previous
        </button>
        <button type="submit">Submit</button>
      </div>
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
  return (
    <Form autocomplete="off">
      <Multistep>
        <Stepper />
        <Info />
        <Allergic />
        <EpiPen />
        <Color />
        <Dog />
      </Multistep>
      <Debug />
    </Form>
  );
};
```

### The CSS used in this example is here

```css
.stepper-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.stepper-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
}

.stepper-item:first-child::before {
  content: none;
}
.stepper-item:last-child::after {
  content: none;
}

.stepper-divider {
  width: 100%;
  height: 5px;
  background-color: grey;
  margin-top: 22px;
}

.stepper-counter {
  border-radius: 50%;
  background-color: grey;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stepper-counter:hover {
  cursor: pointer;
}

.stepper-counter.complete {
  background-color: rgb(10, 118, 29);
}

.stepper-counter.active {
  background-color: rgb(155, 18, 29);
}
```
