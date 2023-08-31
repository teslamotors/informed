import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';
import css from './Stepper.css?raw';

export const MultistepInitialValues = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Multistep With Initial Values</code>
      </h1>
      <Info>
        Somtimes you need to create a form with multiple steps and your initial
        values get loaded from an api call.
      </Info>
      <Info type="notice">
        Hint: Read the notes, and perform the user flow described below.
        <ol>
          <li>
            Note how even though we set the <code>initialStep="favorite"</code>{' '}
            because we had no initial values on first load it could not go
            there.
          </li>
          <li>
            Now, remember that by default infored will reset the form when
            initial values change!
          </li>
          <li>
            Note how we passed <code>resetOnlyOnscreen</code> property
          </li>
          <li>
            The resetOnlyOnscreen property will prevent the form from clearing
            out fields that are in steps not currently shown on screen.
          </li>
          <li>Click set initial vlaues</li>
          <li>
            Note how the values were set and the form jumped to the{' '}
            <code>initialStep="favorite"</code>
          </li>
          <li>Now go back to "Allergies" step via stepper nav</li>
          <li>Click set initial vlaues again</li>
          <li>
            Note how this time it stayed on the step as we already made it to
            our initial step
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
