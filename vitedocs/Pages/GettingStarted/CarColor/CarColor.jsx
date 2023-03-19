import Code from '../../../Code';
import { SideBySide } from '../../../SideBySide';
import Example from './Example';
import code from './Example.jsx?raw';
import { Info } from '../../../Info';

export default function CarColor() {
  return (
    <>
      <h1>
        <code>useFieldState</code>
      </h1>
      <Info>
        You can gain access to any fields state via the `useFieldState` hook.
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={code} />}
      />
    </>
  );
}
