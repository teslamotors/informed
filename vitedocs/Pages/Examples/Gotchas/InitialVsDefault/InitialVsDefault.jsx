import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function InitialVsDefault() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1>
        <code>Initial Vs Default</code>
      </h1>
      <Info>
        Sometimes you may want to have a default value for an input that is NOT
        affected by initial values.
        <br />
        Below is an example where we have some inputs.
        <br />
        One of the inputs asks if we love Tesla! Of course, we want that field
        to default to `true`!
        <br />
        However, if we decide to achieve this by passing `initialValue` at the
        fieldLevel we screw ourselves! Why?
        <br />
        Because if the user for some stupid reason, had selected "no" and then
        we wanted to pre populate the form ( during an edit ).
        <br />
        It would never get set.
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
