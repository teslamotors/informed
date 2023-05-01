import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import { Info } from '../../../Info';

export default function CarColor() {
  return (
    <>
      <h1>
        <code>useFieldApi</code>
      </h1>
      <Info>
        You can gain access to a specific fields api via{' '}
        <code>useFieldApi</code>
        <br />
        <br />
        Below we create a button to randomly set the color of our car using
        <code>fieldApi.setValue</code>
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
