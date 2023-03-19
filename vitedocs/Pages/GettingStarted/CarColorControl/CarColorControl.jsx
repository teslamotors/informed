import Code from '../../../Code';
import { SideBySide } from '../../../SideBySide';
import Example from './Example';
import code from './Example.jsx?raw';
import { Info } from '../../../Info';

export default function CarColor() {
  return (
    <>
      <h2>Form Api</h2>
      <Info>
        You can gain access to the forms api via `useFormApi`. Below we create a
        button to randomly set the color of our car using `formApi.setValue`
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
