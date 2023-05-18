import { Info } from '../../../Info';
import { SideBySide } from '../../../SideBySide';
import Code from '../../../YourComponents/Code';
import MoreExamples from './ApiRefMoreExamples';
import moreExampleCode from './ApiRefMoreExamples.jsx?raw';

export default function FormApiRef() {
  return (
    <>
      <h1>
        <code>formApiRef</code>
      </h1>
      <Info>
        Sometimes you want to control the form from outside the form context.
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<MoreExamples />}
        right={<Code links input1={moreExampleCode} />}
      />
    </>
  );
}
