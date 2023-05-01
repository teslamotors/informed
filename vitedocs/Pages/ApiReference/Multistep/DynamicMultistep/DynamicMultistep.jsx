import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';
import css from './Stepper.css?raw';

export const DynamicMultistep = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Dynamic Multistep Forms</code>
      </h1>
      <Info>
        Somtimes you need to create a form with multiple steps and the steps are
        dynamic, meaning the next steps depend on the previous steps.
      </Info>
      <Info type="notice">
        Hint: perform the user flow described below.
        <ol>
          <li>Click the next button to trigger validation.</li>
          <li>Fill out the fields and click next.</li>
          <li>
            Select the checkbox because you're allergic to peanut butter, then
            click next.
          </li>
          <li>Select that you have an epipen, then click next.</li>
          <li>Type in your favorite color and food, DONT CLICK NEXT.</li>
          <li>
            You just remembered that you actually are NOT allergic to peanut
            butter. So Jump back to the allergies question.
          </li>
          <li>
            Uncheck the checkbox and note how the form state changes! The souse
            name goes away!
          </li>
          <li>
            Click next and note how you go to the favorite question instead of
            the epipen question.
          </li>
        </ol>
      </Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        leftStyle={{ minWidth: '500px' }}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <h2>Css Used for stepper:</h2>
      <Code input1={css} language1="css" />
      <br />
      <br />
    </>
  );
};
