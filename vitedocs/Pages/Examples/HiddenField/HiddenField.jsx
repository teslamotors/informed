import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import { Info } from '../../../Info';
import Hidden from '../../../YourComponents/Hidden.jsx?raw';

export default function HiddenExample() {
  return (
    <>
      <h1>Hidden Field</h1>
      <Info>
        Sometimes you need to store values that are not shown to the user.
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <Info type="notice">
        In order to do so you must build a custom hidden field as follows:
      </Info>
      <Code input1={Hidden} />
    </>
  );
}
