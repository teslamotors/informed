import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import { Info } from '../../../Info';

export default function UpdatingValidation() {
  return (
    <>
      <h1>Updating Validation</h1>
      <Info>
        Sometimes you need to swap out your validation function due to an
        exteranl state change
        <br />
        <br />
        Below has a useState and toggle which will toggle between the age 20 and
        50. Pretend this is external state ( not involving informed directly).
        When the age changes we want to pass in a new validation function and
        trigger it.
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
    </>
  );
}
