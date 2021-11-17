# Multistep Forms

Somtimes you need to create a form with multiple steps and the steps are dynamic, meaning the next
steps depend on the previous steps. This can easliy be done with informed.
Below is an example of a form that has four steps. It will not proceed to the next step,
unless the previous step is valid. In addition it will only validate relevant fields where a fields "relevance"
can be defined by a `relevant` function.

This is hard to describe in words so hopefully the example below helps!

**Hint:** Perform the user flow described below.

1. Type a name into the name field and click next
2. Select the checkbox because you're allergic to penut butter :( then click next
3. Select yes becauese you have an epipen
4. Type in a color DONT CLICK SUBMIT
5. You just remembered that you actually are NOT allergic to penut butter! So Jump back to the allergy question.
6. Uncheck the checkbox and note how the form state changes! The epipen question goes away!
7. Click next and note how you go to the color question instead of the epi pen question.

<!-- STORY -->

```jsx
import { Form, Text, useFormApi, useFormState } from 'informed';

const validate = value =>
  value == null ? 'This field is required' : undefined;

/**
 *
 * At any point in time the form is in a state, and the following questions
 * need to be answered
 * 1. What is the next quesion
 * 2. What is the previous quesion
 * 3. Am I a relevant quesion
 *
 * Example: Suppose this user flow
 *
 * Name
 *   ^
 * User types name and clicks the next button
 *
 * Name ------> Allergic
 *                 ^
 * User selects yes and clicks the next button
 *
 * Name ------> Allergic( yes ) -------> EpiPen
 *                                          ^
 * User selects yes and clicks the next button
 *
 * Name ------> Allergic( yes ) -------> EpiPen( yes ) ------> Color
 *                                                               ^
 * User decides to jump back to the Allergic quesion
 *
 * Name ------> Allergic( yes ) -------> EpiPen ------> Color
 *                 ^
 * User selects No and clicks the next button
 *
 * Name ------> Allergic( no ) ------> Color
 *                                       ^
 * At this point Allergic Component decides his next is color and epi pen decides he is No longer relevant
 *
 **/

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
      <button type="button" onClick={next}>
        Next
      </button>
      <button type="button" onClick={previous}>
        Previous
      </button>
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
      <button type="button" onClick={next}>
        Next
      </button>
      <button type="button" onClick={previous}>
        Previous
      </button>
    </Multistep.Step>
  );
};

const Color = () => {
  const { next, previous } = useMultistepApi();

  return (
    <Multistep.Step step="favorite">
      <Input name="color" label="Favorite Color:" required />
      <Input name="food" label="Favorite Food:" required />
      <button type="button" onClick={next}>
        Next
      </button>
      <button type="button" onClick={previous}>
        Previous
      </button>
      <button type="submit">Submit</button>
    </Multistep.Step>
  );
};

const Dog = () => {
  const { previous } = useMultistepApi();

  return (
    <Multistep.Step step="pets" previous="color">
      <Checkbox name="hasDog" label="Do you have a dog?" />
      <Relevant
        when={({ formApi, scope }) => formApi.getValue(`${scope}.hasDog`)}>
        <Input
          name="dogName"
          label="Whats your dogs name?"
          required
          relevant={({ formApi, scope }) => formApi.getValue(`${scope}.hasDog`)}
        />
      </Relevant>
      <button type="button" onClick={previous}>
        Previous
      </button>
      <button type="submit">Submit</button>
    </Multistep.Step>
  );
};

const Buttons = () => {
  const { setCurrent } = useMultistepApi();

  return (
    <div>
      <button type="button" onClick={() => setCurrent('info')}>
        Jump2 Info
      </button>
      <button type="button" onClick={() => setCurrent('allergies')}>
        Jump2 Allergic
      </button>
      <button type="button" onClick={() => setCurrent('treatment')}>
        Jump2 EpiPen
      </button>
      <button type="button" onClick={() => setCurrent('favorite')}>
        Jump2 Color
      </button>
      <button type="button" onClick={() => setCurrent('pets')}>
        Jump2 Dog
      </button>
    </div>
  );
};

const Example = () => {
  return (
    <Form autocomplete="off">
      <Multistep>
        <Info />
        <Allergic />
        <EpiPen />
        <Color />
        <Dog />
        <Buttons />
      </Multistep>
      <Debug />
    </Form>
  );
};
```
