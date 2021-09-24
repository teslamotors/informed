# Complex Multistep Form

Somtimes you need to create a form with multiple steps but the steps are dynamic, meaning the next
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

const FirstName = () => {
  const { next } = useFormApi();

  // The next Quesion is always allergic
  const NextComponent = Allergic;

  return (
    <div>
      <label>
        Please enter your first name:
        <Text field="first" validate={validate} keepState />
      </label>
      <button type="button" onClick={() => next(NextComponent)}>
        Next
      </button>
    </div>
  );
};

const Allergic = () => {
  const { next, back } = useFormApi();
  const { value } = useFieldState('allergic');

  // Next Question depends on the state of the form
  const NextComponent = value ? EpiPen : Color;

  // Prev is always the first name question
  const PrevComponent = FirstName;

  return (
    <div>
      <label>
        Are you alergic to penut butter?:
        <Checkbox field="allergic" keepState />
      </label>
      <button type="button" onClick={() => next(NextComponent)}>
        Next
      </button>
      <button type="button" onClick={() => back(PrevComponent)}>
        Back
      </button>
    </div>
  );
};

const EpiPen = () => {
  const { next, back } = useFormApi();

  // Only relevant if the person is allergic to penut butter
  const relevant = values => values.allergic;

  // Define prev and next
  const NextComponent = Color;
  const PrevComponent = Allergic;

  return (
    <div>
      <label>
        Do you have an epipen?:
        <RadioGroup field="epipen" relevant={relevant} keepState>
          <label>
            Yes <Radio value="yes" />
          </label>
          <label>
            No <Radio value="no" />
          </label>
        </RadioGroup>
      </label>
      <button type="button" onClick={() => next(NextComponent)}>
        Next
      </button>
      <button type="button" onClick={() => back(PrevComponent)}>
        Back
      </button>
    </div>
  );
};

const Color = () => {
  const { back } = useFormApi();
  const { value } = useFieldState('allergic');

  // Prev depends on the state of the form
  const PrevComponent = value ? EpiPen : Allergic;

  return (
    <div>
      <label>
        Please enter your favorite color:
        <Text field="color" validate={validate} keepState />
      </label>
      <button type="button" onClick={() => back(PrevComponent)}>
        Back
      </button>
      <button type="submit">Submit</button>
    </div>
  );
};

const Steps = () => {
  const { Current } = useFormState();
  return Current ? <Current /> : <FirstName />;
};

const Buttons = () => {
  const { setCurrent } = useFormApi();

  return (
    <div>
      <button type="button" onClick={() => setCurrent(FirstName)}>
        Jump2 FirstName
      </button>
      <button type="button" onClick={() => setCurrent(Allergic)}>
        Jump2 Allergic
      </button>
      <button type="button" onClick={() => setCurrent(EpiPen)}>
        Jump2 EpiPen
      </button>
      <button type="button" onClick={() => setCurrent(Color)}>
        Jump2 Color
      </button>
    </div>
  );
};

<Form>
  <div style={{ border: 'solid 1px', padding: '10px', marginBottom: '10px' }}>
    <Steps />
  </div>
  <Buttons />
</Form>;
```
