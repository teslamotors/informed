import { Info } from '../../../Info';
import { SideBySide } from '../../../SideBySide';
import Code from '../../../YourComponents/Code';
import Example from './RelevanceExample';
import exampleCode from './RelevanceExample.jsx?raw';

export const BaiscRelevance = () => {
  return (
    <>
      <h1>
        <code>Relevant</code>
      </h1>
      <Info>
        Relevant allows you to conditionally render fields. Below is a simple
        example the shows or hides a field depending on your age.
        <br />
        <strong>Hint:</strong> Try changing the age to something greater than 20
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={exampleCode} />}
      />
    </>
  );
};
