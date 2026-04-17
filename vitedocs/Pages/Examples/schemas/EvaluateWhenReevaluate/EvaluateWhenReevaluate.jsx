import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function EvaluateWhenReevaluate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Evaluate When</code>
      </h1>
      <Info>
        Use <code>ui:props.evaluate</code> with <code>evaluateWhen</code> so props
        are recomputed when listed fields change. Here the car field is disabled
        and cleared when age is missing or under 16.
        <br />
        <br />
        <strong>Try it:</strong> enter an age of 16 or more to enable the car
        select, pick a model, then reduce age below 16—the car value clears and
        the control disables again.
      </Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <br />
      <br />
    </>
  );
}
